import React, {
  createContext,
  useReducer,
  useEffect,
  useContext,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const AdminApiContext = createContext();

const config = {
  events: {
    create: {},
    read: {},

    update: {},
    delete: () => ({
      type: (prepend) => `${prepend}/DELETE_EVENT`,
      call: (id) => axios.get(`/api/events/delete/${id}`),
      schema: {},
    }),
  },
  theory: {},
};
