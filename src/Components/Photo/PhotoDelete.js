/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
import React from 'react';
import { PHOTO_DELETE } from '../../api';
import useFetch from '../../Hooks/useFetch';
import '../../Styles/photodelete.scss';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick(event) {
    const confirm = window.confirm('Tem certeza que deseja deletar?');
    if (confirm) {
      event.preventDefault();
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading && <button className="btn-delete" disabled>Deletando...</button>}

      <button onClick={handleClick} className="btn-delete">Deletar</button>
    </>
  );
};

export default PhotoDelete;
