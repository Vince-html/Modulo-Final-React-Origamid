import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Home from '../Components/Home';

import { UserStorage } from '../UserContext';
import LoginRoutes from '../Components/Login/LoginRoutes';
import ProtectedRoute from '../Components/Helper/ProtectedRoute';
import { RoutesUser } from '../Components/User/RoutesUser';
import { Photo } from '../Components/Photo/Photo';
import UserProfile from '../Components/User/UserProfile';
import NotFound from '../Components/Helper/NotFound';

const Routes = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="app-body">
            <Switch>
              <Route path="/" exact>
                <Home className="container" />
              </Route>
              <Route path="/login" component={LoginRoutes} />
              <Route path="/foto/:id" component={Photo} />
              <Route path="/perfil/:user" component={UserProfile} />
              <ProtectedRoute path="/conta" component={RoutesUser} />
              <Route path="*" component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
