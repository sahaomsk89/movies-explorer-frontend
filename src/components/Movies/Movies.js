import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import React from 'react';

function Movies({
  movies,
  onSearch,
  preloader,
  badRequest,
  handleSaveMovie,
  savedMovies,
  isMoviesState,
  handleCheckbox,
  shortMoviesList,
  handleDeleteMovie,
}) {
  if (badRequest && isMoviesState) {
    return (
      <main className="movies">
        <SearchForm
          onSearch={onSearch}
          isMoviesState={isMoviesState}
          handleCheckbox={handleCheckbox}
          shortMoviesList={shortMoviesList}
        />
        <p>{badRequest}</p>
      </main>
    );
  } else {
    return (
      <main className="movies">
        <SearchForm
          onSearch={onSearch}
          isMoviesState={isMoviesState}
          handleCheckbox={handleCheckbox}
          shortMoviesList={shortMoviesList}
        />
        {preloader ? (
          <Preloader />
        ) : (
          <>
            <MoviesCardList
              isMoviesState={isMoviesState}
              movies={movies}
              savedMovies={savedMovies}
              handleSaveMovie={handleSaveMovie}
              handleDeleteMovie={handleDeleteMovie}
            />
          </>
        )}
      </main>
    );
  }
}

export default Movies;
