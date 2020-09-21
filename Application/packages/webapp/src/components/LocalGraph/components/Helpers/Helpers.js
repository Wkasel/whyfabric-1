import React from 'react';
import PropTypes from 'prop-types';

const LoadingSpinner = () => <span>Loading...</span>;

const ErrorAlert = ({ error }) => <span>Error: {error}</span>;

ErrorAlert.propTypes = {
  error: PropTypes.string,
};

ErrorAlert.defaultProps = {
  error: '',
};

export { ErrorAlert, LoadingSpinner };
