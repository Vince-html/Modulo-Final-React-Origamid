/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React, {
  useContext, useState, useRef, useEffect,
} from 'react';
import { UserContext } from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import '../../Styles/photocomments.scss';

const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => { return props.comments; });
  const commentsSection = useRef(null);
  const { login } = useContext(UserContext);

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul ref={commentsSection} className="comments">
        {comments.map((comment) => {
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
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
};

export default PhotoComments;
