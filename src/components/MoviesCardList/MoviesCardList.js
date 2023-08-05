import React from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, initialMoviesCard, onSave, isMoviesPage, savedMovies }) {
  return (
    <section className="movies-list">
      {isMoviesPage ? (
        movies.slice(0, initialMoviesCard).map((movie) => (
          <MoviesCard key={movie.id || movie._id} movie={movie}>
            <button
              className="movies-list__button movies-list__button_type_save button-hover"
              type="button"
              onClick={onSave}/>
          </MoviesCard>
        ))
      )
      : (
        savedMovies.map((movie) => (
          <MoviesCard key={movie.movieId} movie={movie}>
            <button
                className="movies-list__button movies-list__button_type_delete button-hover"
                type="button"/>
          </MoviesCard>
        ))
      )}
    </section>
  );
}

export default MoviesCardList;