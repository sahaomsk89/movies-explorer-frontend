import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn }) {
  return (
    <Switch>
      <Route exact path="/">
        <header className="header">
          <Link to="/" className="header__logo"></Link>
          <div
            className={
              !loggedIn ? 'header__container' : 'header__container_none'
            }
          >
            <Link to="/sign-up" className="header__menu">
              Регистрация
            </Link>
            <Link to="/sign-in" className="header__authorization">
              Войти
            </Link>
          </div>
          <div
            className={`navigation ${
              loggedIn ? 'navigation' : 'navigation__menu_none'
            }`}
          >
            <Navigation loggedIn={loggedIn} />
          </div>
        </header>
      </Route>

      <Route exact path="/(profile|movies|saved-movies)">
        <header className="header">
          <Link to="/" className="header__logo"></Link>
          <Navigation />
        </header>
      </Route>
    </Switch>
  );
}

export default Header;
