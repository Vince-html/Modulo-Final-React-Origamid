import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import UserHeaderNav from './UserHeaderNav';
import '../../Styles/userheader.scss';

const UserHeader = () => {
  const [title, setTitle] = useState();
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/conta/postar':
        setTitle('Poste sua Foto');
        break;
      case '/conta/estatisticas':
        setTitle('Estatísticas');
        break;
      default:
        setTitle('Minha conta');
    }
  }, [location]);

  return (
    <header className="header-user">
      <h1 className="title-geral">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
