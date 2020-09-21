import Cytoscape from "cytoscape";
import Elk from "cytoscape-elk";
// import Cola from "cytoscape-cola";
import * as d3Scale from "d3-scale";
import * as d3Time from "d3-time";
// import nodeHtmlLabel from "cytoscape-node-html-label";
import moment from "moment";
import _ from "lodash";
import React from "react";
import CytoscapeComponent from "react-cytoscapejs";
import stubdata from "./stub-noxy.json";

Cytoscape.use(Elk);

class App extends React.Component {
  render() {
    const styles = [
      {
        selector: "node",
        style: {
          // label: ele => ele.position().y,
          // label: ele =>
          //   moment(ele.data().date, "YYYYMMDD").fromNow() +
          //   " : " +
          //   ele.data().label,
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

    // let genesis = stubdata.nodes[0].data.date;
    // let apex = stubdata.nodes[stubdata.nodes.length - 1].data.date;
    // console.log(
    //   `${new Date(genesis).getFullYear()} to ${new Date(apex).getFullYear()}`
    // );
    // const timeToApex = date =>
    //   d3Time.timeYear.count(new Date(date), new Date(apex));
    // const totalTimerange = () => timeToApex(genesis);
    //
    // console.log(`takes place over ${totalTimerange()}  years`);

    // const _groupings = []; // hack to track how many groups are in array
    // Attribute the Data
    /*
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
      // console.log(2017 - n.data.tApex, n.data.label);

    });
    */

    // console.log(stubdata);

    // const howManyInGroup = node =>
    //   stubdata.nodes.filter(n => n.data.tApex === node.data.tApex).length;
    //
    // stubdata.nodes.map(n => (n.data.inGroup = howManyInGroup(n)));

    const normData = { nodes: stubdata.nodes, edges: stubdata.edges };
    // const layoutdata = stubb;

    // const alignmentConstraint = () => [
    //   {
    //     type: "alignment",
    //     axis: "y",
    //     offsets: stubdata.nodes.map(n => ({ node: n.id, offset: 0 }))
    //   }
    // ];

    const scale = () => {
      // console.
    };

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
      // constraints: alignmentConstraint(),
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

    // const klayoptions = {
    //   name: "klay",
    //   nodeDimensionsIncludeLabels: false, // Boolean which changes whether label dimensions are included when calculating node dimensions
    //   fit: true, // Whether to fit
    //   padding: 20, // Padding on fit
    //   animate: false, // Whether to transition the node positions
    //   animateFilter: function(node, i) {
    //     return true;
    //   }, // Whether to animate specific nodes when animation is on; non-animated nodes immediately go to their final positions
    //   animationDuration: 500, // Duration of animation in ms if enabled
    //   animationEasing: undefined, // Easing of animation if enabled
    //   transform: function(node, pos) {
    //     return pos;
    //   }, // A function that applies a transform to the final node position
    //   ready: undefined, // Callback on layoutready
    //   stop: undefined, // Callback on layoutstop
    //   klay: {
    //     // Following descriptions taken from http://layout.rtsys.informatik.uni-kiel.de:9444/Providedlayout.html?algorithm=de.cau.cs.kieler.klay.layered
    //     addUnnecessaryBendpoints: false, // Adds bend points even if an edge does not change direction.
    //     aspectRatio: 1.6, // The aimed aspect ratio of the drawing, that is the quotient of width by height
    //     borderSpacing: 20, // Minimal amount of space to be left to the border
    //     compactComponents: false, // Tries to further compact components (disconnected sub-graphs).
    //     crossingMinimization: "LAYER_SWEEP", // Strategy for crossing minimization.
    //     /* LAYER_SWEEP The layer sweep algorithm iterates multiple times over the layers, trying to find node orderings that minimize the number of crossings. The algorithm uses randomization to increase the odds of finding a good result. To improve its results, consider increasing the Thoroughness option, which influences the number of iterations done. The Randomization seed also influences results.
    // INTERACTIVE Orders the nodes of each layer by comparing their positions before the layout algorithm was started. The idea is that the relative order of nodes as it was before layout was applied is not changed. This of course requires valid positions for all nodes to have been set on the input graph before calling the layout algorithm. The interactive layer sweep algorithm uses the Interactive Reference Point option to determine which reference point of nodes are used to compare positions. */
    //     cycleBreaking: "GREEDY", // Strategy for cycle breaking. Cycle breaking looks for cycles in the graph and determines which edges to reverse to break the cycles. Reversed edges will end up pointing to the opposite direction of regular edges (that is, reversed edges will point left if edges usually point right).
    //     /* GREEDY This algorithm reverses edges greedily. The algorithm tries to avoid edges that have the Priority property set.
    // INTERACTIVE The interactive algorithm tries to reverse edges that already pointed leftwards in the input graph. This requires node and port coordinates to have been set to sensible values.*/
    //     direction: "UP", // Overall direction of edges: horizontal (right / left) or vertical (down / up)
    //     /* UNDEFINED, RIGHT, LEFT, DOWN, UP */
    //     edgeRouting: "ORTHOGONAL", // Defines how edges are routed (POLYLINE, ORTHOGONAL, SPLINES)
    //     edgeSpacingFactor: 0.5, // Factor by which the object spacing is multiplied to arrive at the minimal spacing between edges.
    //     feedbackEdges: false, // Whether feedback edges should be highlighted by routing around the nodes.
    //     fixedAlignment: "NONE", // Tells the BK node placer to use a certain alignment instead of taking the optimal result.  This option should usually be left alone.
    //     /* NONE Chooses the smallest layout from the four possible candidates.
    // LEFTUP Chooses the left-up candidate from the four possible candidates.
    // RIGHTUP Chooses the right-up candidate from the four possible candidates.
    // LEFTDOWN Chooses the left-down candidate from the four possible candidates.
    // RIGHTDOWN Chooses the right-down candidate from the four possible candidates.
    // BALANCED Creates a balanced layout from the four possible candidates. */
    //     inLayerSpacingFactor: 1.0, // Factor by which the usual spacing is multiplied to determine the in-layer spacing between objects.
    //     layoutHierarchy: true, // Whether the selected layouter should consider the full hierarchy
    //     linearSegmentsDeflectionDampening: 0.3, // Dampens the movement of nodes to keep the diagram from getting too large.
    //     mergeEdges: false, // Edges that have no ports are merged so they touch the connected nodes at the same points.
    //     // algorithm: 'de.cau.cs.kieler.klay.layered',
    //     mergeHierarchyCrossingEdges: true, // If hierarchical layout is active, hierarchy-crossing edges use as few hierarchical ports as possible.
    //     nodeLayering: "INTERACTIVE", // Strategy for node layering.
    //     /* NETWORK_SIMPLEX This algorithm tries to minimize the length of edges. This is the most computationally intensive algorithm. The number of iterations after which it aborts if it hasn't found a result yet can be set with the Maximal Iterations option.
    // LONGEST_PATH A very simple algorithm that distributes nodes along their longest path to a sink node.
    // INTERACTIVE Distributes the nodes into layers by comparing their positions before the layout algorithm was started. The idea is that the relative horizontal order of nodes as it was before layout was applied is not changed. This of course requires valid positions for all nodes to have been set on the input graph before calling the layout algorithm. The interactive node layering algorithm uses the Interactive Reference Point option to determine which reference point of nodes are used to compare positions. */
    //     nodePlacement: "LINEAR_SEGMENTS", // Strategy for Node Placement
    //     /* BRANDES_KOEPF Minimizes the number of edge bends at the expense of diagram size: diagrams drawn with this algorithm are usually higher than diagrams drawn with other algorithms.
    // LINEAR_SEGMENTS Computes a balanced placement.
    // INTERACTIVE Tries to keep the preset y coordinates of nodes from the original layout. For dummy nodes, a guess is made to infer their coordinates. Requires the other interactive phase implementations to have run as well.
    // SIMPLE Minimizes the area at the expense of... well, pretty much everything else. */
    //     randomizationSeed: 1, // Seed used for pseudo-random number generators to control the layout algorithm; 0 means a new seed is generated
    //     routeSelfLoopInside: false, // Whether a self-loop is routed around or inside its node.
    //     separateConnectedComponents: true, // Whether each connected component should be processed separately
    //     spacing: 25, // Overall setting for the minimal amount of space to be left between objects
    //     thoroughness: 7 // How much effort should be spent to produce a nice layout..
    //   },
    //   priority: function(edge) {
    //     return null;
    //   } // Edges with a non-nil value are skipped when greedy edge cycle breaking is enabled
    // };

    // END ELK TEST
    const elkoptions = {
      name: "elk",
      debug: true,
      // grid: true,
      // maximal: true,
      flow: { axis: "x", minSeparation: 200 },
      avoidOverlap: true,
      avoidOverlapPadding: 200,
      nodeDimensionsIncludeLabels: true, // Boolean which changes whether label dimensions are included when calculating node dimensions
      fit: false, // Whether to fit
      // padding: 2, // Padding on fit
      animate: false, // Whether to transition the node positions
      ranker: "longest-path",
      directed: true,
      // sort: (a, b) => {
      //   console.log("teasdasd");
      //   console.log(a, b);
      //   return new Date(a.data("date")) - new Date(b.data("date"));
      // },
      animateFilter: function(node, i) {
        return true;
      }, // Whether to animate specific nodes when animation is on; non-animated nodes immediately go to their final positions
      animationDuration: 500, // Duration of animation in ms if enabled
      animationEasing: undefined, // Easing of animation if enabled
      transform: function(node, pos) {
        return pos;
      }, // A function that applies a transform to the final node position
      ready: undefined, // Callback on layoutready
      stop: undefined, // Callback on layoutstop
      "elk.algorithm": "layered",
      "elk.edgeRouting.sloppySplineRouting": false,
      "elk.separateConnectedComponents": true,
      elk: {
        // All options are available at http://www.eclipse.org/elk/reference.html
        // 'org.eclipse.elk.' can be dropped from the Identifier
        // Or look at demo.html for an example.
        // Enums use the name of the enum e.g.
        // searchOrder: "DFS",
        // algorithm: "layered",
        alignment: "CENTER",
        // layered: "COMPOUND",
        // direction: "UP",
        "core.options.EdgeLabelPlacement": "CENTER",
        // "alg.layered.options.LayerConstraint": "LAST_SEPARATE",
        "core.math.ElkPadding": 500,
        "spacing.edgeNode": 250,
        // "alg.layered.options.EdgeStraighteningStrategy": "IMPROVE_STRAIGHTNESS",
        // zoomToFit: true,
        // algorithm: "layered",
        // edgeRouting: "SPLINES",
        "edgeRouting.sloppySplineRouting": false,
        separateConnectedComponents: true
        // "layered.layering.strategy": "INTERACTIVE"
      },
      priority: function(edge) {
        return null;
      } // Edges with a non-nil value are skipped when geedy edge cycle breaking is enabled
    };
    return (
      <div style={containerstyle}>
        <CytoscapeComponent
          elements={stubdata}
          // cy={cy => {
          //   // console.log(cy);
          //   // console.log("test");
          //   this.cy = cy;
          //   stubdata
          //     .sort((a, b) => new Date(b.date) - new Date(a.date))
          //     .map(n => {
          //       console.log(n);
          //       let attr;
          //       if (n.group === "nodes") {
          //         attr = {
          //           removed: false,
          //           selected: false,
          //           selectable: true,
          //           locked: false,
          //           grabbable: true,
          //           classes: ""
          //         };
          //       }
          //       cy.add({
          //         group: n.group,
          //         data: n.data,
          //         ...attr
          //       });
          //     });
          //
          //   // cy.nodes().map(el => console.log("taco", el));
          //   const n = cy.nodes().filter("[date]");
          //   // console.log("hello", n);
          //   n.sort(
          //     (a, b) => new Date(a.data("date")) - new Date(b.data("date"))
          //   );
          // }}
          style={{ width: "1200px", height: "1200px" }}
          stylesheet={styles}
          layout={elkoptions}
        />
      </div>
    );
  }
}

export default App;
