const d3Scale = require('d3-scale');
const d3Array = require('d3-array');
const { uniq } = require('lodash');
const moment = require('moment');
const twix = require('twix');

/* Epoc Class
 * @param  {Array}           events      The events array
 * @groups {Number}          groups      How many groupings to use
 * @return {Object}                      The grouped object
 */
class Epoch {
  constructor(events, partitions = 100) {
    // sort them chronologically coming in
    this.events = events.sort((a, b) => new Date(a.dateObj.dateUTC) - new Date(b.dateObj.dateUTC));
    this.apex = new Date(this.events[this.events.length - 1].dateObj.dateUTC);
    this.genesis = new Date(this.events[0].dateObj.dateUTC);
    this.timespan = this.getTimespan(this.genesis, this.apex);
    this.timespanInWords = moment(this.genesis)
      .twix(this.apex)
      .humanizeLength();
    this.timeline = moment(this.genesis)
      .twix(this.apex)
      .format();

    this.calculatedNodeWeights = this.events
      .map(event => event.startObj._id)
      .reduce(function(prev, cur) {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev;
      }, {});
    // .map(item => (this.events[item[0]] = item[1]));
    this.partitions = partitions;
    this.partitionSize = Math.floor(this.timespan / this.partitions);
    // Ticks are a calculation of the semiring
    // ticks = interval
    // Fill an arry of partition size, by partition size.
    this.ticks = Array(this.partitions)
      .fill()
      .map((_, i) => ({
        start: (i + 1) * Math.floor(this.partitionSize) - this.partitionSize,
        end: (i + 1) * Math.floor(this.partitionSize),
        rank: i + 1
      }));

    // this relies on above calculations, so we have to re-set it
    console.log(`^^^^^^^^^^^^^`);
    this.events = this.events.map(event => ({
      ...event,
      sinceGenesis: this.sinceGenesis(new Date(event.dateObj.dateUTC)),
      untilApex: this.untilApex(new Date(event.dateObj.dateUTC))
    }));
    console.log(`//^^^^^^^^^^^^^`);

    this.events = this.events.map(event => ({
      ...event,
      calculatedWeight: this.calculatedNodeWeights[event.id],
      rank: this.ticks.filter(tick => {
        if (tick.start <= event.sinceGenesis) {
          if (event.sinceGenesis <= tick.end) {
            return tick.rank;
          }
        }
      })[0].rank
    }));
    return this;
  }

  getTicks = async () => uniq(this.events.map(({ rank }) => rank));

  toJson = () => JSON.stringify(this, null, 2);
  _dump = () => this;

  // helper functions
  msToDay = ms => ms * 1000 * 3600 * 24;
  msToMo = ms => ms * 1000 * 3600 * 24 * 30;
  msToYr = ms => ms * 1000 * 3600 * 24 * 365.25; // leap year
  getTimespan = (a, b) => b.getTime() - a.getTime();
  setScale = scale => (this.scale = scale);
  sinceGenesis = event => this.getTimespan(this.genesis, event);
  untilApex = event => this.getTimespan(event, this.apex);

  /*
   * @param  {Array}           arr      The array to group items from
   * @param  {String|Function} criteria The criteria to group by
   * @return {Object}                   The grouped object
   */
  groupBy = (arr, criteria) => {
    let o = [];
    return arr.reduce((obj, item) => {
      // Check if the criteria is a function to run on the item or a property of it
      var key = typeof criteria === 'function' ? criteria(item) : item[criteria];

      // If the key doesn't exist yet, create it
      if (!obj.hasOwnProperty(key)) {
        o[key] = [];
      }

      // Push the value to the object
      o[key].push(item);

      // Return the object to the next item in the loop
      return o;
    }, {});
  };

  groupByAttr = unit =>
    this.events.reduce((acc, item) => {
      acc[item.dateObj[unit]] = [...(acc[item.dateObj[unit]] || []), item.dateObj];
      return acc;
    }, {});
}

module.exports = Epoch;
