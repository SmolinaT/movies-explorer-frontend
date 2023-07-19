import React from "react";
import './Login.css';
import Auth from "../Auth/Auth";
import Logo from "../Logo/Logo";

function Login () {
  return (
    <section className="login">
      <Logo />
      <Auth
        title="Рады видеть!"
        buttonText="Войти"
        text="Ещё не зарегистрированы?"
        link="/signup"
        linkText="Регистрация" />
    </section>
  );
}

export default Login;