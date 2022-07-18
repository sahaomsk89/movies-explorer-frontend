import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../utils/useForm';
import { useContext, useState, useEffect } from 'react';
function Profile({ onUpdateUser, onSignOut, message }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, setValues, isValid } =
    useFormWithValidation();
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (currentUser) {
      setValues({
        name: currentUser.name,
        email: currentUser.email,
      });
    }
  }, [currentUser, setValues]);

  useEffect(() => {
    const disabled = !isValid;
    setDisabled(disabled);
  }, [isValid]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: values.name || currentUser.name,
      email: values.email || currentUser.email,
    });
  }

  const submitButtonClassName = `${
    disabled
      ? 'profile__submit-button profile__submit-button_disabled'
      : 'profile__submit-button profile__submit-button_edit hover-effect'
  }`;

  function signOut() {
    onSignOut();
    localStorage.removeItem('jwt');
  }

  return (
    <main className="profile">
      <form
        className="profile__container"
        name="profile"
        noValidate
        onSubmit={handleSubmit}
      >
        <h1 className="profile__title">
          {`Привет, ${values.name || currentUser.name}`}
        </h1>
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
              value={values.name || currentUser.name}
              onChange={handleChange}
            />
          </label>
          <span className="profile__input-error" id="name-input-error">
            {errors.name || ''}
          </span>
          <label className="profile__label">
            <span className="profile__text">E-mail</span>
            <input
              name="email"
              type="email"
              className="profile__input"
              required
              minLength="5"
              maxLength="40"
              id="email-input"
              autoComplete="on"
              value={values.email || currentUser.email}
            />
          </label>
          <span className="profile__input-error" id="email-input-error">
            {errors.email || ''}
          </span>
        </fieldset>
        <span className="profile__input-error">{message}</span>

        <button
          type="submit"
          disabled={disabled}
          className={submitButtonClassName}
        >
          Редактировать
        </button>

        <button
          type="submit"
          className="profile__submit-button profile__submit-button_signout"
          onClick={signOut}
        >
          Выйти из аккаунта
        </button>
      </form>
    </main>
  );
}

export default Profile;
