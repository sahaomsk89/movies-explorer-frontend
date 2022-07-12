import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Login from '../Login/Login';
import Register from '../Register/Register';

function App() {
  return (
    <div className="page">
      {/* <CurrentUserContext.Provider value={currentUser}>*/}
      <Header/>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route exact path="/saved-movies">
          <SavedMovies />
        </Route>

        <Route exact path="/profile">
          <Profile />
        </Route>

        <Route path="/sign-up">
          <Register />
        </Route>
        <Route exact path="/sign-in">
          <Login />
        </Route>

        <Route exact path="/page-not-found">
          <PageNotFound />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}
export default App;
