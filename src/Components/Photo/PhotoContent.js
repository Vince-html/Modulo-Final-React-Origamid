import React from 'react';
import '../../Styles/photocontent.scss';
import { Link } from 'react-router-dom';
import PhotoComments from './PhotoComments';

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;
  return (
    <div className="photo-content">
      <div className="photo-content-img">
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className="photo-details">
        <div>
          <p className="author">
            <Link to={`/perfil/${photo.author}`}>
              @
              {photo.author}
            </Link>
            <span className="visualizacoes">{photo.acessos}</span>
          </p>
          <h1 className="title-geral">
            <Link to={`/foto/${photo.id}`}>
              {photo.title}
            </Link>
          </h1>
          <ul className="attributes">
            <li>
              {photo.peso}
              kg
            </li>
            <li>
              {photo.idade}
              anos
            </li>

          </ul>
        </div>

      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
