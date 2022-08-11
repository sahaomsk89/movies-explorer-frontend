import './FilterCheckbox.css';

function FilterCheckbox({ handleCheckbox, shortMoviesList }) {
  return (
    <label className="search__checkbox">
      <input
        className="search__checkbox-input"
        id="switcher"
        type="checkbox"
        checked={shortMoviesList}
        name="search-checkbox"
        onChange={handleCheckbox}
      />
      <span className="search__checkbox-text">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
