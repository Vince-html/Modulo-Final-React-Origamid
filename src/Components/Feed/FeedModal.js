/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';
import '../../Styles/feedmodal.scss';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET } from '../../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from '../Photo/PhotoContent';

const FeedModal = ({ photo, setModalPhoto }) => {
  const {
    data, error, loading, request,
  } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutside(event) {
    if (event.target === event.currentTarget) { setModalPhoto(null); }
  }

  return (
    <div className="modal-photo" onClick={handleOutside}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent single={false} data={data} />}

    </div>
  );
};

export default FeedModal;
