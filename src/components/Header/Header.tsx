import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useApps';
import { useAuth } from '../../hooks/useAuth';
// import HeaderNavIn from '../HeaderNav/HeaderNavIn';
import HeaderNavOut from '../HeaderNav/HeaderNavOut';

function Header() {

  const user = useAppSelector((state) => state.user.user);
  const authIs = useAuth().isAuth;

  // eslint-disable-next-line no-console
  console.log(authIs);

  const sign = (authIs) ? 'Sign out' : 'Sign in';
  // eslint-disable-next-line no-console
  console.log(sign);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="header__logo-link" >
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          {/* <HeaderNavIn /> */}
          <HeaderNavOut email={user.email} avatarUrl={user.avatar_url}/>
          {/* <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to="/favorites" className="header__nav-link header__nav-link--profile" >
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                    <img src={user.avatar_url} width="54" height="54" alt="User avatar"/>
                  </div>
                  <span className="header__user-name user__name">{user.email}</span>
                </Link>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">
                  <span className="header__signout">{sign}</span>
                </a>
              </li>
            </ul>
          </nav> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
