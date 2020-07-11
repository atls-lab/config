import { format } from 'prettier'

let printer

format(';', {
  parser(text, { typescript }, options) {
    const plugin = options.plugins.find(x => x.printers && x.printers.estree);
    printer = plugin.printers.estree;
    return typescript(text);
  },
})

export { printer }
