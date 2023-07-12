import React from 'react';
import './AboutMe.css';
import photo from '../../images/photo.jpg'

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__container">
          <div className="about-me__text-container">
            <h3 className="about-me__name">Татьяна</h3>
            <p className="about-me__about">Фронтенд-разработчик, 25 лет</p>
            <p className="about-me__description">
              Я&nbsp;родилась и&nbsp;живу во&nbsp;Владивостоке, закончила кафедру электроники и&nbsp;средств связи ДВФУ. У&nbsp;меня есть муж и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь вязанием. Недавно начала кодить. С&nbsp;2021 года сижу дома в&nbsp;декрете. Хочу поменять свою жизнь в&nbsp;лучшую сторону.
            </p>
            <a className="about-me__link" href="https://github.com/SmolinaT">Github</a>
          </div>
          <img className="about-me__photo" src={photo} alt="Фотография автора"/>
        </div>
    </section>
  );
}

export default AboutMe;