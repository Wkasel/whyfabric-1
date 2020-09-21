import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GraphContext, actions, types } from './GraphContext';

import Graph from './GraphComponent';

/* const SwitchCaseRender = (state) => {
  switch (state) {
    case !!state.isLoading: {
      console.log('loading...');
      return <LoadingSpinner />;
    }
    case state.isError: {
      console.log('error...');
      return <ErrorAlert />;
    }
    case !state.isLoading: {
      console.log('LOADED');
      return <Graph graph={state} />;
    }
    default: {
      console.log('default Loading');
      return <LoadingSpinner />;
    }
  }
};
*/

const GraphContainer = (props) => {
  const useGraphContext = React.useContext(GraphContext);
  // console.log(props, state);
  // console.log(dispatch({ type: 'FETCH_GRAPH' }));
  /*
  // componentDidMount() {
  //   /*
  //   // props.dispatch()
  //   // const props = this.props;
  //   // search.addIndex('name');
  //   // search.addIndex('data');
  //   // search.addIndex(['dateObj', 'year']);
  //   // search.addDocuments(props.elements.theory.events);
  //   // window.__SEARCH = search;
  //   // const searchAndNav = (term) => {
  //   //   const results = search.search(term);
  //   //   if (results) {
  //   //     console.log('results found', results);
  //   //     console.log('Im feeling lucky, navigating to first results');
  //   //     navigateToNode(results[0].id);
  //   //   } else {
  //   //     console.log('no results found for query: ', term);
  //   //   }
  //   // };
  //   // this.props.fetchGraphById(this.props.theoryId);
  // }
  // // static getDerivedStateFromProps(next, prev) {
  // //   console.log(next, prev);
  // // }
  // // } else {
  // //   return <span>Loading...</span>;
  // // }
  // }
  // render() {
  //   const { graph, error, pending } = this.props;
  //   // if (!this.shouldComponentRender()) return <LoadingSpinner />;
  //   if (graph.graph && graph.graph.length > 0) {
  //     return (
  //       <>
  //         {error && <span className="graph-error">{error}</span>}
  //         <Graph graph={graph} />
  //       </>
  //     );
  //   } else {
  //     console.log(graph);
  //     return <h1>Test</h1>;
  //   }
  // }
  // render() {
  // console.log(this.context);
  // */
  return <Graph {...useGraphContext} />;
};

export default GraphContainer;
