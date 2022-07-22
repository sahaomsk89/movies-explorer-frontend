import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import React from 'react';

function Movies(props) {
  return (
    <main className="movies">
      <SearchForm
        onSearch={props.onSearch}
        isMoviesState={props.isMoviesState}
        handleCheckbox={props.handleCheckbox}
        shortMoviesList={props.shortMoviesList}
      />
      {props.preloader ? (
        <Preloader />
      ) : props.isMoviesState ? (
        props.movies.length > 0 ? (
          <MoviesCardList
            isMoviesState={props.isMoviesState}
            movies={props.movies}
            savedMovies={props.savedMovies}
            handleSaveMovie={props.handleSaveMovie}
            handleDeleteMovie={props.handleDeleteMovie}
          />
        ) : !props.preloader ? (
          <span>{props.badRequest}</span>
        ) : (
          <span>{props.errorMovies}</span>
        )
      ) : (
        ''
      )}
    </main>
  );
}

export default Movies;
