import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="project" id="about">
      <SectionTitle title="О проекте" />
      <div className="project__container">
        <div className="project__card">
          <h2 className="project__title">Дипломный проект включал 5 этапов</h2>
          <p className="project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="project__card">
          <h3 className="project__title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <ul className="project__list">
        <li className="project__list-item project__list-item_color-green">
          <p className="project__list-text">1 неделя</p>
        </li>
        <li className="project__list-item project__list-item_grey">
          <p className="project__list-text">4 недели</p>
        </li>
        <li className="project__list-item">
          <p className="project__list-text project__list-text_grey">Back-end</p>
        </li>
        <li className="project__list-item">
              <p className="project__list-text project__list-text_grey">
            Front-end
          </p>
        </li>
      </ul>
    </section>
  );
}

export default AboutProject;
