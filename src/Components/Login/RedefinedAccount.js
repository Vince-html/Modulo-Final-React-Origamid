/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PASSWORD_RESET } from '../../api';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import Button from '../Form/Button';
import Input from '../Form/Input';
import Error from '../Helper/Error';
import '../../Styles/loginform.scss';

export const RedefinedAccount = () => {
  const [login, setLogin] = useState('');
  const [key, setKey] = useState('');
  const password = useForm();
  const { error, loading, request } = useFetch();
  const history = useHistory();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = PASSWORD_RESET({
      login,
      key,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) history.push('/');
  }
  return (
    <section className="animeLeft form-senha">
      <h1 className="title-geral">Reset a senha </h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nova Senha" type="password" name="password" />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}

      </form>
      <Error error={error} />
    </section>
  );
};
