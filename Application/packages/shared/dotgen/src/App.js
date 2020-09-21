import Cytoscape from "cytoscape";
// import COSEBilkent from "cytoscape-cose-bilkent";
import Klay from "cytoscape-klay";
import cola from "cytoscape-cola";
import * as d3Scale from "d3-scale";
import * as d3Time from "d3-time";
import nodeHtmlLabel from "cytoscape-node-html-label";
import moment from "moment";
import _ from "lodash";
import React from "react";
import CytoscapeComponent from "react-cytoscapejs";
import stubdata from "./brexit-timescale-normalized";

Cytoscape.use(cola);
// Cytoscape.
// nodeHtmlLabel(Cytoscape);

class App extends React.Component {
  render() {
    const styles = [
      {
        selector: "node",
        style: {
          // label: ele => ele.position().y,
          label: ele =>
            moment(ele.data().date, "YYYYMMDD").fromNow() +
            " : " +
            ele.data().label,
          // label: "data(date)",
          "background-color": "#7c57c1"
        }
      },

      {
        selector: "edge",
        style: {
          "curve-style": "bezier",
          "target-arrow-shape": "triangle",
          "line-color": "#7c57c1",
          "target-arrow-color": "#7c57c1",
          opacity: 0.5
        }
      },
      {
        selector: "labels",
        style: {
          "text-wrap": "wrap",
          "text-max-width": "200px",
          "text-justification": "left",
          "font-size": "11px",
          "text-background-color": "black",
          "text-background-shape": "roundrectangle",
          "text-background-opacity": 0.05,
          "text-background-padding": "5px"
        }
      }
    ];

    let genesis = stubdata.nodes[0].data.date;
    let apex = stubdata.nodes[stubdata.nodes.length - 1].data.date;
    console.log(
      `${new Date(genesis).getFullYear()} to ${new Date(apex).getFullYear()}`
    );
    const timeToApex = date =>
      d3Time.timeYear.count(new Date(date), new Date(apex));
    const totalTimerange = () => timeToApex(genesis);

    console.log(`takes place over ${totalTimerange()}  years`);

    const _groupings = []; // hack to track how many groups are in array
    // Attribute the Data
    stubdata.nodes
      .map(n => {
        let tApex = timeToApex(n.data.date);
        _groupings.push(tApex); // hack to help us keep count
        n.data.tApex = tApex;
        return n;
      })
      .map(n => {
        n.data.inGroup = stubdata.nodes
          .filter(_n => _n.data.tApex === n.data.tApex)
          .map(n => n.data.id);
        n.data.gLen = n.data.inGroup.length;
        return n;
      });
    stubdata.nodes.map(n => {
      n.data.gPos = n.data.inGroup.indexOf(n.data.id);
      return n;
    });

    //calculate x coords
    const groupings = [...new Set(_groupings)];
    const gridYUnit = Math.round(1000 / groupings.length);
    const gridXUnit = 1500;
    stubdata.nodes.map((n, i) => {
      const lex = gridXUnit / n.data.gLen;
      const midEle = Math.round((n.data.inGroup.length - 1) / 2);
      // if (stubdata.nodes.indexOf(n))
      const newPos = lex * n.data.gPos;
      // console.log(n.data.date, newPos);
      n.position.x = newPos;

      console.log(newPos, lex, n.data.gPos * lex, midEle);
      return n;
    });

    //calculate y coords
    stubdata.nodes.map((n, i) => {
      const total = stubdata.nodes.length;
      const totalArea = () => {
        const _t = (n.data.gLen / total) * 1500;
        if (_t > 200) return 200;
        else return _t;
      };
      const block = groupings.indexOf(n.data.tApex) + 1;
      const yPos = -(block * 200);
      n.position.y = yPos;
      console.log(n.data.date, block, totalArea(), yPos);
      return n;
      // console.log(n.data);
    });
    groupings.map(g => console.log(2017 - g));

    stubdata.nodes.map(n => {
      console.log(2017 - n.data.tApex, n.data.label);
    });

    console.log(stubdata);

    // const howManyInGroup = node =>
    //   stubdata.nodes.filter(n => n.data.tApex === node.data.tApex).length;
    //
    // stubdata.nodes.map(n => (n.data.inGroup = howManyInGroup(n)));

    const normData = { nodes: stubdata.nodes, edges: stubdata.edges };
    // const layoutdata = stubb;

    const alignmentConstraint = () => [
      {
        type: "alignment",
        axis: "y",
        offsets: stubdata.nodes.map(n => ({ node: n.id, offset: 0 }))
      }
    ];

    const layout = {
      name: "preset",
      // name: "cose",
      // name: "cola",

      nodeDimensionsIncludeLabels: true, // Boolean which changes whether label dimensions are included when calculating node dimensions
      fit: true, // Whether to fit
      padding: 50, // Padding on fit
      animate: false, // Whether to transition the node positions
      avoidOverlap: true,
      // handleDisconnected: true,
      // ready: e => e.cy.center(),
      nodeSpacing: n => 20,
      // refresh: 10,
      // convergenceThreshold: 1,
      // fit: true,
      // flow: { axis: "y", minSeparation: 30 },
      // alignment: () => ({ x: 0, y: 1 }),

      // alignment: n => {
      //   // const newY = n.groupLen.
      //   // console.log(n);
      //   const align = { x: 0, y: n.position.y };
      //   return align;
      // },
      constraints: alignmentConstraint(),
      priority: function(edge) {
        return null;
      } // Edges with a non-nil value are skipped when geedy edge cycle breaking is enabled
    };
    const containerstyle = {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
      zIndex: 999
    };
    return (
      <div style={containerstyle}>
        <CytoscapeComponent
          elements={CytoscapeComponent.normalizeElements(stubdata)}
          cy={cy => {
            console.log(cy);
            this.cy = cy;
            // this.cy.nodeHtmlLabel([
            //   {
            //     query: "node",
            //     // tpl: node => `<p> class="nodes">${node.label}</p>`
            //     tpl: function(data) {
            //       // return "<span>" + data.label + "</span>";
            //       return `<p class="nodes">${data.label}</p>`;
            //     }
            //   }
            // ]);
          }}
          style={{ width: "1200px", height: "1200px" }}
          stylesheet={styles}
          layout={layout}
        />
      </div>
    );
  }
}

export default App;
