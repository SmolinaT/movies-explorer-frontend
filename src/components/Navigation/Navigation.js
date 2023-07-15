import { Routes, Route, Link } from 'react-router-dom';
import './Navigation.css'

function Navigation() {
  return (
    <nav class="navigation">
      <a href="#" class="navigation__link">Регистрация</a>
      <a href="#" class="navigation__link">Войти</a>
    </nav>
  );
}

export default Navigation;