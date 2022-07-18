import React from 'react';
import './MoreButton.css';
function MoreButton({ movies, handleMoreButtonClick, initialCards }) {
  return (
    <button
      type="button"
      className={
        movies.length <= 12 || initialCards >= movies.length
          ? 'more__button_hidden'
          : 'more__button'
      }
      onClick={handleMoreButtonClick}
      aria-label="Показать ещё"
    >
      Ещё
    </button>
  );
}

export default MoreButton;
