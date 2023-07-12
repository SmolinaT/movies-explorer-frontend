import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import Main from '../Main/Main';


function App() {
  return (
    <CurrentUserContext.Provider>
      <div className='page'>
        <Main />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
