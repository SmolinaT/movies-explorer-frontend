import React from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, initialMovies, onSave }) {
  const moviesElements = movies.slice(0, initialMovies).map((movie) => (
    <MoviesCard key={movie.id || movie._id} movie={movie}>
      <button
        className="movies-list__button movies-list__button_type_save button-hover"
        type="button"
        onClick={onSave}/>
    </MoviesCard>
  ))

  return (
    <section className="movies-list">
        {moviesElements}
    </section>
  );
}

export default MoviesCardList;