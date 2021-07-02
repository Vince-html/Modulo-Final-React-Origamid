import React from 'react';

const Error = ({ error }) => {
  if (!error) return null;
  return (
    <p className="error-geral">{error}</p>
  );
};

export default Error;
