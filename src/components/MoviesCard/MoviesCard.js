import React from 'react';
import './MoviesCard.css'

function MoviesCard({isMoviesPage, movie, onSave, isSaveMovie, onDeleteMovie, isOnlySaved}) {
  const image = isOnlySaved ? movie.image : `https://api.nomoreparties.co/${movie.image.url}`;
  const saveMovie = isSaveMovie(movie);

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

  function handleSave() {
    onSave(movie)
  }

  function handleDelete() {
      onDeleteMovie(movie)
  }

  return (
      <section className="movie">
        <a className="movie__trailer" href={movie.trailerLink} rel="noreferrer" target="_blank">
          <img className="movie__image" src={image} alt={movie.nameRU || movie.nameEN}/>
        </a>
        <div className="movie__label">
          <div className="movie__info">
            <h2 className="movie__title">{movie.nameRU || movie.nameEN}</h2>
            <p className="movie__timeline">{durationConversion(movie.duration)}</p>
          </div>
          {isMoviesPage ?(
            saveMovie ?
              <button
              className="movie__button button-hover movie__button_status_active"
              type="button"
              onClick={handleDelete}/>
            :
              <button
                className="movie__button button-hover movie__button_type_save"
                type="button"
                onClick={handleSave}/>)
          : (
            <button
              className="movie__button movie__button_type_delete button-hover"
              type="button"
              onClick={handleDelete}/>
          )}
        </div>
    </section>
  );
}

export default MoviesCard;