import React from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <section className="movies-list">
      <MoviesCard>
        <button
          className="movies-list__button movies-list__button_type_save button-hover"
          type="button"/>
      </MoviesCard>
      <MoviesCard>
        <button
          className="movies-list__button movies-list__button_status_active button-hover"
          type="button"/>
      </MoviesCard>
      <MoviesCard>
        <button
          className="movies-list__button movies-list__button_type_save button-hover"
          type="button"/>
      </MoviesCard>
      <MoviesCard>
        <button
          className="movies-list__button movies-list__button_type_save button-hover"
          type="button"/>
      </MoviesCard>
      <MoviesCard>
        <button
          className="movies-list__button movies-list__button_status_active button-hover"
          type="button"/>
      </MoviesCard>
    </section>
  );
}

export default MoviesCardList;