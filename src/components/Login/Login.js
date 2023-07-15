import React from "react";
import { Link } from "react-router-dom";
import './Login.css';

function Login () {
  return (
    <div className="login">
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__content">
        <label class="login__name" for="email">E-mail</label>
        <input type="email" 
          required 
          className="login__input login__input_type_email" 
          placeholder="Email" 
          name="email"
          id="email" />
        <label class="login__name" for="password">Пароль</label>
        <input type="password" 
          required 
          className="login__input" 
          placeholder="Пароль" 
          name="password"
          id="password" />
        <button type="submit" className="login__submit" name="saveButton">Войти</button>
      </form>
      <p className="login__text">Ещё не зарегистрированы?&nbsp;
        <Link to="/signup" className="login__link"> Регистрация</Link>
      </p>
    </div>
  );
}

export default Login;