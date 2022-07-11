import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Techs.css';

function Techs() {
  return (
    <section className="techs" id="techs">
      <div className="techs__container">
        <SectionTitle title="Технологии" />
        <div className="techs__content">
          <h2 className="tech__title">7 технологий</h2>
          <p className="tech__text">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>
        <ul className="techs__list">
          <li className="techs__list-item">
            <p className="techs__list-item-text">HTML</p>
          </li>
          <li className="techs__list-item ">
            <p className="techs__list-item-text">CSS</p>
          </li>
          <li className="techs__list-item">
            <p className="techs__list-item-text">JS</p>
          </li>
          <li className="techs__list-item">
            <p className="techs__list-item-text">React</p>
          </li>
          <li className="techs__list-item ">
            <p className="techs__list-item-text">Git</p>
          </li>
          <li className="techs__list-item">
            <p className="techs__list-item-text">Express.js</p>
          </li>
          <li className="techs__list-item">
            <p className="techs__list-item-text">mongoDB</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
