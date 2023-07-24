import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__links">
          <li className="portfolio__link">
            <a
              className="portfolio__link-text link-hover"
              href="https://github.com/SmolinaT/how-to-learn"
              target="_blank" rel="noreferrer">
                Статичный сайт
                <span className="portfolio__badge">↗</span>
            </a>
          </li>
          <li className="portfolio__link">
            <a
              className="portfolio__link-text link-hover"
              href="https://smolinat.github.io/russian-travel/"
              target="_blank" rel="noreferrer">
                Адаптивный сайт
                <span className="portfolio__badge">↗</span>
            </a>
          </li>
          <li className="portfolio__link">
            <a
              className="portfolio__link-text link-hover"
              href="https://smolina.nomoredomains.work"
              target="_blank" rel="noreferrer">
                Одностраничное приложение
                <span className="portfolio__badge">↗</span>
            </a>
          </li>
        </ul>
    </section>
  );
}

export default Portfolio;