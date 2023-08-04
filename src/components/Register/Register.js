import React from "react";
import { Link } from "react-router-dom";
import './Register.css';
import Auth from "../Auth/Auth";
import Logo from "../Logo/Logo";
import useValidateForm from '../../hooks/useValidateForm'

function Register ({onRegister, errorMessage}) {
  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm
  } = useValidateForm();

  function handleSubmit(e) {
    e.preventDefault();
    if (!values.password || !values.email || !values.name) {
      return;
    }

    onRegister(values);
    resetForm();
  }

  return (
    <section className="register">
      <Link to="/" className="register__link link-hover">
        <Logo />
      </Link>
      <Auth
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        errorMessage={errorMessage || ''}
        text="Уже зарегистрированы?"
        link="/signin"
        linkText="Войти"
        disabled={!isValid}
        emailValue={values.email || ''}
        emailError={errors.email || ''}
        passwordValue={values.password || ''}
        passwordError={errors.password || ''}
        onChange={handleChange}
        onSubmit={handleSubmit} >
          <label className="auth__name" htmlFor="name">Имя</label>
          <input type="text" 
            required 
            className="auth__input"
            placeholder="Имя" 
            name="name"
            id="name"
            minLength="1"
            maxLength="20"
            value={values.name || ''}
            onChange={handleChange} />
          <span className="auth__input-error">{errors.name || ''}</span>
      </Auth>
    </section>
  );
}

export default Register;