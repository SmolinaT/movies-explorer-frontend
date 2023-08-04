import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import NavLogin from '../NavLogin/NavLogin';
import SearchForm from '../SearchForm/SearchForm';
import MoviesSaveCardList from '../MoviesCardList/MoviesSaveCardList';
import Footer from '../Footer/Footer';

function SavedMovies() {
  return (
    <>
      <Header>
        <NavLogin />
      </Header>
      <main className="movies-save">
        <div className="movies-save__container">
          <SearchForm />
          <MoviesSaveCardList/>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;