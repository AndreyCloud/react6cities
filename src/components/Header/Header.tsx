import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useApps';
import { useAuth } from '../../hooks/useAuth';
import HeaderNavIn from '../HeaderNav/HeaderNavIn';
import HeaderNavOut from '../HeaderNav/HeaderNavOut';

function Header() {
  const location = useLocation();
  const path = location.pathname;


  const user = useAppSelector((state) => state.user.user);
  const authIs = useAuth().isAuth;

  const login = (!authIs) ? <HeaderNavIn /> : <HeaderNavOut email={user.email} avatarUrl={user.avatar_url}/>;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            {path === '/' ? <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/> :
              <Link to="/" className="header__logo-link" >
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>}
          </div>
          {login}
        </div>
      </div>
    </header>
  );
}

export default Header;
