import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import photo from '../../images/meAvatar.JPG';
import './AboutMe.css';
function AboutMe() {
  return (
    <section className="student" id="student">
      <SectionTitle title="Студент" />
      <div className="student__container">
        <div className="student__content">
          <h2 className="student__title">Александр</h2>
          <p className="student__subtitle">Фронтенд-разработчик, 33 года</p>
          <p className="student__text">
            Я живу в Омске,закончил Финансовый университет при Правительстве РФ,
            экономист; Институт прикладной автоматизации и программирования,
            Системный инженер.Я увлекаюсь саморазвитием в теме финансовой
            грамотности и инвестиций, психологии,изучаю новые технологии,
            занимаюсь спортом на тренажерах, катаюсь на велики и бегом. работал
            Системный администратором и решил попробывать себя в програмировании
            начал с конструкторов и перешёл на код.
          </p>
          <ul className="student__list">
            <li className="student__list-item">
              <a
                className="student__list-link"
                href="https://github.com/sahaomsk89"
                target="_blank"
              >
                Github
              </a>
            </li>
            <li className="student__list-item">
              <a
                className="student__list-link"
                href="https://vk.com/alex.ustinov1"
                target="_blank"
              >
                Вконтакте
              </a>
            </li>
          </ul>
        </div>
        <img className="student__photo" src={photo} alt="author" />
      </div>
    </section>
  );
}

export default AboutMe;
