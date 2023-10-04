import React from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login'
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';
import { mainApi } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';
import { moviesApi } from '../../utils/MoviesApi';
import { useResize } from '../../hooks/useResize';

function App() {
  const [loggIn, setLoggIn] = React.useState(false);
  const [isTokenChecked, setIsTokenChecked] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [okMessage, setOkMessage] = React.useState('');
  const [isUserSending, setIsUserSending] = React.useState(false);
  const [isBtnSaveVisible, setIsBtnSaveVisible] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isServerError, setIsServerError] = React.useState(false);
  const [foundMovies, setFoundMovies] = React.useState([]);
  const [movies, setMovies] = React.useState([]);
  const [selectedCheckbox, setSelectedCheckbox] = React.useState(false);
  const [isNotFound, setIsNotFound] = React.useState(false);
  const [initialMovies, setInitialMovies] = React.useState([]);

  const [currentUser, setCurrentUser] = React.useState({});

  const navigate = useNavigate();

  const windowWidth = useResize();
  const [initialMoviesCard, setInitialMoviesCard] = React.useState({});
  const [moreMoviesCard, setMoreMoviesCard] = React.useState({});

  const [savedMovie, setSavedMovie] = React.useState([]);
  const [selectedSaveCheckbox, setSelecteSavedCheckbox] = React.useState(false);
  const [saveAllMovies, setSaveAllMovies] = React.useState([]);

  React.useEffect(() => {
    if(loggIn) {
      setIsLoading(true);
      Promise.all([mainApi.getUserData(), moviesApi.getMovies(), mainApi.getSavedMovies()])
      .then(([me, movie, savedMovie]) => {
        setCurrentUser(me);
        localStorage.setItem("movie", JSON.stringify(movie));
        setMovies(JSON.parse(localStorage.getItem("movie")));
        setSavedMovie(savedMovie);
      })
      .catch((err) => {
        console.log(err);
        setIsServerError(true);
      })
      .finally(() => setIsLoading(false))
    }
  }, [loggIn])

  function handleUpdateUser(data) {
    setIsUserSending(true);
    return mainApi.editUserData(data)
      .then((res) => {
        setCurrentUser(res.data);
        setIsBtnSaveVisible(false);
        setOkMessage("Изменение данных прошло успешно");
      })
      .catch((err) => {
        console.log(err);
        if (err === 'Ошибка: 409') {
          setErrorMessage('Пользователь с таким email уже зарегистрирован')
        } else {
          setErrorMessage('При обновлении профиля произошла ошибка');
        }
      })
      .finally(() => {
        setIsUserSending(false);
        setTimeout(() => setOkMessage(''), 2000);
      });
  }

  React.useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      setIsTokenChecked(true);
      return
    }

    if (token) {
      mainApi.checkToken(token)
        .then((res) => {
          if (res) {
            setLoggIn(true);
            setIsTokenChecked(true);
          }
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem('jwt');
          setIsTokenChecked(true);
        });
    }
  }, [])

  function handleRegister({password, email, name}) {
    mainApi.takeRegister(password, email, name)
    .then(() => {
        handleLogin({password, email})
    })
    .catch((err) => {
      console.log(err);
      if (err === 'Ошибка: 409') {
        setErrorMessage('Пользователь с таким email уже зарегистрирован')
      } else {
        setErrorMessage('При регистрации пользователя произошла ошибка');
      }
    })
    .finally(() => {
      setTimeout(() => setErrorMessage(''), 2000);
    });
  }

  function handleLogin({password, email}) {
    mainApi.takeLogin(password, email)
    .then((res) => {
      if (res.token) {
        localStorage.setItem("jwt", res.token);
        setLoggIn(true);
        navigate('/movies', { replace: true })
      }
    })
    .catch((err) => {
      console.log(err);
      if (err === 'Ошибка: 401') {
          setErrorMessage('Вы ввели неправильный логин или пароль')
        } else {
          setErrorMessage('При авторизации произошла ошибка. Токен не передан или передан не в том формате.');
        }
        setLoggIn(false);
        localStorage.removeItem("jwt");
        setCurrentUser(null);
    })
    .finally(() => {
      setTimeout(() => setErrorMessage(''), 2000);
    });
  }

  //выход из аккаунта
  function handleLogOut() {
    setLoggIn(false);
    localStorage.clear();
    navigate('/');
    setInitialMovies([]);
    setFoundMovies([]);
    setSelectedCheckbox(false);
    setSavedMovie([]);
  }

  //Фильмы:

  //Фильтрование фильмов по ключевому слову
  function findMovie(movies, keyword) {
    return movies.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(keyword.toLowerCase()) 
      || movie.nameEN.toLowerCase().includes(keyword.toLowerCase())
    })
  }

  //Фильтрование короткометражек
  function findShortMovie(movies) {
    return movies.filter((movie) => movie.duration <= 40);
  }

  //Поиск фильмов в зависимости от продолжительности
  function selectFilmDuration(keyword) {
    const serchMovies = findMovie(movies, keyword);
    const serchShotMovies = findShortMovie(serchMovies);
    if (!selectedCheckbox) {
      setFoundMovies(serchMovies);
    } else {
      setFoundMovies(serchShotMovies)
    }
  }

  //Поиск фильмов по ключевому слову
  function handleSearchMovie(keyword) {
    const serchMovies = findMovie(movies, keyword);
    selectFilmDuration(keyword);
    setInitialMovies(serchMovies);
    setFoundMovies(
      selectedCheckbox ? findShortMovie(serchMovies) : serchMovies
      )
    localStorage.setItem('searchKeyword', keyword);
    localStorage.setItem('selectedCheckbox', selectedCheckbox);
    localStorage.setItem('serchMovies', JSON.stringify(serchMovies));
    if (serchMovies.length === 0) {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
  }

  React.useEffect(() => {
    setSelectedCheckbox(localStorage.getItem('selectedCheckbox' || '') === 'true');
    const serchMovies = JSON.parse(localStorage.getItem('serchMovies')) || [];
    setInitialMovies(serchMovies);
    if (localStorage.getItem('selectedCheckbox' || '') === 'true') {
      setFoundMovies(findShortMovie(serchMovies));
    } else {
      setFoundMovies(serchMovies);
    }
  }, [])


  //Изменение состояния чекбокса
  function handleChangeCheckbox() {
    setSelectedCheckbox(!selectedCheckbox);
    if (!selectedCheckbox) {
      if(findShortMovie(initialMovies).length === 0) {
        setIsNotFound(true);
      }
        setFoundMovies(findShortMovie(initialMovies));
    } else {
      setIsNotFound(false);
      setFoundMovies(initialMovies);
    }
    localStorage.setItem('selectedCheckbox', !selectedCheckbox);
  }

  //Отслеживание добавления карточек, взависимости от ширины экрана
  React.useEffect(() => {
    if (windowWidth >= 1280) {
      setInitialMoviesCard(12);
      setMoreMoviesCard(4);
    }
    if (windowWidth < 1280 && windowWidth > 1150) {
      setInitialMoviesCard(12);
      setMoreMoviesCard(4);
    }
    if (windowWidth <= 1150 && windowWidth > 560) {
      setInitialMoviesCard(8);
      setMoreMoviesCard(2);
    }
    if (windowWidth <= 560) {
      setInitialMoviesCard(5);
      setMoreMoviesCard(2);
    }
  }, [windowWidth])

  //Добавление карточек кнопкой Еще
  function handleMoreButtonClick() {
    setInitialMoviesCard(initialMoviesCard + moreMoviesCard);
  }

  //Сохраненные фильмы

  //Поиск сохраненных фильмов в зависимости от продолжительности
  function selectSavedFilmDuration(keyword) {
    const serchSaveMovies = findMovie(savedMovie, keyword);
    const serchSaveShotMovies = findShortMovie(serchSaveMovies);
    if (!selectedSaveCheckbox) {
      setSavedMovie(serchSaveMovies);
    } else {
      setSavedMovie(serchSaveShotMovies)
    }
  }

  //Поиск сохраненных фильмов по ключевому слову
  function handleSearchSavedMovie(keyword) {
    const serchSaveMovies = findMovie(savedMovie, keyword);
    selectSavedFilmDuration(keyword);
    if (serchSaveMovies.length === 0) {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
  }

    //Изменение состояния чекбокса сохраненных фильмов
    function handleChangeSaveCheckbox() {
      setSaveAllMovies(savedMovie);
      setSelectedCheckbox(!selectedCheckbox);
      if (!selectedSaveCheckbox) {
        setSelecteSavedCheckbox(true);
        if(findShortMovie(savedMovie).length === 0) {
          setIsNotFound(true);
        }
        setSavedMovie(findShortMovie(savedMovie))
      } else {
        setSelecteSavedCheckbox(false);
        setIsNotFound(false);
        setSavedMovie(saveAllMovies);
      }
      localStorage.setItem('selectedCheckbox', !selectedSaveCheckbox);
    }

  //сохранение фильма при нажатии на иконку
  function handleAddSavedMovies(movie) {
    mainApi.addSavedMovies(movie)
    .then((newMovie) => {
      setSavedMovie([newMovie, ...savedMovie])
  })
  .catch((err) => {
    console.log(err);
  })
  }

  //проверка сохранен ли фильм
  function isSaveMovie(movie) {
    return savedMovie.some(item => item.movieId === movie.id)
  }

  //удаление карточки
  function handleMovieDelete(movie) {
    const checkMovies = savedMovie.find((item) => {
      return item.movieId === movie.id || movie.movieId
    })

    if(checkMovies) {
      mainApi.deleteMovie(checkMovies._id)
      .then(() => {
        mainApi.getSavedMovies()
        .then((movies) => {
          setSavedMovie(movies)
        })
      })
      .catch((err) => {
        console.log(err);
      })
    } 
    //console.log(id)
  }

  return (
    <div className='page'>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={ <Main loggIn={loggIn} /> } />
            <Route path="/signup" element={ loggIn ?
              <Navigate to="/" />
            :
              <Register 
                onRegister={handleRegister}
                errorMessage={errorMessage} />
            } />
            <Route path="/signin" element={ loggIn ?
              <Navigate to="/" />
            :
              <Login 
                onLogin={handleLogin}
                errorMessage={errorMessage} />
            } />
          <Route path="/movies" element={
            <ProtectedRouteElement
              element={Movies}
              loggIn={loggIn}
              isLoading={isLoading}
              movies={foundMovies}
              handleSearchMovie={handleSearchMovie}
              isServerError={isServerError}
              isNotFound={isNotFound}
              onChange={handleChangeCheckbox}
              checked={selectedCheckbox}
              onClick={handleMoreButtonClick}
              initialMoviesCard={initialMoviesCard}
              isMoviesPage={true}
              onSave={handleAddSavedMovies}
              isSaveMovie={isSaveMovie}
              onDeleteMovie={handleMovieDelete}
              setSelectedCheckbox={setSelectedCheckbox}
              setInitialMovies={setInitialMovies}
              setFoundMovies={setFoundMovies}
              findShortMovie={findShortMovie}
              isTokenChecked={isTokenChecked} />
          } />
          <Route path="/profile" element={
            <ProtectedRouteElement 
              element={Profile} 
              onSignOut={handleLogOut}
              loggIn={loggIn}
              isSending={isUserSending}
              errorMessage={errorMessage}
              onUpdateUser={handleUpdateUser}
              isBtnSaveVisible={isBtnSaveVisible}
              setIsBtnSaveVisible={setIsBtnSaveVisible}
              okMessage={okMessage}
              isTokenChecked={isTokenChecked} />
          } />
          <Route path="/saved-movies" element={
            <ProtectedRouteElement
            element={SavedMovies}
            loggIn={loggIn}
            savedMovies={savedMovie}
            handleSearchSavedMovie={handleSearchSavedMovie}
            isServerError={isServerError}
            isNotFound={isNotFound}
            isLoading={isLoading}
            isMoviesPage={false}
            onDeleteMovie={handleMovieDelete}
            isSaveMovie={isSaveMovie}
            onSaveChange={handleChangeSaveCheckbox}
            checkedSave={selectedSaveCheckbox}
            isTokenChecked={isTokenChecked} />
          } />
          <Route path="*" element={<PageNotFound loggIn={loggIn} />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;