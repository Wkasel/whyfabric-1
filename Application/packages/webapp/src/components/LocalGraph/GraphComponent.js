import React, { useContext } from 'react';
import Cytoscape from 'cytoscape';
import CytoscapeComponent from 'react-cytoscapejs';
import edgehandles from 'cytoscape-edgehandles';
import { withSnackbar } from 'notistack';
import nodeHtmlLabel from 'cytoscape-node-html-label';
import { GraphContext, types } from './GraphContext';

import * as Data from './brexit-demo';

Cytoscape.use(nodeHtmlLabel);
Cytoscape.use(edgehandles);

const styles = [
  {
    selector: 'node[name]',
    style: {
      content: 'data(name)',
    },
  },
  {
    selector: 'node',
    style: {
      'background-color': '#ffc400',
      width: '20px',
      height: '20px',
      'overlay-padding': '5px',
      'overlay-opacity': 0,
      'z-index': 10,
      'border-width': 2,
      'border-opacity': 0,
    },
  },
  // {
  //   selector: 'node',
  //   style: {
  //     label: 'data(label)',
  //     'text-max-width': '200px',
  //     width: '20px',
  //     height: '20px',
  //   },
  // },

  {
    selector: 'edge',
    style: {
      'target-arrow-shape': 'triangle',
      'curve-style': 'unbundled-bezier',
      'control-point-distance': 30,
      'control-point-weight': 0.5,
      opacity: 0.9,
      'overlay-padding': '3px',
      'overlay-opacity': 0,
      'font-family': 'FreeSet,Arial,sans-serif',
      'font-size': 9,
      'font-weight': 'bold',
      'text-background-opacity': 1,
      'text-background-color': '#ffffff',
      'text-background-padding': 3,
      'text-background-shape': 'roundrectangle',
      width: 1,
    },
  },

  // some style for the extension

  {
    selector: '.eh-handle',
    style: {
      'background-color': 'red',
      width: 12,
      height: 12,
      shape: 'ellipse',
      'overlay-opacity': 0,
      'border-width': 12, // makes the handle easier to hit
      'border-opacity': 0,
    },
  },

  {
    selector: '.eh-hover',
    style: {
      'background-color': 'red',
    },
  },

  {
    selector: '.eh-source',
    style: {
      'border-width': 2,
      'border-color': 'red',
    },
  },

  {
    selector: '.eh-target',
    style: {
      'border-width': 2,
      'border-color': 'red',
    },
  },

  {
    selector: '.eh-preview, .eh-ghost-edge',
    style: {
      'background-color': 'red',
      'line-color': 'red',
      'target-arrow-color': 'red',
      'source-arrow-color': 'red',
    },
  },

  {
    selector: '.eh-ghost-edge.eh-preview-active',
    style: {
      opacity: 0,
    },
  },
];

const Graph = ({ state, dispatch }) => {
  // props.enqueueSnackbar('test', {
  //   variant: 'error',
  // });
  // let layout = [];
  // if (state.data.layout) {
  //   layout = state.data.layout;
  // }
  return (
    <CytoscapeComponent
      elements={Data}
      autolock
      layout={{
        name: 'preset',
        positions: undefined, // map of (node id) => (position obj); or function(node){ return somPos; }
        zoom: undefined, // the zoom level to set (prob want fit = false if set)
        pan: undefined, // the pan level to set (prob want fit = false if set)
        fit: true, // whether to fit to viewport
        padding: 30, // padding on fit
        animate: false, // whether to transition the node positions
        animationDuration: 500, // duration of animation in ms if enabled
        animationEasing: undefined, // easing of animation if enabled
        animateFilter(node, i) {
          return true;
        }, // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
        ready: undefined, // callback on layoutready
        stop: undefined, // callback on layoutstop
        transform(node, position) {
          return position;
        }, // transform a given node position. Useful for changing flow direction in discrete layouts
        // some more options here...
      }}
      cy={(cy) => {
        const defaults = {
          preview: true, // whether to show added edges preview before releasing selection
          hoverDelay: 150, // time spent hovering over a target node before it is considered selected
          handleNodes: 'node', // selector/filter function for whether edges can be made from a given node
          snap: true, // when enabled, the edge can be drawn by just moving close to a target node
          snapThreshold: 50, // the target node must be less than or equal to this many pixels away from the cursor/finger
          snapFrequency: 15, // the number of times per second (Hz) that snap checks done (lower is less expensive)
          noEdgeEventsInDraw: false, // set events:no to edges during draws, prevents mouseouts on compounds
          disableBrowserGestures: true, // during an edge drawing gesture, disable browser gestures such as two-finger trackpad swipe and pinch-to-zoom
          handlePosition(node) {
            return 'middle top'; // sets the position of the handle in the format of "X-AXIS Y-AXIS" such as "left top", "middle top"
          },
          handleInDrawMode: false, // whether to show the handle in draw mode
          edgeType(sourceNode, targetNode) {
            // can return 'flat' for flat edges between nodes or 'node' for intermediate node between them
            // returning null/undefined means an edge can't be added between the two nodes
            return 'flat';
          },
          loopAllowed(node) {
            // for the specified node, return whether edges from itself to itself are allowed
            return false;
          },
          nodeLoopOffset: -50, // offset for edgeType: 'node' loops
          nodeParams(sourceNode, targetNode) {
            // for edges between the specified source and target
            // return element object to be passed to cy.add() for intermediary node
            return {};
          },
          edgeParams(sourceNode, targetNode, i) {
            // for edges between the specified source and target
            // return element object to be passed to cy.add() for edge
            // NB: i indicates edge index in case of edgeType: 'node'
            return {};
          },
          ghostEdgeParams() {
            // return element object to be passed to cy.add() for the ghost edge
            // (default classes are always added for you)
            return {};
          },
          show(sourceNode) {
            // fired when handle is shown
          },
          hide(sourceNode) {
            // fired when the handle is hidden
          },
          start(sourceNode) {
            // fired when edgehandles interaction starts (drag on handle)
            // console.log(sourceNode);
          },
          complete(sourceNode, targetNode, addedEles) {
            // console.log(this.state);
            // fired when edgehandles is done and elements are added
            console.log('completing fire of draw connection');
            dispatch({
              type: types.admin_connect_graph,
              payload: { sourceNode, targetNode, addedEles },
            });
          },
          stop(sourceNode) {
            // fired when edgehandles interaction is stopped (either complete with added edges or incomplete)
          },
          cancel(sourceNode, cancelledTargets) {
            // fired when edgehandles are cancelled (incomplete gesture)
          },
          hoverover(sourceNode, targetNode) {
            // fired when a target is hovered
          },
          hoverout(sourceNode, targetNode) {
            // fired when a target isn't hovered anymore
          },
          previewon(sourceNode, targetNode, previewEles) {
            // fired when preview is shown
          },
          previewoff(sourceNode, targetNode, previewEles) {
            // fired when preview is hidden
          },
          drawon() {
            // fired when draw mode enabled
          },
          drawoff() {
            // fired when draw mode disabled
          },
        };
        const graphData = [];
        const navigateToNode = (id, cb) => {
          const gdata = graphData.filter((n) => n.data.id === id);
          console.log(gdata[0].position);
          cy.animate(
            {
              zoom: {
                level: 2,
                position: gdata[0].position,
              },
            },
            {
              duration: 1000,
            },
            {
              complete: () => {
                cb();
              },
            }
          );
        };

        // window.__navNode = navigateToNode;

        // window.__FINDANDNAV = searchAndNav;

        cy.edgehandles(defaults);

        cy.nodeHtmlLabel([
          {
            query: 'node',
            cssClass: 'cy-title',
            halign: 'right',
            halignBox: 'right',
            valign: 'bottom',
            valignBox: 'bottom',
            tpl(data) {
              return `<p class="cy-title__name">${data.label}</p><p class="cy-title__info"></p>`;
            },
          },
        ]);
      }}
      stylesheet={styles}
      style={{ width: '700px', height: '500px' }}
    />
  );
};

export default Graph;
