/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PHOTO_GET } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from './PhotoContent';

export const Photo = () => {
  const { id } = useParams();
  const {
    data, loading, error, request,
  } = useFetch();
  useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  // eslint-disable-next-line react/jsx-boolean-value
  if (data) {
    return (
      <section className="container mainContainer">
        <PhotoContent single data={data} />
      </section>
    );
  } else return null;
};
