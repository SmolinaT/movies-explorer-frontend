import { Link } from 'react-router-dom';
import './Navigation.css'

function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/signup" href="#" className="navigation__link">Регистрация</Link>
      <Link to="/signin" href="#" className="navigation__link navigation__link_color_green">Войти</Link>
    </nav>
  );
}

export default Navigation;