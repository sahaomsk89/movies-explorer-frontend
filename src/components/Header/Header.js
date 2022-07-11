import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <Switch>
      <Route exact path="/">
        <header className="header">
          <Link to="/" className="header__logo"></Link>
          <div className="header__container">
            <Link to="/sign-up" className="header__menu">
              Регистрация
            </Link>
            <Link to="/sign-in" className="header__authorization">
              Войти
            </Link>
          </div>
        </header>
      </Route>

      <Route exact path="/movies">
        <header className="header">
          <Navigation />
        </header>
      </Route>

      <Route exact path="/saved-movies">
        <header className="header">
          <Navigation />
        </header>
      </Route>

      <Route exact path="/profile">
        <header className="header">
          <Navigation />
        </header>
      </Route>
    </Switch>
  );
}

export default Header;
