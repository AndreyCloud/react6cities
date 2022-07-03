import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useApps';
import { removeUser, userlocalStDelete } from '../../store/userSlice';

type HeaderNavInProps = {
  email:  string | null;
  avatarUrl: string | undefined;
}

function HeaderNavOut({email, avatarUrl}: HeaderNavInProps): JSX.Element {

  const dispatch = useAppDispatch();

  const SignOut = () => {
    dispatch(removeUser());
    dispatch(userlocalStDelete());
  };

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
          <Link to='/'>
            <span onClick={SignOut} className="header__signout">Sign out</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavOut;
