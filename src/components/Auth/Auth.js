import React from "react";
import { Link } from "react-router-dom";
import './Auth.css';

function Auth ({
  children,
  title,
  buttonText,
  errorMessage,
  text,
  link,
  linkText,
  disabled,
  emailValue,
  emailError,
  passwordValue,
  passwordError,
  onChange,
  onSubmit
})
{
  return (
    <div className="auth">
      <h2 className="auth__title">{title}</h2>
      <form className="auth__content" noValidate onSubmit={onSubmit}>
        <div className="auth__inputs">
          {children}
          <label className="auth__name" htmlFor="email">E-mail</label>
          <input type="email" 
            required 
            className="auth__input auth__input_type_email"
            placeholder="Email"
            name="email"
            id="email"
            minLength="2"
            maxLength="30"
            value={emailValue}
            onChange={onChange}
            pattern="[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\.{1,1}[a-z]{2,}" />
          <span className="auth__input-error">{emailError}</span>
          <label className="auth__name" htmlFor="password">Пароль</label>
          <input type="password" 
            required 
            className="auth__input"
            placeholder="Пароль" 
            name="password"
            id="password"
            minLength="8"
            maxLength="15"
            value={passwordValue}
            onChange={onChange} />
          <span className="auth__input-error">{passwordError}</span>
        </div>
        <div className="auth__container">
          <span className="auth__error">{errorMessage}</span>
          <button
            type="submit"
            className={`auth__submit ${disabled
              ? 'auth__submit_type_disabled' 
              : 'button-hover'}`}
            name="saveButton"
            disabled={disabled}>
              {buttonText}
          </button>
        </div>
      </form>
      <p className="auth__text">{text}&nbsp;
        <Link to={link} className="auth__link link-hover"> {linkText}</Link>
      </p>
    </div>
  );
}

export default Auth;