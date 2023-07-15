import React from 'react';
import './Footer.css';


function Footer() {
  return (
    <footer class="footer">
      <h2 class="footer__title">Учебный проект Яндекс Практикум х BeatFilm.</h2>
      <div class="footer__container">
        <p class="footer__year">© {new Date().getFullYear()}</p>
        <ul class="footer__links">
          <li class="footer__link">
            <a class="footer__link-text" href="https://practicum.yandex.ru/">Яндекс Практикум</a>
          </li>
          <li class="footer__link">
            <a class="footer__link-text" href="https://github.com/">Github</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;