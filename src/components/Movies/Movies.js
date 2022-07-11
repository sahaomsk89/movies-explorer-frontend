import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';
function Movies() {
  return (
    <main className="movies">
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCard />
      <MoviesCardList />
    </main>
  );
}

export default Movies;
