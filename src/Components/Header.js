/* eslint-disable no-console */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.scss';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import { UserContext } from '../UserContext';

const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <header className="header">
      <nav className="container nav-header">
        <Link className="link-home" to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className="link-login" to="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className="link-login" to="/login">
            Login / Criar
          </Link>
        )}

      </nav>
    </header>
  );
};

export default Header;
