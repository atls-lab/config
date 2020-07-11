import sortImports from 'import-sort'
import { parsers as prettierParsers } from 'prettier/parser-typescript'
import { printer } from './extract'
import { traverse, nodeImportSize } from './utils'

const preprocess = (source) => {
  const normalized = source
    .split('\n')
    .map(line => {
      if (line.includes('import ') && line.includes(' from ')) {
        return line.replace(/\s{2,}/g, ' ');
      }
      return line;
    })
    .join('\n')
  const { code } = sortImports(
    normalized,
    'import-sort-parser-typescript',
    require.resolve('./style'),
  );
  return code
}

const print = (...args) => {
  const [path] = args;
  const node = path.getNode();
  const result = printer.print(...args);

  if (node.type === 'ImportDeclaration') {
    result.parts = traverse(result.parts, part => {
      if (node.alignOffset > 0 && part === ' from ') {
        const fill = Array.apply(0, Array(node.alignOffset))
          .fill(' ')
          .join('')
        return `${fill} from `
      }

      if (part && part.line === 'line') {
        return ' ';
      }

      return part;
    })
  }

  return result;
}

const printPreprocess = (ast, options) => {
  const imports = ast.body.filter(node => {
    return node.type === 'ImportDeclaration' && node.loc.end.line === node.loc.start.line;
  })

  let maxAlignLength = 0

  if (imports.length > 0) {
    maxAlignLength = Math.max(...imports.map(node => nodeImportSize(node)))
  }

  ast.body.forEach((node, index) => {
    if (node.type === 'ImportDeclaration' && node.loc.end.line === node.loc.start.line) {
      node.alignOffset = 0
      const nodeLength = nodeImportSize(node)
      node.alignOffset = nodeLength < maxAlignLength ? maxAlignLength - nodeLength : 0
    }
  })

  return ast;
}

export const parsers = {
  typescript: Object.assign(
    Object.assign({}, prettierParsers.typescript),
    { astFormat: 'typescript-import-sort', preprocess },
  ),
}

export const printers = {
  'typescript-import-sort': Object.assign(
    Object.assign({}, printer),
    { print, preprocess: printPreprocess },
  ),
}
