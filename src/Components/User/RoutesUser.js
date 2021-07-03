/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';

import '../../Styles/userroute.scss';
import { UserPhotoPost } from './UserPhotoPost';
import Feed from '../Feed/Feed';
import { UserStats } from './UserStats';
import UserHeader from './UserHeader';
import { UserContext } from '../../UserContext';

export const RoutesUser = ({ match }) => {
  const { data } = useContext(UserContext);

  return (

    <section className="user-route-section">

      <UserHeader />
      <Switch>
        <Route path={match.url} exact render={() => { return (<Feed user={data.id} />); }} />
        <Route path={`${match.url}/postar`} exact component={UserPhotoPost} />
        <Route path={`${match.url}/estatisticas`} exact component={UserStats} />
      </Switch>

    </section>

  );
};
