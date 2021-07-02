import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as AdicionarFoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';
import '../../Styles/userheader.scss';
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (<button aria-label="Menu" className={mobileMenu === true ? 'mobile-btn active' : 'mobile-btn'} onClick={() => { return setMobileMenu(!mobileMenu); }} />) }

      <nav className={`${mobile ? 'nav-mobile' : 'nav-user'} ${mobileMenu && 'nav-mobile-active'}`}>
        <NavLink to="/conta" exact activeClassName="nav-link-active">
          <MinhasFotos />
          {mobile && 'Feed'}
        </NavLink>
        <NavLink end to="/conta/postar" activeClassName="nav-link-active">
          <AdicionarFoto />
          {mobile && 'Postar'}
        </NavLink>
        <NavLink end to="/conta/estatisticas" activeClassName="nav-link-active">
          <Estatisticas />
          {mobile && 'Estatisticas'}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
