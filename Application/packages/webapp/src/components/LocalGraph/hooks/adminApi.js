import React from 'react';
import { useAsync } from 'react-async-hook';
import AdminApi from '@whyfabric/js-api-wrapper';
import { GraphContext } from '../contexts';
import { LoadingSpinner, ErrorAlert } from '../components/Helpers';

const rCb = (data) => data;

axios.defaults.headers.common.authorization = localStorage.getItem('token');
if (location.hostname === 'localhost') {
  axios.defaults.baseURL = 'http://localhost:8000';
}

const useAdminApi = (graphId, success, failure) => {
  useEffect(() => {
    AdminApi.getGraphById(id, success, failure);

    return () => console.log('ended effect');
  }, []);

  return {
    ...state,
    status: state.status,
  };
};
