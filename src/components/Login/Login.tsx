import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useApps';
import { fetchLogin } from '../../store/userSlice';

function Login(): JSX.Element {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Email cannot be empty!');
  const [passwordlError, setPasswordError] = useState('Password cannot be empty!');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordlError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordlError]);

  const blurHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    switch(e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
    }
  };

  const EmailHandler = (e: { target: { value: React.SetStateAction<string>; }; }) => {

    setEmail(e.target.value);

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('not correct email');
      if(!e.target.value) {
        setEmailError('Email cannot be empty!');
      }
    } else {
      setEmailError('');
    }
  };

  const PasswordHandler = (e: { target: { value: React.SetStateAction<string>; }; }) => {

    setPassword(e.target.value);

    const re = /(?=.*[0-9])(?=.*[a-z])/g;

    if(!re.test(String(e.target.value).toLowerCase())) {
      setPasswordError('must have at least one letter and one number');
      if(!e.target.value) {
        setPasswordError('Password cannot be empty!');
      }
    } else {
      setPasswordError('');
    }
  };


  const user = {email, password};
  const dispatch = useAppDispatch();
  const error = useAppSelector((state) => state.user.error);
  const navigate = useNavigate();
  const goMain = () => navigate('/');

  function sendLogin(e: { preventDefault: () => void; })  {

    e.preventDefault();
    dispatch(fetchLogin(user));
    goMain();

  }

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to="/" className="header__logo-link" >
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form onSubmit={sendLogin} className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                {(emailDirty && emailError) && <p style={{color: 'red'}}>{emailError}</p>}
                <label className="visually-hidden">E-mail</label>
                <input
                  onBlur={(e) => blurHandler(e)}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => EmailHandler(e)}
                  placeholder="Email"
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                {(passwordDirty && passwordlError) && <p style={{color: 'red'}}>{passwordlError}</p>}
                <label className="visually-hidden">Password</label>
                <input
                  onBlur={(e) => blurHandler(e)}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => PasswordHandler(e)}
                  placeholder="Password"
                />
              </div>
              <button
                disabled = {!formValid}
                className="login__submit form__submit button"
              >
                  Sign in
              </button>
            </form>
            <div style={{marginTop: 20, color: 'red'}}>
              {error}
            </div>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link to="/" className="locations__item-link" >
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;


