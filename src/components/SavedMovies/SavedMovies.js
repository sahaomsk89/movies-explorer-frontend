import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';

function SavedMovies({}) {
  return (
    <main className="saved-movies">
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCard />
      <MoviesCardList />
    </main>
  );
}

export default SavedMovies;
