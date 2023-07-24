import React from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesSaveCardList() {
  return (
    <section className="movies-list">
      <MoviesCard>
        <button
          className="movies-list__button movies-list__button_type_delete button-hover"
          type="button"/>
      </MoviesCard>
      <MoviesCard>
        <button
          className="movies-list__button movies-list__button_type_delete button-hover"
          type="button"/>
      </MoviesCard>
      <MoviesCard>
        <button
          className="movies-list__button movies-list__button_type_delete button-hover"
          type="button"/>
      </MoviesCard>
    </section>
  );
}

export default MoviesSaveCardList;