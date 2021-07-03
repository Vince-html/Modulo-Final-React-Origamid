import React, { useState } from 'react';
import { COMMENT_POST } from '../../api';
import { ReactComponent as Enviar } from '../../Assets/enviar.svg';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import '../../Styles/photocommentsform.scss';

const PhotoCommentsForm = ({ id, setComments }) => {
  const { request, error } = useFetch();
  const [comment, setComment] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment('');
      setComments((comments) => { return [...comments, json]; });
    }
  }

  return (
    <form className="form-comments" onSubmit={handleSubmit}>
      <textarea
        className="form-text"
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => { return setComment(target.value); }}
      />
      <button className="btn-form-comments">
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
