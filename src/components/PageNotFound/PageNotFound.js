import './PageNotFound.css';
import { Link } from 'react-router-dom';
import React from 'react';
function PageNotFound() {
  return (
    <main className="page-not-found">
      <div className="page-not-found__content">
        <h1 className="page-not-found__status">404</h1>
        <p className="page-not-found__text">Страница не найдена</p>
        <Link to="/" className="page-not-found__link hover-effect">
          Назад
        </Link>
      </div>
    </main>
  );
}

export default PageNotFound;
