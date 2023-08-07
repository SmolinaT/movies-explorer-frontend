import React from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, initialMoviesCard, onSave, isMoviesPage, savedMovies, isSaveMovie, onDeleteMovie }) {

  return (
    <section className="movies-list">
      {isMoviesPage ? (
        movies.slice(0, initialMoviesCard).map((movie) => (
          <MoviesCard key={movie.id || movie._id}
            movie={movie}
            isMoviesPage={isMoviesPage}
            onSave={onSave}
            isSaveMovie={isSaveMovie}
            onDeleteMovie={onDeleteMovie} />
        ))
      )
      : (
        savedMovies.map((movie) => (
          <MoviesCard key={movie.id || movie._id}
            movie={movie}
            isMoviesPage={isMoviesPage}
            onDeleteMovie={onDeleteMovie}
            isSaveMovie={isSaveMovie}
            isOnlySaved={true}/>
        ))
      )}
    </section>
  );
}

export default MoviesCardList;