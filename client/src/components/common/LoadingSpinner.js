import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingSpinner = ({ message = "Loading..." }) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <Spinner animation="border" variant="primary" />
      <p className="mt-3">{message}</p>
    </div>
  );
};

export default LoadingSpinner;