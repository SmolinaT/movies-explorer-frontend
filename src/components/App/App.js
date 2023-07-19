import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login'
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  return (
      <div className='page'>
        <Header />
        <Routes>
          <Route path="/" element={ <Main /> } />
          <Route path="/signup" element={ <Register />} />
          <Route path="/signin" element={ <Login /> } />
          <Route path="/movies" element={ <Movies />} />
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Routes>
          <Route path="/" element={ <Footer /> } />
          <Route path="/movies" element={ <Footer />} />
          <Route path="/saved-movies" element={<Footer />} />
        </Routes>
      </div>
  );
}

export default App;
