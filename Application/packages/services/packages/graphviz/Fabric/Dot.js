const { uniq, mapValues, groupBy, omit } = require('lodash');
const Epoch = require('./Epoch');

const { utils, templates } = require('./utlities');
const { thresholdScott } = require('d3-array');
const { forEach } = require('lodash');
const { log, _debug } = utils;

class Dot {
  graph;
  ranks;
  rankCx;
  nodes;
  nodeCx;

  _configs = {
    rankSegments: 150
  };

  // epoch => {events,ticks}
  constructor(epoch, opts = {}) {
    this.epoch = epoch;
    this.opts = { ...this._configs, ...opts };
  }
  init = async () => {
    try {
      this.events = await this.epoch.events;
      this.rankCx = await this.setRankCx(this.events);
      this.nodeCx = await this.setNodeCx(this.events);
      this.nodes = await this.setNodes(this.events);
      await this.setRank(await this.setRankGroup(this.epoch.events));
      return this;
    } catch (e) {
      throw new Error(e);
    }
  };

  setRankCx = async ticks => {
    try {
      return await (await Promise.all(uniq(ticks.map(({ rank }) => rank)))).join(' -> ');
    } catch (e) {
      console.log('Error building Node Cx', e);
      throw new Error(e);
    }
  };
  setNodeCx = async events => {
    try {
      // console.log(this.cx);
      const cx = await Promise.all(
        events.map(
          ({ startObj, endObj }) =>
            [`"${startObj._id}`, `${endObj._id}"`].join(templates.cx('')) + '; \n'
        )
      );
      // cx.join(` ------ \n`);
      return cx.join('\t\t');
    } catch (e) {
      console.log('Error building Node Cx', e);
      throw new Error(e);
    }
  };
  setNodes = async events => {
    try {
      return await (await Promise.all(events.map(n => templates.nodeTmpl(n)))).join(' ');
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  };
  setRank = async _ranksGrouped => {
    try {
      let _ranks = await Promise.all(
        Object.entries(_ranksGrouped).map(([k, v]) =>
          templates.rankTmpl(
            k,
            v.map(({ id }) => id)
          )
        )
      );
      this.ranks = _ranks.join(' \t \t ');
    } catch (e) {
      console.log('Error Setting Rank', { error: e });
      throw new Error(e);
    }
  };
  setRankGroup = async events => {
    try {
      return await mapValues(groupBy(events, 'rank'), l => l.map(ev => omit(ev, 'rank')));
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  };

  toDot = () => {
    const dot = templates.tmpl(
      // no-format
      this.rankCx,
      this.nodes,
      this.ranks,
      this.nodeCx
    );

    // goodfordebugging
    console.log(dot);
    return dot;
  };

  dumpDot = ({ rankCx, nodes, ranks, nodeCx }) => {
    return templates.tmpl(rankCx, nodes, ranks, nodeCx);
  };

  // TODO: [WHYF-114] store graphviz dot as js object notation natively, then dump to string, rather than keep the rendered partials floating around.

  cx = (arr, end = '') => `"${arr.join(templates.cx(end))}"`;
  _groupBy = (arr, by) => mapValues(groupBy(arr, by), clist => clist.map(ev => omit(ev, by)));
}

module.exports = Dot;

// Notes
// DOT Graph
// rankCx -> rankCx -> rankCx
// node
// rank
// nodeCx
// -----
// 140 -> 150 -> 155
// "UDID" [label...]
// "UDID2" [label...]
// {rank = same; 140 "UDID" "UDID2"}
// "UDID" -> "UDID2"
