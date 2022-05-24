import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage(): JSX.Element {
  return (
    <div style={{margin: '0 auto', width: '540px'}}>
      <h1>Такой страницы не существует</h1>
      <nav>
        <Link to="/">На главную</Link>
      </nav>
    </div>
  );
}

export default ErrorPage;
