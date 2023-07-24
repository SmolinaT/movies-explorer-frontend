import React from 'react';
import './AboutProject.css'

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__text-content">
          <h3 className="about-project__name">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.
          </p>
          <h3 className="about-project__name">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__text">
            У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
        <div className="about-project__conteiner">
          <p className="about-project__weeks about-project__weeks_color_green">1 неделя</p>
          <p className="about-project__weeks about-project__weeks_color_gray">4 недели</p>
          <p className="about-project__about">Back-end</p>
          <p className="about-project__about">Front-end</p>
        </div>
    </section>
  );
}

export default AboutProject;