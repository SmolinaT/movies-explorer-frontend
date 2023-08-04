import React from "react";
import { Link } from "react-router-dom";
import './Login.css';
import Auth from "../Auth/Auth";
import Logo from "../Logo/Logo";
import useValidateForm from '../../hooks/useValidateForm'

function Login ({ onLogin, errorMessage }) {
  const { values, errors, isValid, handleChange, resetForm } = useValidateForm();

  function handleSubmit(e) {
    e.preventDefault();
    if (!values.password || !values.email) {
      return;
    }

    onLogin(values);
    resetForm();
  }

  return (
    <section className="login">
      <Link to="/" className="login__link link-hover">
        <Logo />
      </Link>
      <Auth
        title="Рады видеть!"
        buttonText="Войти"
        errorMessage={errorMessage || ''}
        text="Ещё не зарегистрированы?"
        link="/signup"
        linkText="Регистрация"
        disabled={!isValid}
        emailValue={values.email || ''}
        emailError={errors.email || ''}
        passwordValue={values.password || ''}
        passwordError={errors.password || ''}
        onChange={handleChange}
        onSubmit={handleSubmit} />
    </section>
  );
}

export default Login;