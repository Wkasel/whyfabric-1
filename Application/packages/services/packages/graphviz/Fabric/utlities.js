const base64 = require('js-base64');
// utility functions
module.exports = {
  utils: {
    _debug: print => console.log(JSON.stringify(print, null, 2)),
    log: log => console.log(log),
    toB64: data => base64.encode(data),
    fromB64: data => base64.decode(data),
    catchify: async (f, warn = '') => {
      try {
        await f();
      } catch (e) {
        console.log({ e, warn });
        throw new Error(e);
      }
    },

    sequence: async funcs => {
      funcs.reduce((p, f) => p.then(f), Promise.resolve());
    }
  },

  // removed temporarily:
  templates: {
    tmpl: (yearConnections, allNodes, allRanks, connections) => `
strict digraph brexit {
      rankdir="LR"
      ${yearConnections}\n
      ${allNodes}\n
      ${allRanks}\n
      ${connections}\n
    }
      `,
    rankTmpl: (year, events) => `{rank = same; ${year} "${events.join('" "')}"}; \n `,
    nodeTmpl: ({ id, label }) => `\t\t "${id}" [label="${label}"]; \n`,
    cx: end => `" -> ${end}"`
  }
};
