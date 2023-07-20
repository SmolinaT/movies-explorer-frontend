import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import NavLogin from '../NavLogin/NavLogin';
import SearchForm from '../SearchForm/SearchForm';
import MoviesSaveCardList from '../MoviesCardList/MoviesSaveCardList';
import Footer from '../Footer/Footer';

function SavedMovies() {
  return (
    <section className="movies-save">
      <Header>
        <NavLogin />
      </Header>
      <div className="movies-save__container">
        <SearchForm />
        <MoviesSaveCardList />
      </div>
      <Footer />
    </section>
  );
}

export default SavedMovies;