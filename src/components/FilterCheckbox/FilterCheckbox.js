import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <label className="search__checkbox">
      <input className="search__checkbox-input" id="switcher" type="checkbox" />

      <span className="search__checkbox-text">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
