import React from 'react';
import { Link } from 'react-router-dom';
import './FilmsMenu.css';
function FilmsMenu() {
  return (
    <ul className="films__menu">
      <li className="films__menu-item">
        <Link to="/movies" className="navigation__menu">
          Фильмы
        </Link>
        <Link to="/saved-movies" className="navigation__menu">
          Сохранённые фильмы
        </Link>
      </li>
      <Link to="/profile" className="navigation__menu">
        Аккаунт
      </Link>
    </ul>
  );
}

export default FilmsMenu;
