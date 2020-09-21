const d3Scale = require("d3-scale");
const d3Time = require("d3-time");
const moment = require("moment");
const _ = require("lodash");
const stubdata = require("./src/brexit-timescale-normalized");

let genesis = stubdata.nodes[0].data.date;
let apex = stubdata.nodes[stubdata.nodes.length - 1].data.date;

const timeToApex = (date) =>
  d3Time.timeYear.count(new Date(date), new Date(apex));

const totalTimerange = () => timeToApex(genesis);

const groupData = _.chain(stubdata.nodes)
  .groupBy(({ data: { date } }) => {
    const gb = new Date(date).getFullYear();
    // console.log('----', gb);
    return gb;
  })
  .map((dates, group) => ({
    group,
    dates,
  }))
  .value();

// console.log(JSON.stringify(groupData));

console.log(`digraph brexit {`);
console.log(
  groupData
    .map((n) => n.group)
    // .reverse()
    .join(" -> ") + "; "
);

stubdata.nodes.map((data) => {
  console.log(
    `${data.data.id} [label="${moment(data.data.date).format("MMM Do YYYY")}"]`
    // `${data.data.id} [label="${data.data.label}"]`
  );
});

groupData.map((data) => {
  // const tags = data.dates;
  console.log(
    "{rank = same; " +
      data.group +
      " " +
      data.dates
        .map((d) => d.data.id)
        .map((date) => `"${date}"`)
        .join(" ") +
      "; }"
  );
});

const findNodeById = (id) => stubdata.nodes.filter((d) => d.data.id === id);
// console.log(findNodeById(13));
stubdata.edges.map((data) => {
  console.log(
    `"${findNodeById(data.data.source)[0].data.id}" -> "${
      findNodeById(data.data.target)[0].data.id
    }";`
  );
});

// console.log(JSON.stringify(tags));
console.log(`}`);
