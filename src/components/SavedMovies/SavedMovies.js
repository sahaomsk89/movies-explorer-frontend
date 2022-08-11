import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({
  movies,
  onSearchSaved,
  preloader,
  badRequest,
  handleDeleteMovie,
  savedMovies,
  handleCheckbox,
  shortMoviesList,
  isMoviesState,
  errorSavedMovies,
}) {
  return (
    <main className="saved-movies">
      <SearchForm
        onSearchSaved={onSearchSaved}
        isMoviesState={false}
        handleCheckbox={handleCheckbox}
        shortMoviesList={shortMoviesList}
      />
      {preloader ? (
        <Preloader />
      ) : isMoviesState ? (
        movies.length > 0 ? (
          <MoviesCardList
            movies={movies}
            savedMovies={savedMovies}
            handleDeleteMovie={handleDeleteMovie}
          />
        ) : !preloader ? (
          <span>{badRequest}</span>
        ) : (
          <span>{errorSavedMovies}</span>
        )
      ) : (
        ''
      )}
    </main>
  );
}

export default SavedMovies;
