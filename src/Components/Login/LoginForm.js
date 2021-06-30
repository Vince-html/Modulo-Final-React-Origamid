/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Form/Input';
import Button from '../Form/Button';

export const LoginForm = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ username, password }),
  //   }).then((response) => {
  //     console.log(response);
  //     return response.json();
  //   }).then((json) => {
  //     console.log(json);
  //   });
  // }

  return (
    <section className="login-form">
      <h1>Login</h1>
      <form action="">
        <Input label="Usuário" type="text" name="username" />
        <Input label="Senha" type="password" name="password" />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/create">Create Account</Link>
      <Link to="/login/reset">Reset Account</Link>
    </section>
  );
};
