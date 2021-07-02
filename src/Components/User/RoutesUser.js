import React from 'react';
import { Route, Switch } from 'react-router-dom';

import '../../Styles/userroute.scss';
import { UserPhotoPost } from './UserPhotoPost';
import { UserFeed } from './UserFeed';
import { UserStats } from './UserStats';
import UserHeader from './UserHeader';

export const RoutesUser = ({ match }) => {
  return (

    <section className="user-route-section">

      <UserHeader />
      <Switch>
        <Route path={match.url} exact component={UserFeed} />
        <Route path={`${match.url}/postar`} exact component={UserPhotoPost} />
        <Route path={`${match.url}/estatisticas`} exact component={UserStats} />
      </Switch>

    </section>

  );
};
