import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import NavLogin from '../NavLogin/NavLogin';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies() {
  return (
    <>
      <Header>
        <NavLogin /> 
      </Header>
      <main className="movies">
        <div className="movies__container">
          <SearchForm />
          <MoviesCardList />
          <button className="movies__button button-hover" type="button">Ещё</button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Movies;