import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionForm from '../SectionForm/SectionForm';
import './Register.css';

const Register = (props) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let { name, email, password } = state;
    props.handleRegister(name, email, password);
  };

  return (
    <SectionForm
      title={'Добро Пожаловать'}
      name={'authorization'}
      onSubmit={handleSubmit}
    >
      <label className="section-form__label">Имя</label>
      <input
        type="text"
        placeholder="Имя"
        value={state.name || ''}
        onChange={handleChange}
        className="section-form__input section-form__input_authorization section-form__input_name"
        id="name"
        name="name"
        minLength="2"
        maxLength="30"
        require="true"
      />
      <span className="input-name-error section-form__error"></span>
      <label className="section-form__label">E-mail</label>
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={state.email || ''}
        onChange={handleChange}
        className="section-form__input section-form__input_authorization section-form__input_name"
        id="email"
        minLength="2"
        maxLength="40"
        require="true"
      />
      <span className="input-name-error section-form__error"></span>

      <label className="section-form__label">Пароль</label>
      <input
        type="password"
        placeholder="Пароль"
        value={state.password || ''}
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
        {`Зарегистрироваться`}
      </button>
      <p className="section-form__text">Уже зарегистрированы?</p>
      <Link to="/sign-in" className="section__link">
        Войти
      </Link>
    </SectionForm>
  );
};

export default Register;
