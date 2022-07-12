import React from 'react';
import './SectionForm.css';
import { Link } from 'react-router-dom';

function SectionForm({ name, title, children, onSubmit }) {
  return (
    <div className="section-container section__authorization">
      <Link to="/" className="section__logo"></Link>
      <h2 className={`section-form__title section-form__title_${name}`}>
        {title}
      </h2>
      <form
        className={`section-form section-form__input section-form__input_${name}`}
        name={name}
        onSubmit={onSubmit}
      >
        {children}
      </form>
    </div>
  );
}

export default SectionForm;
