import React, { useEffect } from 'react';
import { STATS_GET } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';

const UserStatsGraphs = React.lazy(() => { import('./UserStatsGraphs'); });

export const UserStats = () => {
  const {
    data, error, loading, request,
  } = useFetch();
  useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data) {
    return (
      <UserStatsGraphs data={data} />
    );
  } else return null;
};
