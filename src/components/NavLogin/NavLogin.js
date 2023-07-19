import React from 'react';
import { Link } from 'react-router-dom';
import './NavLogin.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function NavLogin() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);

  function handleBurgerMenuClick() {
    setIsBurgerMenuOpen(true);
  };
  
  function closeBurgerMenu() {
    setIsBurgerMenuOpen(false);
  };

  return (
    <>
    <nav className="nav-login">
      <div className="nav-login__links">
        <Link
          to="/movies"
          href="#"
          className="nav-login__link">
            Фильмы
        </Link>
        <Link
          to="/saved-movies"
          href="#"
          className="nav-login__link navigation__link_font_weight">
            Сохранённые фильмы
        </Link>
        <Link
          to="/profile"
          href="#"
          className="nav-login__link nav-login__link_color_gray">
            Аккаунт
        </Link>
      </div>
      <button type="button" className="nav-login__burger-button" onClick={handleBurgerMenuClick} />
    </nav>
    <BurgerMenu isOpen={isBurgerMenuOpen} onClose={closeBurgerMenu} />
    </>
  );
}

export default NavLogin;