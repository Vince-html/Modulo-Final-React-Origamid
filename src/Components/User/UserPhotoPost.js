import React, { useState, useEffect } from 'react';
import '../../Styles/userpost.scss';
import { useHistory } from 'react-router-dom';
import Input from '../Form/Input';
import Button from '../Form/Button';
import Error from '../Helper/Error';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_POST } from '../../api';

export const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = useState({});
  const {
    data, error, loading, request,
  } = useFetch();
  const history = useHistory();

  useEffect(() => {
    if (data) history.push('/conta');
  }, [data, history]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);
    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }
  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }
  return (
    <section className="animeLeft photo-post">

      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="text" name="peso" {...peso} />
        <Input label="Idade" type="text" name="idade" {...idade} />
        <input type="file" name="img" id="img" onChange={handleImgChange} />
        {loading ? <Button disabled> Enviando... </Button> : <Button> Enviar </Button> }
        <Error error={error} />
      </form>
      <div>
        {img.preview
        && (
        <div
          className="img-preview"
          style={{ backgroundImage: `url('${img.preview}')` }}
        />
        )}

      </div>
    </section>
  );
};
