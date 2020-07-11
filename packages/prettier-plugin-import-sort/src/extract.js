"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printer = void 0;
const prettier_1 = require("prettier");
let printer;
exports.printer = printer;
prettier_1.format(';', {
    parser(text, { typescript }, options) {
        const plugin = options.plugins.find(x => x.printers && x.printers.estree);
        exports.printer = printer = plugin.printers.estree;
        return typescript(text);
    },
});
