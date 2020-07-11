"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.printers = exports.parsers = void 0;
const import_sort_1 = __importDefault(require("import-sort"));
const parser_typescript_1 = require("prettier/parser-typescript");
const extract_1 = require("./extract");
const utils_1 = require("./utils");
const preprocess = (source) => {
    const normalized = source
        .split('\n')
        .map(line => {
        if (line.includes('import ') && line.includes(' from ')) {
            return line.replace(/\s{2,}/g, ' ');
        }
        return line;
    })
        .join('\n');
    const { code } = import_sort_1.default(normalized, 'import-sort-parser-typescript', require.resolve('./style'));
    return code;
};
const print = (...args) => {
    const [path] = args;
    const node = path.getNode();
    const result = extract_1.printer.print(...args);
    if (node.type === 'ImportDeclaration') {
        result.parts = utils_1.traverse(result.parts, part => {
            if (node.alignOffset > 0 && part === ' from ') {
                const fill = Array.apply(0, Array(node.alignOffset))
                    .fill(' ')
                    .join('');
                return `${fill} from `;
            }
            if (part && part.line === 'line') {
                return ' ';
            }
            return part;
        });
    }
    return result;
};
const printPreprocess = (ast, options) => {
    const imports = ast.body.filter(node => {
        return node.type === 'ImportDeclaration' && node.loc.end.line === node.loc.start.line;
    });
    let maxAlignLength = 0;
    if (imports.length > 0) {
        maxAlignLength = Math.max(...imports.map(node => utils_1.nodeImportSize(node)));
    }
    ast.body.forEach((node, index) => {
        if (node.type === 'ImportDeclaration' && node.loc.end.line === node.loc.start.line) {
            node.alignOffset = 0;
            const nodeLength = utils_1.nodeImportSize(node);
            node.alignOffset = nodeLength < maxAlignLength ? maxAlignLength - nodeLength : 0;
        }
    });
    return ast;
};
exports.parsers = {
    typescript: Object.assign(Object.assign({}, parser_typescript_1.parsers.typescript), { astFormat: 'typescript-import-sort', preprocess }),
};
exports.printers = {
    'typescript-import-sort': Object.assign(Object.assign({}, extract_1.printer), { print, preprocess: printPreprocess }),
};
