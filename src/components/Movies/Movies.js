import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import NavLogin from '../NavLogin/NavLogin';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

function Movies({
  isLoading,
  handleSearchMovie,
  isServerError,
  movies,
  isNotFound,
  initialMovies,
  onSave }) {
  return (
    <>
      <Header>
        <NavLogin /> 
      </Header>
      <main className="movies">
        <div className="movies__container">
          <SearchForm handleSearchMovie={handleSearchMovie} />
          {isLoading ?(
            <Preloader />)
          : (
            <>
              <p className={`${isServerError
                ? 'movies__message' 
                : 'movies__message_type_disabled'}`}>
                  Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.
              </p>
              <p className={`${isNotFound
                ? 'movies__message' 
                : 'movies__message_type_disabled'}`}>
                  По вашему запросу ничего не найденно.
              </p>
              <MoviesCardList movies={movies} initialMovies={initialMovies} onSave={onSave} />
                <button className="movies__button button-hover">Ещё</button>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Movies;