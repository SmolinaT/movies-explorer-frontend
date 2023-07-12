import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 class="portfolio__title">Портфолио</h2>
        <ul class="portfolio__links">
          <li class="portfolio__link">
            <a class="portfolio__link-text" href="https://github.com/SmolinaT/how-to-learn">Статичный сайт</a>
            <p class="portfolio__badge">↗</p>
          </li>
          <li class="portfolio__link">
            <a class="portfolio__link-text" href="https://smolinat.github.io/russian-travel/">Адаптивный сайт</a>
            <p class="portfolio__badge">↗</p>
          </li>
          <li class="portfolio__link">
            <a class="portfolio__link-text" href="https://smolina.nomoredomains.work">Одностраничное приложение</a>
            <p class="portfolio__badge">↗</p>
          </li>
        </ul>
    </section>
  );
}

export default Portfolio;