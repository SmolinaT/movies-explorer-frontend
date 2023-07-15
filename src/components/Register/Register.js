import React from "react";
import { Link } from "react-router-dom";
import './Register.css';

function Register () {
  return (
    <div className="register">
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__content">
        <label class="register__name" for="name">Имя</label>
        <input type="text" 
          required 
          className="register__input" 
          placeholder="Имя" 
          name="name"
          id="name" />
        <label class="register__name" for="email">E-mail</label>
        <input type="email" 
          required 
          className="register__input register__input_type_email" 
          placeholder="Email" 
          name="email"
          id="email" />
        <label class="register__name" for="password">Пароль</label>
        <input type="password" 
          required 
          className="register__input" 
          placeholder="Пароль" 
          name="password"
          id="password" />
        <span className="register__input-error">Что-то пошло не так...</span>
        <button type="submit" className="register__submit" name="saveButton">Зарегистрироваться</button>
      </form>
      <p className="register__text">Уже зарегистрированы?&nbsp;
        <Link to="/signin" className="register__link"> Войти</Link>
      </p>
    </div>
  );
}

export default Register;