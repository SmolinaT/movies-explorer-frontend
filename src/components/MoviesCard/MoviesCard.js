import React from 'react';
import './MoviesCard.css'

function MoviesCard({children, movie}) {
  function durationConversion(number) {
    const hours = Math.trunc(number / 60);
    const minutes = number % 60;
    if (hours === 0) {
      return `${minutes}м`;
   } else if (minutes === 0) {
      return `${hours}ч`;
   } else {
      return `${hours}ч ${minutes}м`;
   }
  }

  return (
      <section className="movie">
        <img className="movie__image" src={`https://api.nomoreparties.co/${movie.image.url}`} alt={movie.nameRU || movie.nameEN}/>
        <div className="movie__label">
          <div className="movie__info">
            <h2 className="movie__title">{movie.nameRU || movie.nameEN}</h2>
            <p className="movie__timeline">{durationConversion(movie.duration)}</p>
          </div>
          {children}
        </div>
    </section>
  );
}

export default MoviesCard;