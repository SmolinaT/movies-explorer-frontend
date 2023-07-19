import { NavLink ,Link } from 'react-router-dom';
import './BurgerMenu.css'

function BurgerMenu({ isOpen, onClose }) {
  return (
    <div className={`menu ${isOpen ? 'menu_opened' : ''}`}>
      <div className="menu__container">
        <button type="button" className="menu__close-button" onClick={onClose} />
        <div className="menu__links">
          <NavLink
            to="/"
            className={({isActive}) => isActive ? "menu__link menu__link_status_active": "menu__link"}
            onClick={onClose}>
             Главная
          </NavLink>
          <NavLink
            to="/movies"
            className={({isActive}) => isActive ? "menu__link menu__link_status_active": "menu__link"}
            onClick={onClose}>
              Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({isActive}) => isActive ? "menu__link menu__link_status_active": "menu__link"}
            onClick={onClose}>
              Сохранённые фильмы
          </NavLink>
        </div>
        <Link
          to="/profile"
          className="menu__link menu__link_color_gray"
          onClick={onClose}>
            Аккаунт
        </Link>
      </div>
    </div>
  );
}

export default BurgerMenu;