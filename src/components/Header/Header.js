import { Routes, Route } from 'react-router-dom';
import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import NavLogin from '../NavLogin/NavLogin';

function Header() {
  return (
      <Routes>
        <Route path="/" element={
          <header className="header">
            <Logo />
            <Navigation /> 
          </header>  
        } />
        <Route path="/movies" element={
          <header className="header">
            <Logo />
            <NavLogin /> 
          </header>  
        } />
        <Route path="/saved-movies" element={
          <header className="header">
            <Logo />
            <NavLogin /> 
          </header>
        } />
        <Route path="/profile" element={
          <header className="header">
            <Logo />
            <NavLogin /> 
          </header>
        } />
      </Routes>
  );
}

export default Header;