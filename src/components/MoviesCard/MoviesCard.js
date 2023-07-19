import React from 'react';
import './MoviesCard.css'

function MoviesCard({children}) {
  return (
      <section className="movie">
        <img className="movie__image" src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg" alt="33 слова о дизайне"/>
        <div className="movie__label">
          <div className="movie__info">
            <h2 className="movie__title">33 слова о дизайне</h2>
            <p className="movie__timeline">1ч42м</p>
          </div>
          {children}
        </div>
    </section>
  );
}

export default MoviesCard;