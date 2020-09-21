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

import { useGraphSearch } from './hooks';

export const GraphContext = createContext();

// presets
export const types = {
  fetch_graph: 'FETCH_GRAPH',
  fetch_graph_success: 'FETCH_GRAPH_SUCCESS',
  fetch_graph_error: 'FETCH_GRAPH_ERROR',
  search_graph: 'SEARCH_GRAPH',
  animate_graph: 'ANIMATE_GRAPH',
  admin_connect_graph: 'ADMIN/CONNECT_GRAPH',
};

const initialState = {
  isLoading: null,
  isError: false,
  data: {
    events: [],
    layout: [],
  },
};

const [state, dispatch] = useReducer((state, action) => {
  switch (action.type) {
    case types.fetch_graph: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.fetch_graph_success: {
      console.log(action.payload.data);
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: {
          ...action.payload.data.theory,
          layout: [...action.payload.data.graph.data],
        },
      };
    }
    case types.fetch_graph_error: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: {
          error: action.payload.error,
        },
      };
    }
    case types.admin_connect_graph: {
      console.log('dispatched connected graph');
      return {
        ...state,
        updating: true,
        notificationMsg: 'Drawing Connection',
      };
    }
    default: {
      return { ...state };
    }
  }
}, initialState);

// const { id } = useParams();
const id = 'asdas';
