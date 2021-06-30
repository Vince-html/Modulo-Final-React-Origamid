/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';
import { TOKEN_POST, USER_GET } from '../../api';

export const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validade() && password.validade()) {
      const { url, options } = TOKEN_POST({ username: username.value, password: password.value });
      const response = await fetch(url, options);
      const json = await response.json();
      window.localStorage.setItem('token', json.token);
      getUser(json.token);
    }
  }
  return (
    <section className="login-form">
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/create">Create Account</Link>
      <Link to="/login/reset">Reset Account</Link>
    </section>
  );
};
