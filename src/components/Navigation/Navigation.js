import { Link } from 'react-router-dom';
import './Navigation.css'

function Navigation() {
  return (
    <nav className="navigation">
      <Link
        to="/signup"
        href="#"
        className="navigation__link link-hover">
          Регистрация
      </Link>
      <Link
        to="/signin"
        href="#"
        className="navigation__link navigation__link_color_green link-hover">
          Войти
      </Link>
    </nav>
  );
}

export default Navigation;