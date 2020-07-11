import { sync } from 'globby'
import { join } from 'path'

const loadWorkspaces = () => {
  const exists = new Set();
  try {
    const { workspaces } = require(join(process.cwd(), '/package.json'));
    if (workspaces && workspaces.length > 0) {
      const folders = sync(workspaces, {
        cwd: process.cwd(),
        onlyDirectories: true,
        absolute: true,
        expandDirectories: false,
      });
      folders.forEach(folder => {
        try {
          const { name } = require(join(folder, 'package.json'));
          if (name.startsWith('@')) {
            exists.add(name);
          }
        }
        catch (error) { }
      });
    }
  }
  catch (error) {
    console.log(error);
  }
  return exists;
};

const workspaces = loadWorkspaces()

export const isWorkspaceModule = (imported: any) => workspaces.has(imported.moduleName)
