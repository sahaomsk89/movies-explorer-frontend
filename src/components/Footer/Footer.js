import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__content">
          <p className="footer__copyright">&copy; 2022</p>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a
                className="footer__link"
                href="https://praktikum.yandex.ru"
                target="_blank"
                rel="noreferrer"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__list-item">
              <a
                className="footer__link"
                href="https://github.com/sahaomsk89"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li className="footer__list-item">
              <a
                className="footer__link"
                href="https://vk.com/alex.ustinov1"
                target="_blank"
                rel="noreferrer"
              >
                Вконтакте
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
