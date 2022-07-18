import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
import * as mainApi from '../../utils/MainApi';
import { getMovies } from '../../utils/MoviesApi';
import { useState, useEffect } from 'react';
import {
  PROFILE_SUCCESS_MSG,
  NOT_FOUND_ERR,
  TOKEN_ERR,
  LOGIN_ERR,
  SOME_ERR,
  USER_ERR,
  REGISTER_ERR,
  MOVIES_API_URL,
  SHORT_MOVIE_DURATION,
} from '../../utils/constants';

function App() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem('loggedIn') || false
  );
  const [errorLogin, setErrorLogin] = useState('');
  const [errorRegister, setErrorRegister] = useState('');
  const [errorMovies, setErrorMovies] = useState('');
  const [errorSavedMovies, setErrorSavedMovies] = useState('');
  const [messageProfile, setMessageProfile] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [moviesList, setMoviesList] = useState([]);
  const [isMoviesState, setIsMoviesState] = useState(true);

  const [preloader, setPreloader] = useState(false);
  const [shortMoviesList, setShortMoviesList] = useState(false);

  const [savedMoviesList, setSavedMoviesList] = useState([]);

  /* ДЕЙСТВИЯ С ПОЛЬЗОВАТЕЛЯМИ */
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      mainApi
        .getUserInfo(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setCurrentUser(res);
          }
        })
        .catch(() => {
          console.log(TOKEN_ERR);
          setLoggedIn(false);
        });
    }
  }, [loggedIn]);

  function handleLoginSubmit({ email, password }) {
    mainApi
      .authorize(email, password)
      .then((res) => {
        if (res.token) {
          setLoggedIn(true);
          setCurrentUser(res);
          localStorage.setItem('jwt', res.token);
          localStorage.setItem('loggedIn', true);
          history.push('./movies');
        }
      })
      .catch((err) => {
        if (err.message === 'Ошибка: 401') {
          setErrorLogin(LOGIN_ERR);
        } else {
          setErrorLogin(SOME_ERR);
        }
        setLoggedIn(false);
      });
  }

  function handleRegisterSubmit({ name, email, password }) {
    mainApi
      .register(name, email, password)
      .then(() => {
        handleLoginSubmit({ email, password });
      })
      .catch((err) => {
        if (err.message === 'Ошибка: 409') {
          setErrorRegister(USER_ERR);
        } else {
          setErrorRegister(REGISTER_ERR);
        }
      });
  }

  function handleUpdateUser(userInfo) {
    const token = localStorage.getItem('jwt');
    mainApi
      .changeUserInfo(userInfo, token)
      .then((res) => {
        setLoggedIn(true);
        setCurrentUser(res);
        history.push('./profile');
        setTimeout(() => setMessageProfile(PROFILE_SUCCESS_MSG), 500);
      })
      .catch(() => setMessageProfile(SOME_ERR));
  }

  function handleSignOut() {
    setLoggedIn(false);
    localStorage.removeItem('jwt');
    localStorage.removeItem('loggedIn');
    history.push('/');
  }

  /* ФИЛЬМЫ */

  useEffect(() => {
    const moviesList = JSON.parse(localStorage.getItem('moviesStorage'));
    if (moviesList) {
      setMoviesList(moviesList);
    }
  }, []);

  useEffect(() => {
    const savedMoviesList = JSON.parse(
      localStorage.getItem('savedMoviesStorage')
    );
    if (savedMoviesList) {
      setSavedMoviesList(savedMoviesList);
    }
  }, [setSavedMoviesList]);

  function handleCheckbox() {
    setShortMoviesList(!shortMoviesList);
  }

  function filterMovies(moviesList, searchWord) {
    const filteredMovies = moviesList.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (shortMoviesList) {
      return filterShortMovies(filteredMovies);
    } else {
      return filteredMovies;
    }
  }

  function filterSavedMovies(savedMoviesList, searchWord) {
    const filteredSavedMovies = savedMoviesList.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (shortMoviesList) {
      return filterShortMovies(filteredSavedMovies);
    } else {
      return filteredSavedMovies;
    }
  }

  function filterShortMovies(movies) {
    return movies.filter((item) => item.duration <= SHORT_MOVIE_DURATION);
  }

  function launchPreloader() {
    setPreloader(true);
    setTimeout(() => setPreloader(false), 700);
  }

  function handleSearchSubmit(searchWord) {
    launchPreloader();
    getMovies()
      .then((res) => {
        const moviesList = res.map((movie) => {
          const imageLink = `${MOVIES_API_URL}${movie.image.url}`;
          const thumbnailLink = `${MOVIES_API_URL}${movie.image.formats.thumbnail.url}`;
          const countryName = movie.country
            ? movie.country
            : 'Страна не указана';
          const nameEn = movie.nameEN
            ? movie.nameEN
            : 'Название на английском не указано';
          const directorName = movie.director
            ? movie.director
            : 'Режиссёр не указан';
          const trailerLink = movie.trailerLink
            ? movie.trailerLink
            : 'https://youtube.ru';

          return {
            country: countryName,
            director: directorName,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: imageLink,
            trailer: trailerLink,
            movieId: movie.id,
            nameRU: movie.nameRU,
            nameEN: nameEn,
            thumbnail: thumbnailLink,
          };
        });
        localStorage.setItem('moviesStorage', JSON.stringify(res));
        const result = filterMovies(moviesList, searchWord);
        if (result.length === 0) {
          setErrorMovies(NOT_FOUND_ERR);
        }
        localStorage.setItem('moviesStorage', JSON.stringify(result));
        const filteredMoviesList = JSON.parse(
          localStorage.getItem('moviesStorage')
        );
        setMoviesList(filteredMoviesList);
      })
      .catch(() => {
        setErrorMovies('Что-то пошло не так');
      });
  }

  function handleSearchSaveSubmit(searchWord) {
    launchPreloader();
    const result = filterSavedMovies(savedMoviesList, searchWord);
    if (result.length === 0) {
      setErrorSavedMovies(NOT_FOUND_ERR);
    }
    setSavedMoviesList(result);
  }

  function handleSaveMovie(movie) {
    mainApi
      .saveMovie(movie)
      .then(() => {
        return mainApi.getSavedMovies();
      })
      .then((res) => {
        localStorage.setItem('savedMoviesStorage', JSON.stringify(res));
        setSavedMoviesList(res);
      })
      .catch((err) => {
        console.log(`Что-то пошло не так. ${err}`);
      });
  }

  function handleDeleteMovie(movie) {
    const movieId = movie._id
      ? movie._id
      : savedMoviesList.find((item) => {
          return item.movieId === movie.movieId;
        })._id;
    console.log(movieId);
    mainApi
      .deleteMovie(movieId)
      .then(() => {
        const newCards = savedMoviesList.filter((item) => {
          return item._id !== movie._id;
        });
        setSavedMoviesList(newCards);
        localStorage.setItem('savedMoviesStorage', JSON.stringify(newCards));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header loggedIn={loggedIn} />
        <Switch>
          <Route exact path="/">
            <Main loggedIn={loggedIn} />
          </Route>
          <ProtectedRoute
            exact
            path="/movies"
            loggedIn={loggedIn}
            component={Movies}
            preloader={preloader}
            badRequest={errorMovies}
            movies={
              shortMoviesList ? filterShortMovies(moviesList) : moviesList
            }
            savedMovies={savedMoviesList}
            onSearch={handleSearchSubmit}
            handleSaveMovie={handleSaveMovie}
            isMoviesState={isMoviesState}
            handleDeleteMovie={handleDeleteMovie}
            handleCheckbox={handleCheckbox}
            shortMoviesList={shortMoviesList}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
            preloader={preloader}
            badRequest={errorSavedMovies}
            movies={
              shortMoviesList
                ? filterShortMovies(savedMoviesList)
                : savedMoviesList
            }
            savedMovies={savedMoviesList}
            onSearchSaved={handleSearchSaveSubmit}
            handleDeleteMovie={handleDeleteMovie}
            isMoviesState={isMoviesState}
            handleCheckbox={handleCheckbox}
            shortMoviesList={shortMoviesList}
          ></ProtectedRoute>

          <ProtectedRoute
            exact
            path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            onUpdateUser={handleUpdateUser}
            onSignOut={handleSignOut}
            message={messageProfile}
          ></ProtectedRoute>

          <Route path="/sign-up">
            <Register
              onRegister={handleRegisterSubmit}
              badRequest={errorRegister}
            />
          </Route>
          <Route exact path="/sign-in">
            <Login onLogin={handleLoginSubmit} badRequest={errorLogin} />
          </Route>

          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>

        <Route exact path={['/', '/movies', '/saved-movies', '/profile']}>
          <Footer loggedIn={loggedIn} />
        </Route>
      </CurrentUserContext.Provider>
    </div>
  );
}
export default App;
