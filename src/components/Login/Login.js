import React from "react";
import { Link } from "react-router-dom";
import './Login.css';
import Auth from "../Auth/Auth";
import Logo from "../Logo/Logo";

function Login () {
  return (
    <section className="login">
      <Link to="/" className="login__link link-hover">
        <Logo />
      </Link>
      <Auth
        title="Рады видеть!"
        buttonText="Войти"
        password=""
        errorText=""
        text="Ещё не зарегистрированы?"
        link="/signup"
        linkText="Регистрация" />
    </section>
  );
}

export default Login;