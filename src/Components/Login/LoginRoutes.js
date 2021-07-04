import React, { useContext } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { LoginForm } from './LoginForm';
import { LoginCreate } from './LoginCreate';
import { RedefinedAccount } from './RedefinedAccount';
import { ResetAccount } from './ResetAccount';
import { UserContext } from '../../UserContext';
import '../../Styles/login.scss';

const LoginRoutes = ({ match }) => {
  const login = useContext(UserContext);
  const history = useHistory();
  if (login === true) return history.push('/');

  return (
    <section className="login-section">
      <div className="login-acess">
        <Route path={match.url} exact component={LoginForm} />
        <Route path={`${match.url}/create`} exact component={LoginCreate} />
        <Route path={`${match.url}/perdeu`} exact component={RedefinedAccount} />
        <Route path={`${match.url}/reset`} exact component={ResetAccount} />
      </div>
    </section>
  );
};

export default LoginRoutes;
