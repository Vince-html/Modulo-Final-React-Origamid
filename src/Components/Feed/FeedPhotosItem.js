/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import '../../Styles/feedphotositem.scss';
import Image from '../Helper/Image';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }
  return (
    <li className="photo-li">
      <Image src={photo.src} alt={photo.title} onClick={handleClick} />
      <span className="photo-span">{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
