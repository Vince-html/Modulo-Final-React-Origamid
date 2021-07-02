/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const ProtectedRoute = (props) => {
  // const history = useHistory();
  // const { login } = useContext(UserContext);

  // if (login === true)
  return <Route {...props} />;
};

export default ProtectedRoute;
