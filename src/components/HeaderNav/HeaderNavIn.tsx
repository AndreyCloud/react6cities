import React from 'react';
import { Link } from 'react-router-dom';


function HeaderNavIn(): JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link to="/favorites" className="header__nav-link header__nav-link--profile" >
            {/* <div className="header__avatar-wrapper user__avatar-wrapper">
            </div> */}
          </Link>
        </li>
        <li className="header__nav-item">
          <Link to='/login' className="header__nav-link">
            <span className="header__signout">Sign in</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavIn;
