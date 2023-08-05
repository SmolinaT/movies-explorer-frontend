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
  onChange,
  checked,
  onClick,
  initialMoviesCard,
  isMoviesPage }) {
  return (
    <>
      <Header>
        <NavLogin /> 
      </Header>
      <main className="movies">
        <div className="movies__container">
          <SearchForm handleSearchMovie={handleSearchMovie} onChange={onChange} checked={checked} isMoviesPage={isMoviesPage} />
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
              <MoviesCardList movies={movies} initialMoviesCard={initialMoviesCard} isMoviesPage={isMoviesPage}/>
                <button className={
                  movies.length <= 7 || initialMoviesCard >= movies.length
                     ? "movies__button_type_hidden"
                     : "movies__button button-hover"
                } 
                type="button" onClick={onClick}>Ещё</button>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Movies;