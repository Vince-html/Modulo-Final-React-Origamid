import React, { useContext } from 'react';
import '../../Styles/photocontent.scss';
import { Link } from 'react-router-dom';
import PhotoComments from './PhotoComments';
import { UserContext } from '../../UserContext';
import PhotoDelete from './PhotoDelete';
import Image from '../Helper/Image';

const PhotoContent = ({ data, single }) => {
  const user = useContext(UserContext);

  const { photo, comments } = data;
  return (
  // <div className="photo-content">
    <div className={`photo-content ${single ? 'photo-single' : ''}`}>
      <div className="photo-content-img">
        <Image className="img" src={photo.src} alt={photo.title} />
      </div>
      <div className="photo-details">
        <div>
          <p className="author">
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>
                @
                {photo.author}
              </Link>
            )}

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
      <PhotoComments className="pht-comment" single id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
