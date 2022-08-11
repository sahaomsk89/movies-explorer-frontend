import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a
            className="portfolio__link"
            href="https://sahaomsk89.github.io/maket2/"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт
          </a>
          <a
            className="portfolio__link"
            href="https://sahaomsk89.github.io/maket2/"
            target="_blank"
            rel="noreferrer"
          >
            &#8599;
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__link"
            href="https://sahaomsk89.github.io/russian-travel/"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт
          </a>
          <a
            className="portfolio__link"
            href="https://sahaomsk89.github.io/russian-travel/"
            target="_blank"
            rel="noreferrer"
          >
            &#8599;
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__link"
            href="https://sahaomsk89.github.io/mesto/"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение
          </a>
          <a
            className="portfolio__link"
            href="https://sahaomsk89.github.io/mesto/"
            target="_blank"
            rel="noreferrer"
          >
            &#8599;
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
