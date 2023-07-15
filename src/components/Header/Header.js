import { Routes, Route, Link } from 'react-router-dom';
import headerLogo from '../../images/logo.svg';
import './Header.css';
import Navigation from '../Navigation/Navigation';


function Header() {
  return (
    <header className="header">
      <img class="header__logo" src={headerLogo} alt="Логотип-смайлик" />
      <Navigation />
    </header>
  );
}

export default Header;