import { useState, useEffect } from 'react';
import { useFormWithValidation } from '../../utils/useForm';
import SectionForm from '../SectionForm/SectionForm';
import './Login.css';

function Login({ onLogin, badRequest }) {
  const { values, handleChange, errors, setValues, isValid } =
    useFormWithValidation();
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setValues(values);
  }, [setValues, values]);

  useEffect(() => {
    const disabled = !isValid;
    setDisabled(disabled);
  }, [isValid]);

  const submitButtonClassName = `${
    disabled
      ? 'section-form__button   section-form__button_disabled'
      : 'section-form__button'
  }`;

  function handleSubmit(e) {
    e.preventDefault();
    if (!values.password || !values.email) {
      return;
    }
    onLogin(values);
    setValues(values);
  }

  return (
    <SectionForm
      title={'Рады видеть!'}
      name={'authorization'}
      buttonText="Войти"
      text="Ещё не зарегистрированы?"
      url="sign-up"
      ankor="Регистрация"
      handleSubmit={handleSubmit}
      submitButtonClassName={submitButtonClassName}
      badRequest={badRequest}
    >
      <label className="section-form__label">E-mail</label>
      <input
        type="email"
        placeholder="Email"
        value={values.email || ''}
        onChange={handleChange}
        className="section-form__input section-form__input_authorization"
        id="email"
        name="email"
        minLength="3"
        maxLength="40"
        required
        autoComplete="on"
      />
      <span className="input-name-error section-form__error">
        {errors.email || ''}
      </span>

      <label className="section-form__label">Пароль</label>
      <input
        type="password"
        placeholder="Пароль"
        value={values.password || ''}
        onChange={handleChange}
        className="section-form__input section-form__input_authorization"
        id="password"
        name="password"
        minLength="5"
        maxLength="50"
        required
      />
      <span className="input-job-error section-form__error">
        {errors.password || ''}
      </span>
    </SectionForm>
  );
}

export default Login;
