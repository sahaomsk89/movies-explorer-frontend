import React from 'react';
import searchIcon from '../../images/icon__search.svg';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
function SearchForm() {
  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form" name="search">
          <img className="search__icon" src={searchIcon} alt="иконка поиска" />

          <input
            className="search__input"
            id="search"
            name="search"
            type="search"
            minLength="2"
            maxLength="40"
            required
            placeholder="Фильм"
          />
          <button className="search__button" type="submit"></button>
        </form>
        <FilterCheckbox />
      </div>
    </section>
  );
}

export default SearchForm;
