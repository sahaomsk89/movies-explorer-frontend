import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionForm from '../SectionForm/SectionForm';
import './Login.css';

const Login = (props) => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password) {
      return;
    }

    props.handleLogin(inputs.email, inputs.password);
  };

  return (
    <SectionForm
      title={'Рады видеть!'}
      name={'authorization'}
      onSubmit={handleSubmit}
    >
      <label className="section-form__label">E-mail</label>
      <input
        type="email"
        placeholder="Email"
        value={inputs.email || ''}
        onChange={handleChange}
        className="section-form__input section-form__input_authorization section-form__input_name"
        id="email"
        name="email"
        minLength="2"
        maxLength="40"
        require="true"
      />
      <span className="input-name-error section-form__error"></span>
      <label className="section-form__label">Пароль</label>
      <input
        type="password"
        placeholder="Пароль"
        value={inputs.password || ''}
        onChange={handleChange}
        className="section-form__input section-form__input_authorization section-form__input_job"
        id="password"
        name="password"
        minLength="2"
        maxLength="200"
        require="true"
      />
      <span className="input-job-error section-form__error"></span>
      <button
        className={`section-form__button section-form__button_authorization`}
        type="submit"
      >
        {' '}
        {`Войти`}{' '}
      </button>
      <p className="section-form__text">Ещё не зарегистрированы?</p>
      <Link to="/sign-up" className="section__link">
        Регистрация
      </Link>
    </SectionForm>
  );
};

export default Login;
