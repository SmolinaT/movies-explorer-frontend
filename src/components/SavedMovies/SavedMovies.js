import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import NavLogin from '../NavLogin/NavLogin';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

function SavedMovies({
  savedMovies,
  handleSearchSavedMovie,
  isServerError,
  isNotFound,
  isLoading,
  isMoviesPage,
  onDeleteMovie,
  isSaveMovie,
  onSaveChange,
  checkedSave }) {
  return (
    <>
      <Header>
        <NavLogin />
      </Header>
      <main className="movies-save">
        <div className="movies-save__container">
          <SearchForm handleSearchSavedMovie={handleSearchSavedMovie} isMoviesPage={isMoviesPage} onSaveChange={onSaveChange} checkedSave={checkedSave} />
          {isLoading ?(
            <Preloader />)
          : (
            <>
              <p className={`${isServerError
                ? 'movies-save__message' 
                : 'movies-save__message_type_disabled'}`}>
                  Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.
              </p>
              <p className={`${isNotFound
                ? 'movies-save__message' 
                : 'movies-save__message_type_disabled'}`}>
                  По вашему запросу ничего не найденно.
              </p>
              <MoviesCardList savedMovies={savedMovies} isMoviesPage={isMoviesPage} onDeleteMovie={onDeleteMovie} isSaveMovie={isSaveMovie} />
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;