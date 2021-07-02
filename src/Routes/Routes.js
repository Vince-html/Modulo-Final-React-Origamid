import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Home from '../Components/Home';

import { UserStorage } from '../UserContext';
import LoginRoutes from '../Components/Login/LoginRoutes';
import ProtectedRoute from '../Components/Helper/ProtectedRoute';
import { RoutesUser } from '../Components/User/RoutesUser';

const Routes = () => {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Switch>
          <div className="container">
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/login" component={LoginRoutes} />
            <ProtectedRoute path="/conta" component={RoutesUser} />
          </div>
        </Switch>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
};

export default Routes;
