import React, {
  createContext,
  useReducer,
  useEffect,
  useContext,
  useState,
} from 'react';
import PropTypes from 'prop-types';
// import { useParams } from 'react-router';
import { useSnackbar } from 'notistack';
import axios from 'axios';
// import * as JsSearch from 'js-search';
import * as lunr from 'lunr';
import { ErrorAlert, LoadingSpinner } from './components/Helpers';
import { useGraphSearch } from './hooks';

// const AdminApi = require('@whyfabric/js-api-wrapper');
// console.log(AdminApi);
// const initialState = require('./graph.json');
import * as sampleData from './brexit-demo.js';

const ENDPOINT = 'http://localhost:8000';

export const GraphContext = createContext();

export const types = {
  fetch_graph: 'FETCH_GRAPH',
  fetch_graph_success: 'FETCH_GRAPH_SUCCESS',
  fetch_graph_error: 'FETCH_GRAPH_ERROR',
  search_graph: 'SEARCH_GRAPH',
  animate_graph: 'ANIMATE_GRAPH',
  admin_connect_graph: 'ADMIN/CONNECT_GRAPH',
};

const initialState = {
  isLoading: false,
  isError: false,
  data: {
    events: [],
    layout: sampleData,
  },
};

const noticeTypes = {
  pending: ({ message }) => ({
    message,
    options: {
      key: new Date().getTime() + Math.random(),
      variant: 'info',
    },
  }),
};
// const LoadingNotification = (props) => {
//   props.call([{ message: 'test' }]);
//   return <LoadingSpinner></LoadingSpinner>;
// };

// to be moved to @whyfabric/js-api-wrapper
const rCb = (data) => data;
const AdminApi = {
  getGraphById: (id, success = rCb, failure = rCb) =>
    axios
      .get(`${ENDPOINT}/api/theories/${id}/graph`)
      .then((res) => success(res))
      .catch((error) => failure(error)),
};

// Idea -- maybe use this pattern for Container?

const GraphProvider = (props) => {
  // set up reducer
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case types.fetch_graph: {
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: sampleData,
        };
      }
      case types.fetch_graph_success: {
        console.log(action.payload.data);
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: sampleData,
          // data: {
          //   // ...action.payload.data.theory,
          //   // layout: [...action.payload.data.graph.data]
          //   // layout: sampleData
          // }
        };
      }
      case types.fetch_graph_error: {
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: sampleData,
          // data: {
          //   error: action.payload.error
          // }
        };
      }
      case types.admin_connect_graph: {
        console.log('dispatched connected graph');
        return {
          ...state,
          updating: false,
          data: sampleData,
          notificationMsg: 'Drawing Connection',
        };
      }
      default: {
        return { ...state };
      }
    }
  }, initialState);

  // subscribe to hooks
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  // const { id } = useParams();
  const id = 'test';
  // our notification effect
  useEffect(() => {
    if (state.isLoading) {
      enqueueSnackbar('loading');
    } else {
      closeSnackbar();
    }
    if (state.updating) {
      enqueueSnackbar(state.notificationMsg);
    } else {
      closeSnackbar();
    }
    if (state.isError) {
      enqueueSnackbar('error');
    }
    return () => closeSnackbar();
  });

  // fetch graph effect
  useEffect(() => {
    dispatch({ type: types.fetch_graph, payload: { id } });
    const getGraphSuccess = ({ data }) => {
      dispatch({
        type: types.fetch_graph_success,
        payload: { data, id },
      });
    };
    const getGraphFailure = (error) => {
      dispatch({ type: types.fetch_graph_error, payload: { error } });
    };

    return () => console.log('ended effect');
  }, []);

  // destructure our props
  const { children } = props;

  if (state.isError === true) {
    return <ErrorAlert error={state.data.error} />;
  }
  if (state.isLoading === true) {
    return <LoadingSpinner />;
  }
  return (
    <GraphContext.Provider value={{ state, dispatch }}>
      {children}
    </GraphContext.Provider>
  );
};

// <GraphSearch />
GraphProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default GraphProvider;
