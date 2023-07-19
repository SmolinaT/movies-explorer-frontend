import React from 'react';
import './Footer.css';


function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс Практикум х BeatFilm.</h2>
      <div className="footer__container">
        <p className="footer__year">© {new Date().getFullYear()}</p>
        <ul className="footer__links">
          <li className="footer__link">
            <a className="footer__link-text link-hover" href="https://practicum.yandex.ru/">Яндекс Практикум</a>
          </li>
          <li className="footer__link">
            <a className="footer__link-text link-hover" href="https://github.com/">Github</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;