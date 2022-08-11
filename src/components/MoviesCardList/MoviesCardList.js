import { React, useState, useEffect } from 'react';
import { useWindowSize } from '../../utils/useWindowsSize';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoreButton from '../MoreButton/MoreButton';
import './MoviesCardList.css';

import {
  MAX_WIDTH,
  MIDDLE_WIDTH,
  MIN_WIDTH,
  MAX_WIDTH_INITIAL_CARDS,
  MIDDLE_WIDTH_INITIAL_CARDS,
  MIN_WIDTH_INITIAL_CARDS,
  MAX_WIDTH_MORE_CARDS,
  MIDDLE_WIDTH_MORE_CARDS,
  MIN_WIDTH_MORE_CARDS,
  SMALLEST_WIDTH_MORE_CARDS,
} from '../../utils/constants';

function MoviesCardList({
  movies,
  savedMovies,
  handleSaveMovie,
  handleDeleteMovie,
  isMoviesState,
}) {
  const windowWidth = useWindowSize();
  const [initialCards, setInitialCards] = useState(0);
  const [moreCards, setMoreCards] = useState(0);

  useEffect(() => {
    if (windowWidth >= MAX_WIDTH) {
      setInitialCards(MAX_WIDTH_INITIAL_CARDS);
      setMoreCards(MAX_WIDTH_MORE_CARDS);
    }
    if (windowWidth < MAX_WIDTH && windowWidth >= MIDDLE_WIDTH) {
      setInitialCards(MAX_WIDTH_INITIAL_CARDS);
      setMoreCards(MIDDLE_WIDTH_MORE_CARDS);
    }
    if (windowWidth < MIDDLE_WIDTH && windowWidth >= MIN_WIDTH) {
      setInitialCards(MIDDLE_WIDTH_INITIAL_CARDS);
      setMoreCards(MIN_WIDTH_MORE_CARDS);
    }
    if (windowWidth < MIN_WIDTH) {
      setInitialCards(MIN_WIDTH_INITIAL_CARDS);
      setMoreCards(SMALLEST_WIDTH_MORE_CARDS);
    }
  }, [windowWidth]);

  function handleMoreButtonClick() {
    setInitialCards(initialCards + moreCards);
  }

  return (
    <>
      <section className="cards" name="movies-cards">
        {movies.slice(0, initialCards).map((movie) => {
          return (
            <MoviesCard
              key={movie.id}
              movie={movie}
              savedMovies={savedMovies}
              handleSaveMovie={handleSaveMovie}
              handleDeleteMovie={handleDeleteMovie}
              isMoviesState={isMoviesState}
            />
          );
        })}
      </section>

      <MoreButton
        movies={movies}
        handleMoreButtonClick={handleMoreButtonClick}
        initialCards={initialCards}
      />
    </>
  );
}

export default MoviesCardList;
