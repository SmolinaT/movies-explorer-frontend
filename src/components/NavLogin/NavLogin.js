import React from 'react';
import { NavLink, Link } from 'react-router-dom';
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
        <NavLink
          to="/movies"
          className={({isActive}) => isActive 
            ? "nav-login__link nav-login__link_status_active link-hover"
            : "nav-login__link link-hover"}>
              Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className={({isActive}) => isActive 
            ? "nav-login__link nav-login__link_status_active link-hover"
            : "nav-login__link link-hover"}>
              Сохранённые фильмы
        </NavLink>
        <Link
          to="/profile"
          className="nav-login__link nav-login__link_color_gray link-hover">
            Аккаунт
        </Link>
      </div>
      <button
        type="button"
        className="nav-login__burger-button button-hover"
        onClick={handleBurgerMenuClick} />
    </nav>
    <BurgerMenu isOpen={isBurgerMenuOpen} onClose={closeBurgerMenu} />
    </>
  );
}

export default NavLogin;