const d3Scale = require("d3-scale");
const d3Time = require("d3-time");
const moment = require("moment");
const _ = require("lodash");
const stubdata = require("./src/brexit-timescale-normalized");

let genesis = stubdata.nodes[0].data.date;
let apex = stubdata.nodes[stubdata.nodes.length - 1].data.date;

const timeToApex = date =>
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
    dates
  }))
  .value();

// console.log(JSON.stringify(groupData));

// console.log(
//   groupData
//     .map(n => n.group)
//     .reverse()
//     .join(" -> ") + "; "
// );

//setGroup
// g.setNode('a', { label: 'A' });
stubdata.nodes.map(data => {
  console.log(
    // `${data.data.id} [label="${moment(data.data.date).format("MMM Do YYYY")}"]`
    // `g.setNode(${data.data.id}, {label:"${data.data.date}"})`
    `g.setNode(${data.data.id}, {label:"${moment(data.data.date).format(
      "MMM Do YYYY"
    )}"})`
  );
});

//createGroups
// g.setNode('top_group', {label: 'grp',clusterLabelPos: 'bottom',style: 'fill: #ffd47f'});
// g.setNode('top_group', {label: 'grp',clusterLabelPos: 'bottom'});
groupData.map(data => {
  console.log(
    // `${data.data.id} [label="${moment(data.data.date).format("MMM Do YYYY")}"]`
    `g.setNode(${data.group}, {label:"${data.group}", clusterLabelPos: 'top'})`
  );
});

// g.setParent('c', 'bottom_group');
groupData.map((data, i) => {
  data.dates.map(d =>
    console.log("g.setParent(" + d.data.id + ", " + data.group + ")")
  );
  // .map(date => `"${date}"`)
  //   " " +
  //   .join(" ") +
  // "; }"
});

groupData.map((data, i) => {
  data.dates.map(d => {
    if (i > 0)
      console.log(
        "g.setParent(" + data.group + ", " + groupData[i - 1].group + ")"
      );
    if ((i = 0))
      console.log(
        "g.setParent(" + data.group + ", " + groupData[i].group + ")"
      );
  });
  // .map(date => `"${date}"`)
  //   " " +
  //   .join(" ") +
  // "; }"
});

const findNodeById = id => stubdata.nodes.filter(d => d.data.id === id);
// console.log(findNodeById(13));
// g.setEdge('a', 'b');
stubdata.edges.map(data => {
  // console.log(
  //   `"${findNodeById(data.data.source)[0].data.id}" -> "${
  //     findNodeById(data.data.target)[0].data.id
  //   }";`
  // );
  //
  console.log(`g.setEdge(${data.data.source}, ${data.data.target})`);
});

// console.log(JSON.stringify(tags));
// console.log(`}`);
