import React from 'react';
import { Link } from 'react-router-dom';

type HeaderNavInProps = {
  email:  string | null;
  avatarUrl: string | undefined;
}

function HeaderNavOut({email, avatarUrl}: HeaderNavInProps): JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link to="/favorites" className="header__nav-link header__nav-link--profile" >
            <div className="header__avatar-wrapper user__avatar-wrapper">
              <img src={avatarUrl} width="54" height="54" alt="User avatar"/>
            </div>
            <span className="header__user-name user__name">{email}</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" href="#">
            <span className="header__signout">Sign out</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavOut;