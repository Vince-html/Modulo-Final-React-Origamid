import React from 'react';
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../api';
import Error from '../Helper/Error';
import '../../Styles/loginform.scss';

export const ResetAccount = () => {
  const login = useForm();
  const {
    data, loading, error, request,
  } = useFetch();
  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validade()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: 'http://localhost:3000/login/perdeu',
      });
      await request(url, options);
    }
  }

  return (
    <section className="container mainContainer animeLeft form-senha">
      <h1 className="title-geral">Redefinir Senha.</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="email" {...login} />
          {loading ? (
            <Button disabled>Carregando</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}
      <Error error={error} />

    </section>
  );
};
