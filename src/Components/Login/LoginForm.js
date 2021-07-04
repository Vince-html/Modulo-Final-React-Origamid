/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Form/Input';
import Button from '../Form/Button';
import Error from '../Helper/Error';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import '../../Styles/loginform.scss';

export const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validade() && password.validade()) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <section className="login-form animeLeft">
      <h1 className="title-geral">Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
        <Error error={error && 'Dados incorretos.'} />

      </form>
      <Link className="reset-account" to="/login/reset">Perdeu a senha?</Link>

      <div className="create-account">
        <h2>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className="btn-create" to="/login/create">Cadastro</Link>
      </div>
    </section>
  );
};
