import React from 'react';
import { Route } from 'react-router-dom';
import { LoginForm } from './LoginForm';
import { LoginCreate } from './LoginCreate';
import { RedefinedAccount } from './RedefinedAccount';
import { ResetAccount } from './ResetAccount';

const LoginRoutes = ({ match }) => {
  return (
    <div>
      <Route path={match.url} exact component={LoginForm} />
      <Route path={`${match.url}/create`} exact component={LoginCreate} />
      <Route path={`${match.url}/redefinir`} exact component={RedefinedAccount} />
      <Route path={`${match.url}/reset`} exact component={ResetAccount} />
    </div>
  );
};

export default LoginRoutes;
