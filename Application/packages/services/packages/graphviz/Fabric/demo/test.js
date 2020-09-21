const theory = require('./demograph.json');
const Dot = require('../Dot');
const Fabric = require('../Fabric');
const { Epoch } = require('..');
// const Epoch = require('./Epoch');

const _debug = print => console.log(JSON.stringify(print, null, 2));
const log = log => console.log(log);

// const epoch = new Epoch(graph.events);

// log(epoch);

// epoch.clusterBy(30);

(async () => {
  try {
    const epoch = new Epoch(theory.events, 400);
    const events = await epoch.events;
    const ticks = await epoch.getTicks();
    const dot = await new Dot({ events, ticks });
    const g = await dot.init();
    g.toDot();
    //   const test = dot.cx(dot.epoch.getTicks());
    // console.log(g);
    //   const dot

    // const fabric = new Fabric(theory);
    // const graph = await fabric.init();

    // _debug(dot.toDot());
    // _debug({ g, events, epoch });
  } catch (e) {
    console.log(e);
  }
})();
