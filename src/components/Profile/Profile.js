import './Profile.css';
import React from 'react';
function Profile() {
  return (
    <main className="profile">
      <form className="profile__container" name="profile">
        <h1 className="profile__title"> Привет, Александр </h1>
        <fieldset className="profile__fieldset">
          <label className="profile__label">
            <span className="profile__text">Имя</span>
            <input
              name="name"
              type="text"
              className="profile__input"
              required
              minLength="2"
              maxLength="30"
              id="name-input"
              autoComplete="on"
              value={'Александр'}
            />
          </label>
          <label className="profile__label">
            <span className="profile__text">E-mail</span>
            <input
              name="email"
              type="email"
              className="profile__input"
              required
              minLength="6"
              maxLength="40"
              id="email-input"
              autoComplete="on"
              value={'pochta@yandex.ru'}
            />
          </label>
        </fieldset>

        <button type="submit" className="profile__submit-button">
          Редактировать
        </button>

        <button
          type="submit"
          className="profile__submit-button profile__submit-button_signout"
        >
          Выйти из аккаунта
        </button>
      </form>
    </main>
  );
}

export default Profile;
