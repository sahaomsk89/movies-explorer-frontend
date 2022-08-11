import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useFormWithValidation } from '../../utils/useForm';

import React from 'react';
import searchIcon from '../../images/icon__search.svg';
import './SearchForm.css';
function SearchForm({
  onSearch,
  onSearchSaved,
  isMoviesState,
  shortMoviesList,
  handleCheckbox,
}) {
  const {
    keyword,
    setKeyword,
    values,
    handleChange,
    setValues,
    isValid,
    setIsValid,
  } = useFormWithValidation();

  const [disabled, setDisabled] = React.useState(true);
  const submitButtonClassName = `${
    disabled
      ? 'search__button search__button_disabled'
      : 'search__button hover-effect'
  }`;

  React.useEffect(() => {
    const disabled = !isValid;
    setDisabled(disabled);
  }, [isValid]);

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(values.search);
    localStorage.setItem('keyword', keyword);
  }

  function handleSubmitSaved(e) {
    e.preventDefault();
    onSearchSaved(values.search);
    localStorage.setItem('keyword', keyword);
  }

  React.useEffect(() => {
    setKeyword(localStorage.getItem('keyword'));
  }, []);

  return (
    <section className="search">
      {isMoviesState ? (
        <div className="search__container">
          <form
            className="search__form"
            name="search"
            noValidate
            onSubmit={handleSubmit}
          >
            <img
              className="search__icon"
              src={searchIcon}
              alt="иконка поиска"
            />

            <input
              className="search__input"
              id="search"
              name="search"
              type="search"
              minLength="1"
              maxLength="40"
              required
              placeholder="Фильм"
              autoFocus={true}
              onChange={handleChange}
              value={keyword || ''}
            />
            <button
              className={submitButtonClassName}
              disabled={disabled}
              type="submit"
            ></button>
          </form>
          <FilterCheckbox
            handleCheckbox={handleCheckbox}
            shortMoviesList={shortMoviesList}
          />
          <span className="search__input-error" id="search-input-error">
            {!disabled ? '' : 'Нужно ввести ключевое слово'}
          </span>
        </div>
      ) : (
        <div className="search__container">
          <form
            className="search__form"
            onSubmit={handleSubmitSaved}
            noValidate
          >
            <img
              className="search__icon"
              src={searchIcon}
              alt="иконка поиска"
            />

            <input
              className="search__input"
              id="search"
              name="search"
              type="search"
              minLength="1"
              maxLength="40"
              required
              placeholder="Фильм"
              autoComplete="off"
              autoFocus={true}
              onChange={handleChange}
              value={keyword || ''}
            />
            <button
              className={submitButtonClassName}
              disabled={disabled}
              type="submit"
            ></button>
          </form>
          <FilterCheckbox
            handleCheckbox={handleCheckbox}
            shortMoviesList={shortMoviesList}
          />
          <span className="search__input-error" id="search-input-error">
            {!disabled ? '' : 'Нужно ввести ключевое слово'}
          </span>
        </div>
      )}
    </section>
  );
}

export default SearchForm;
