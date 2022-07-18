// import './SavedMovies.css';
// import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';
// import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import MoviesCard from '../MoviesCard/MoviesCard';

// function SavedMovies({}) {
//   return (
//     <main className="saved-movies">
//       <SearchForm />
//       {/* <Preloader /> */}
//       <MoviesCard />
//       <MoviesCardList />
//     </main>
//   );
// }

// export default SavedMovies;

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
}) {
  if (badRequest) {
    return (
      <main className="saved-movies">
        <SearchForm
          onSearchSaved={onSearchSaved}
          isMoviesState={false}
          handleCheckbox={handleCheckbox}
          shortMoviesList={shortMoviesList}
        />
        <p>{badRequest}</p>
      </main>
    );
  } else {
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
        ) : (
          <MoviesCardList
            movies={movies}
            savedMovies={savedMovies}
            handleDeleteMovie={handleDeleteMovie}
          />
        )}
      </main>
    );
  }
}

export default SavedMovies;
