import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Home from '../Components/Home';
import LoginRoutes from '../Components/Login/LoginRoutes';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" component={LoginRoutes} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
