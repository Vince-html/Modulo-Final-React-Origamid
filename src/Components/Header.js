import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.scss';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';

const Header = () => {
  return (
    <header className="header">
      <nav className="container nav-header">
        <Link className="link-home" to="/" aria-label="Dogs - Home">
          <Dogs />
          {' '}
        </Link>
        <Link className="link-login" to="/login">Login / Criar</Link>
      </nav>
    </header>
  );
};

export default Header;
