import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import NavLogin from '../NavLogin/NavLogin';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies() {
  return (
    <section className="movies">
      <Header>
        <NavLogin /> 
      </Header>
      <div className="movies__container">
        <SearchForm />
        <MoviesCardList />
        <button className="movies__button button-hover" type="button">Ещё</button>
      </div>
      <Footer />
    </section>
  );
}

export default Movies;