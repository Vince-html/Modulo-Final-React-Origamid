import React, {
  useContext, useState, useRef, useEffect,
} from 'react';
import { UserContext } from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import '../../Styles/photocomments.scss';

const PhotoComments = ({ comments, single, id }) => {
  const [comentarios, setComments] = useState(() => { return comments; });
  const commentsSection = useRef(null);
  const { login } = useContext(UserContext);

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul ref={commentsSection} className={`comments ${single ? 'photo-single' : ''}`}>
        {comentarios.map((comment) => {
          return (
            <li id="comments-li" key={comment.comment_ID}>
              <b>
                {comment.comment_author}
                :
              </b>
              <span>{comment.comment_content}</span>
            </li>
          );
        })}
      </ul>
      {login && <PhotoCommentsForm id={id} single={single} setComments={setComments} />}
    </>
  );
};

export default PhotoComments;
