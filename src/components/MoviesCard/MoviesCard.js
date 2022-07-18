import './MoviesCard.css';
import React from 'react';
// import card1 from '../../images/1-car.jpg';
import { useState, useCallback, useEffect } from 'react';

function MoviesCard({
  savedMovies,
  movie,
  handleSaveMovie,
  handleDeleteMovie,
  isMoviesState,
}) {
  const [isLiked, setIsLiked] = useState(false);

  const setLikes = useCallback(() => {
    const likesCard = savedMovies.find(
      (item) => item.movieId === movie.movieId
    );
    if (likesCard) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [movie.movieId, savedMovies]);

  useEffect(() => {
    setLikes();
  }, [setLikes]);

  const durationHours = Math.floor(movie.duration / 60);
  const durationMinuts = movie.duration - durationHours * 60;

  function handleLikeClick(e) {
    e.stopPropagation();
    if (!isLiked) {
      handleSaveMovie({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: movie.image,
        trailerLink: movie.trailer,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: movie.thumbnail,
        movieId: movie.movieId,
      });
      setIsLiked(true);
    } else {
      const savedCard = savedMovies.find(
        (item) => item.movieId === movie.movieId
      );
      handleDeleteMovie(savedCard);
      setIsLiked(false);
    }
  }

  function handleDeleteClick(e) {
    e.stopPropagation();
    handleDeleteMovie(movie);
  }

  return (
    <div className="movies-card">
      {isMoviesState ? (
        <>
          <div className="movies-card">
            <h2 className="movies-card__title">{movie.nameRU}</h2>

            <p className="movies-card__duration">
              {durationHours !== 0
                ? `${durationHours}ч ${durationMinuts}м`
                : `${durationMinuts}м`}
            </p>

            {isLiked ? (
              <button
                className="movies-card__like_active movies-card__like hover-effect"
                onClick={handleLikeClick}
                aria-label="Удалить из избранного"
              />
            ) : (
              <button
                className="movies-card__like hover-effect"
                onClick={handleLikeClick}
                aria-label="В избранное"
              />
            )}
          </div>

          <a
            href={movie.trailer}
            target="_blank"
            className="movies-card__link"
            rel="noreferrer"
          >
            <img
              className="movies-card__image"
              src={movie.image}
              alt={movie.nameRU}
            />
          </a>
        </>
      ) : (
        <>
          <div className="movies-card">
            <h2 className="movies-card__title">{movie.nameRU}</h2>
            <button
              className="movies-card__like_delete movies-card__like hover-effect"
              onClick={handleDeleteClick}
              aria-label="Удалить из избранного"
            />
          </div>
          <p className="movies-card__duration">
            {durationHours !== 0
              ? `${durationHours}ч ${durationMinuts}м`
              : `${durationMinuts}м`}
          </p>
          <a
            href={movie.trailer}
            target="_blank"
            className="movies-card__link"
            rel="noreferrer"
          >
            <img
              className="movies-card__image"
              src={movie.image}
              alt={movie.nameRU}
            />
          </a>
        </>
      )}
    </div>
  );
}

export default MoviesCard;
