import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login'
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  return (
      <div className='page'>
        <Routes>
          <Route path="/" element={ <Main /> } />
          <Route path="/signup" element={ <Register />} />
          <Route path="/signin" element={ <Login /> } />
          <Route path="/movies" element={ <Movies />} />
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
  );
}

export default App;
