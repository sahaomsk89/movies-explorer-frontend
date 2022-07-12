import './MoviesCard.css';
import React from 'react';
import card1 from '../../images/1-car.jpg';
function MoviesCard({ props }) {
  return (
    <section className="cards">
      <div className="movies-card">
        <h2 className="movies-card__title">33 слова о дизайне</h2>
        <p className="movies-card__text">1ч 47м</p>
        <button class="movies-card-like"></button>
        <div className="movies-wrap">
          <img className="movies-card__image" src={card1} alt={'1 карточка'} />
        </div>
      </div>

      <div className="movies-card">
        <h2 className="movies-card__title">34 слова о дизайне</h2>
        <p className="movies-card__text">1ч 47м</p>
        <button class="movies-card-like"></button>
        <div className="movies-wrap">
          <img className="movies-card__image" src={card1} alt={'1 карточка'} />
        </div>
      </div>

      <div className="movies-card">
        <h2 className="movies-card__title">34 слова о дизайне</h2>
        <p className="movies-card__text">1ч 47м</p>
        <button class="movies-card-like"></button>
        <div className="movies-wrap">
          <img className="movies-card__image" src={card1} alt={'1 карточка'} />
        </div>
      </div>
      <div className="movies-card">
        <h2 className="movies-card__title">34 слова о дизайне</h2>
        <p className="movies-card__text">1ч 47м</p>
        <button class="movies-card-like"></button>
        <div className="movies-wrap">
          <img className="movies-card__image" src={card1} alt={'1 карточка'} />
        </div>
      </div>
      <div className="movies-card">
        <h2 className="movies-card__title">34 слова о дизайне</h2>
        <p className="movies-card__text">1ч 47м</p>
        <button class="movies-card-like"></button>
        <div className="movies-wrap">
          <img className="movies-card__image" src={card1} alt={'1 карточка'} />
        </div>
      </div>
      <div className="movies-card">
        <h2 className="movies-card__title">34 слова о дизайне</h2>
        <p className="movies-card__text">1ч 47м</p>
        <button class="movies-card-like"></button>
        <div className="movies-wrap">
          <img className="movies-card__image" src={card1} alt={'1 карточка'} />
        </div>
      </div>
    </section>
  );
}

export default MoviesCard;
