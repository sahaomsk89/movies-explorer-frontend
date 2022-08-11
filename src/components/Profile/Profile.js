import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../utils/useForm';
import { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Profile({ onUpdateUser, onSignOut, message }) {
  const [isEditActive, setIsEditActive] = useState(false);
  const [isSubmitButtonActive, setIsSubmitButtonActive] = useState(false);
  const { values, errors, isValid, handleChange } = useFormWithValidation();
  const currentUser = useContext(CurrentUserContext);
  const location = useLocation().pathname;

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name: values.name,
      email: values.email,
    });
    setIsEditActive(false);
  }

  function editProfile() {
    setIsEditActive(true);
  }

  function checkNameInput(evt) {
    handleChange(evt);
    if (evt.target.value !== currentUser.name) {
      setIsSubmitButtonActive(true);
    } else {
      setIsSubmitButtonActive(false);
    }
  }

  function checkEmailInput(evt) {
    handleChange(evt);
    if (evt.target.value !== currentUser.email) {
      setIsSubmitButtonActive(true);
    } else {
      setIsSubmitButtonActive(false);
    }
  }

  useEffect(() => {
    values.name = currentUser.name;
    values.email = currentUser.email;
  }, [currentUser]);

  return (
    <main className="profile">
      <form
        className="profile__container"
        name="profile"
        id="profile"
        onSubmit={handleSubmit}
        noValidate
      >
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <div className="profile__fieldset">
          <label className="profile__label" htmlFor="user__name">
            <span className="profile__text">Имя</span>

            <input
              className="profile__input"
              type="text"
              id="user__name"
              name="name"
              disabled={!isEditActive && true}
              minLength="1"
              maxLength="40"
              onChange={checkNameInput}
              value={values.name || currentUser.name}
              required
            />
          </label>
          <span className="profile__input-error" id="user__name-error">
            {errors.name || ''}
          </span>

          <label className="profile__label" htmlFor="user__email">
            <span className="profile__text">E-mail</span>
            <input
              className="profile__input"
              type="email"
              id="user__email"
              name="email"
              disabled={!isEditActive && true}
              onChange={checkEmailInput}
              value={values.email || currentUser.email}
              required
            />
          </label>
          <span className="profile__input-error" id="user__email-error">
            {errors.email || ''}
          </span>
        </div>
        <span className="profile__input-error">{message}</span>
        {isEditActive ? (
          location === '/profile' ? (
            <button
              className={`profile__submit-button ${
                (!isValid || !isSubmitButtonActive) &&
                'profile__submit-button_disabled'
              }`}
              type="submit"
              disabled={(!isValid || !isSubmitButtonActive) && true}
            >
              Сохранить
            </button>
          ) : (
            <button
              className={`profile__submit-button ${
                !isValid && 'profile__submit-button_disabled'
              }`}
              type="submit"
              disabled={!isValid && true}
            >
              Редактировать
            </button>
          )
        ) : (
          <ul className="profile__menu">
            <li className="profile__menu-item">
              <button
                className="profile__submit-button"
                type="button"
                onClick={editProfile}
              >
                Редактировать
              </button>
            </li>
            <li className="profile__menu-item">
              <button
                className="profile__submit-button profile__submit-button_signout"
                type="button"
                onClick={onSignOut}
              >
                Выйти из аккаунта
              </button>
            </li>
          </ul>
        )}
      </form>
    </main>
  );
}

export default Profile;
