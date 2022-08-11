import React from 'react';
import './SectionForm.css';
import { Link } from 'react-router-dom';

function SectionForm(props) {
  return (
    <div className="section-container section__authorization">
      <Link to="/" className="section__logo"></Link>
      <h2 className={`section-form__title section-form__title_${props.name}`}>
        {props.title}
      </h2>
      <form
        className={`section-form section-form__input section-form__input_${props.name}`}
        name={props.name}
        noValidate
        onSubmit={props.handleSubmit}
      >
        {props.children}

        {props.badRequest && (
          <span className="section-form__error">{props.badRequest}</span>
        )}
        <button
          type="submit"
          disabled={props.disabled}
          className={props.submitButtonClassName}
        >
          {props.buttonText}
        </button>
        <span className="section-form__text">
          {props.text}{' '}
          <Link to={`/${props.url}`} className="section__link ">
            {props.ankor}
          </Link>
        </span>
      </form>
    </div>
  );
}

export default SectionForm;
