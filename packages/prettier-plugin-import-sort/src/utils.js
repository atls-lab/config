"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.traverse = exports.nodeImportSize = void 0;
exports.nodeImportSize = node => node.loc.end.column -
    node.loc.start.column -
    (node.source.loc.end.column - node.source.loc.start.column);
exports.traverse = (parts, matcher) => parts.map(part => {
    if (part.parts) {
        part.parts = exports.traverse(part.parts, matcher);
    }
    return matcher(part);
});
