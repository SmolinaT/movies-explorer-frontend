import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
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
  const [errorMessage, setErrorMessage] = React.useState('');
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
  const [foundSavedMovies, setFoundSavedMovies] = React.useState([]);

  React.useEffect(() => {
    if(loggIn) {
      Promise.all([mainApi.getUserData(), moviesApi.getMovies(), mainApi.getSavedMovies()])
      .then(([me, movie, savedMovie]) => {
        setCurrentUser(me);
        localStorage.setItem("movie", JSON.stringify(movie));
        setMovies(JSON.parse(localStorage.getItem("movie")));
        localStorage.setItem("savedMovie", JSON.stringify(savedMovie));
        setSavedMovie(JSON.parse(localStorage.getItem("savedMovie")));
      })
      .catch((err) => {
        console.log(err);
        setIsServerError(true);
      });
    }
  }, [loggIn])

  function handleUpdateUser(data) {
    setIsUserSending(true);
    mainApi.editUserData(data)
      .then((res) => {
        setCurrentUser(res.data);
        setIsBtnSaveVisible(false);
        localStorage.setItem('currentUser', JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
        if (err === 'Ошибка: 409') {
          setErrorMessage('Пользователь с таким email уже зарегистрирован')
        } else {
          setErrorMessage('При обновлении профиля произошла ошибка');
        }
      })
      .finally(() => setIsUserSending(false));
  }

  React.useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      mainApi.checkToken(token)
        .then((res) => {
          if (res) {
            setLoggIn(true);
            navigate("/movies");
          }
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem('jwt');
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
        navigate('/movies')
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

  function handleLogOut() {
    setLoggIn(false);
    localStorage.clear();
    navigate('/');
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

  setIsLoading(true);
  setTimeout(() => setIsLoading(false), 1000);
  selectFilmDuration(keyword);
  setInitialMovies(serchMovies);
  if (serchMovies.length === 0) {
    setIsNotFound(true);
  } else {
    setIsNotFound(false);
  }
}

//Изменение состояния чекбокса
function handleChangeCheckbox() {
  setSelectedCheckbox(!selectedCheckbox);
  if (!selectedCheckbox) {
    setFoundMovies(findShortMovie(initialMovies));
  } else {
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
  if (windowWidth < 1150 && windowWidth >= 560) {
    setInitialMoviesCard(8);
     setMoreMoviesCard(2);
  }
  if (windowWidth < 480) {
    setInitialMoviesCard(5);
     setMoreMoviesCard(2);
  }
}, [windowWidth])

//Добавление карточек кнопкой Еще
function handleMoreButtonClick() {
  setInitialMoviesCard(initialMoviesCard + moreMoviesCard);
}

//Сохраненные фильмы
function selectSavedFilmDuration(keyword) {
  const serchSaveMovies = findMovie(savedMovie, keyword);
  const serchSaveShotMovies = findShortMovie(serchSaveMovies);
  if (!selectedCheckbox) {
    setFoundSavedMovies(serchSaveMovies);
  } else {
    setFoundSavedMovies(serchSaveShotMovies)
  }
}

function handleSearchSavedMovie(keyword) {
  const serchSaveMovies = findMovie(savedMovie, keyword);

  setIsLoading(true);
  setTimeout(() => setIsLoading(false), 1000);
  selectSavedFilmDuration(keyword);
  setInitialMovies(serchSaveMovies)
  if (serchSaveMovies.length === 0) {
    setIsNotFound(true);
  } else {
    setIsNotFound(false);
  }
}

  return (
    <div className='page'>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={ <Main loggIn={loggIn} /> } />
          <Route path="/signup" element={
            <Register 
              onRegister={handleRegister}
              errorMessage={errorMessage} />
          } />
          <Route path="/signin" element={
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
              isMoviesPage={true}/>
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
              setIsBtnSaveVisible={setIsBtnSaveVisible} />
          } />
          <Route path="/saved-movies" element={
            <ProtectedRouteElement
            element={SavedMovies}
            loggIn={loggIn}
            savedMovies={foundSavedMovies}
            handleSearchSavedMovie={handleSearchSavedMovie}
            isServerError={isServerError}
            isNotFound={isNotFound}
            isLoading={isLoading}
            isMoviesPage={false} />
          } />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;