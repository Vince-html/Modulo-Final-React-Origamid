/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import '../../Styles/feedphotositem.scss';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }
  return (
    <li className="photo-li">
      <img src={photo.src} alt={photo.title} onClick={handleClick} />
      <span className="photo-span">{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
