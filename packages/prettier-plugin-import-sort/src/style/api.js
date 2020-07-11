"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWorkspaceModule = void 0;
const globby_1 = require("globby");
const path_1 = require("path");
const loadWorkspaces = () => {
    const exists = new Set();
    try {
        const { workspaces } = require(path_1.join(process.cwd(), '/package.json'));
        if (workspaces && workspaces.length > 0) {
            const folders = globby_1.sync(workspaces, {
                cwd: process.cwd(),
                onlyDirectories: true,
                absolute: true,
                expandDirectories: false,
            });
            folders.forEach(folder => {
                try {
                    const { name } = require(path_1.join(folder, 'package.json'));
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
const workspaces = loadWorkspaces();
exports.isWorkspaceModule = (imported) => workspaces.has(imported.moduleName);
