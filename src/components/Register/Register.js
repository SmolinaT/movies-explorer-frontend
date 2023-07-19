import React from "react";
import './Register.css';
import Auth from "../Auth/Auth";
import Logo from "../Logo/Logo";

function Register () {
  return (
    <section className="register">
      <Logo />
      <Auth
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        text="Уже зарегистрированы?"
        link="/signin"
        linkText="Войти">
          <label className="auth__name" htmlFor="name">Имя</label>
          <input type="text" 
            required 
            className="auth__input" 
            placeholder="Имя" 
            name="name"
            id="name" />
      </Auth>
    </section>
  );
}

export default Register;