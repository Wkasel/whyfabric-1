const { parse } = require('svgson');
const Viz = require('viz.js');
const he = require('he');
const { merge, keyBy } = require('lodash');
const { Module, render } = require('viz.js/full.render');
const Epoch = require('./Epoch');

const Dot = require('./Dot');
const { utils } = require('./utlities');

const { _debug, log, toB64, catchify, sequence } = utils;

class Fabric {
  dot;
  _configs = {
    rankSegments: 500
  };

  constructor(theory, opts = {}) {
    this.viz = new Viz({ Module, render });
    this.theory = theory;
    this.opts = { ...this._configs, ...opts };
  }

  init = async () => {
    try {
      await this.setEpoch();
      await this.setDot();
      await this.setSvg();
      await this.setGraph();

      // Let's attach the theory event data directly to the graph data for easy reference in the UI.
      const mergedGraph = await Promise.all(
        this.graph.map(e => {
          return (e.data = {
            ...e,
            data: {
              ...e.data,
              wf: this.epoch.events.filter(event => event.id === e.data.id)[0]
            }
          });
        })
      );
      // don't need this anymore
      delete this.epoch.events;

      return {
        ...this.epoch,
        opts: this.opts,
        graph: mergedGraph
      };
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  };

  setEpoch = async () => {
    let _epoch = new Epoch(this.theory.events, this.opts.rankSegments);
    let _ticks = _epoch.getTicks();

    this.epoch = _epoch;
    this.events = this.epoch.events;

    return _epoch;
  };

  setDot = async () => {
    const dot = new Dot(this.epoch);
    let d = await dot.init();
    let _dot = await d.toDot();

    // this._dot64 = toB64(_dot);
    this.dot = _dot;

    // console.log(d);

    return _dot;
  };

  setSvg = async () => {
    let _svg = await await this.viz.renderString(this.dot);
    this._svg64 = toB64(_svg);
    this.svg = _svg;
    return _svg;
  };

  setGraph = async () => {
    let _graph = await this.parseSvg(this.svg);
    this.graph = _graph;
    return _graph;
  };

  _dump = () => ({ graph: this.graph, events: this.epoch.events });
  /**
   * @param {Buffer} Buffer of SVG Object
   * @returns {Buffer} Buffer stream of raw SVG
   */
  parseSvg = async svg => {
    return parse(svg).then(jsonSvg => {
      const nodes = [];
      const edges = [];
      // console.log(jsonSvg)
      jsonSvg.children[0].children.map(node => {
        if (node.children[1] && node.children[1].name) {
          if (node.children[0].name === 'title') {
            const edge = node.children[0].children[0].value.split('&#45;&gt;');
            if (edge.length === 2) {
              edges.push({
                data: {
                  source: he.decode(edge[0]),
                  target: he.decode(edge[1])
                }
              });
            }
          }
          if (node.children[1].name === 'ellipse') {
            nodes.push({
              group: 'nodes',
              data: {
                id: he.decode(node.children[0].children[0].value)
              },
              position: {
                x: -(-node.children[1].attributes.cx),
                y: -(-node.children[1].attributes.cy)
              }
            });
          }
        }
      });
      return [...nodes, ...edges];
    });
  };
}

module.exports = Fabric;

// CHANGELOG:
// v0.3 = Extracted Dot into it's own library
// v0.2 = Uses Viz.js to generate -- simplifies tremendously
// v0.1 = Uses GraphLib via STDIN
/*
  // DEPRECATED
  //  * @param {string} base64 encode
  //  * @returns {Buffer} Buffer stream of raw SVG
  //
  // stream2GraphvizPipeline: async (stdin) => {
  //   // debugging below? Add: -o test123.svg
  //   return await exec(`dot -Tsvg <<< "${stdin}"`).then((ret) => ret.stdout);
  // }
  */
