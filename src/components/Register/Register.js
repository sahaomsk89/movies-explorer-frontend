import React, { useState, useEffect } from 'react';
import SectionForm from '../SectionForm/SectionForm';
import { useFormWithValidation } from '../../utils/useForm';
import './Register.css';

const Register = ({ onRegister, badRequest }) => {
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
    if (!values.password || !values.email || !values.name) {
      return;
    }

    onRegister(values);
    setValues(values);
  }

  return (
    <SectionForm
      title={'Добро Пожаловать'}
      name={'authorization'}
      buttonText="Зарегистрироваться"
      text="Уже зарегистрированы?"
      url="sign-in"
      ankor="Войти"
      handleSubmit={handleSubmit}
      submitButtonClassName={submitButtonClassName}
      badRequest={badRequest}
    >
      <label className="section-form__label">Имя</label>
      <input
        type="text"
        placeholder="Имя"
        value={values.name || ''}
        onChange={handleChange}
        className="section-form__input section-form__input_authorization"
        id="name"
        name="name"
        minLength="2"
        maxLength="30"
        required
        autoComplete="on"
      />
      <span className="section-form__error" id="name-error">
        {errors.name || ''}
      </span>

      <label className="section-form__label">E-mail</label>
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={values.email || ''}
        onChange={handleChange}
        className="section-form__input section-form__input_authorization"
        id="email"
        minLength="4"
        maxLength="40"
        required
        autoComplete="on"
      />
      <span className="section-form__error" id="email-error">
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
        minLength="6"
        maxLength="50"
        required
      />
      <span className="section-form__error" id="password-error">
        {errors.password || ''}
      </span>
    </SectionForm>
  );
};

export default Register;
