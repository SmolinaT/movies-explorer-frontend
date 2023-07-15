import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';

function App() {
  return (
    <CurrentUserContext.Provider>
      <div className='page'>
        <Header />
        <Routes>
          <Route path="/" element={ <Main /> } />
          <Route path="/signup" element={ <Register />} />
          <Route path="/signin" element={ <Login /> } />
          <Route path="/movies" element={ <Movies />} />
          <Route path="/profile" element={ <Profile /> } />
        </Routes>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
