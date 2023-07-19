import React from "react";
import { Link } from "react-router-dom";
import './Register.css';
import Auth from "../Auth/Auth";
import Logo from "../Logo/Logo";

function Register () {
  return (
    <section className="register">
      <Link to="/" className="register__link link-hover">
        <Logo />
      </Link>
      <Auth
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        password="123456789"
        errorText="Что-то пошло не так..."
        text="Уже зарегистрированы?"
        link="/signin"
        linkText="Войти">
          <label className="auth__name" htmlFor="name">Имя</label>
          <input type="text" 
            required 
            className="auth__input" 
            placeholder="Имя" 
            name="name"
            id="name"
            minLength="1"
            maxLength="20" />
      </Auth>
    </section>
  );
}

export default Register;