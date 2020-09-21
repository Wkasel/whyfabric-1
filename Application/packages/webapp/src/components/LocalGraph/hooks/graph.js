import React from 'react';
import { GraphContext } from '../contexts';

const useGraphData = (graphId, success, failure) => {
  const [state, setFetchState] = useState({ loading: true, status: 'pending' });

  useEffect(() => {
    AdminApi.getGraphById(id, success, failure);

    return () => console.log('ended effect');
  }, []);

  return {
    ...state,
    status: state.status,
  };
};
