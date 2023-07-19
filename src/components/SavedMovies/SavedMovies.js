import React from 'react';
import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm';
import MoviesSaveCardList from '../MoviesCardList/MoviesSaveCardList';

function SavedMovies() {
  return (
    <section className="movies-save">
      <SearchForm />
      <MoviesSaveCardList />
    </section>
  );
}

export default SavedMovies;