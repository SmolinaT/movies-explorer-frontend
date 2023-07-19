import React from "react";
import { Link } from "react-router-dom";
import './Auth.css';

function Auth ({ children, title, buttonText, text, link, linkText }) {
  return (
    <div className="auth">
      <h2 className="auth__title">{title}</h2>
      <form className="auth__content">
        <div className="auth__inputs">
          {children}
          <label className="auth__name" htmlFor="email">E-mail</label>
          <input type="email" 
            required 
            className="auth__input auth__input_type_email" 
            placeholder="Email" 
            name="email"
            id="email" />
          <label className="auth__name" htmlFor="password">Пароль</label>
          <input type="password" 
            required 
            className="auth__input" 
            placeholder="Пароль" 
            name="password"
            id="password"
            value={123456789} />
          <span className="auth__input-error">Что-то пошло не так...</span>
        </div>
        <button
          type="submit"
          className="auth__submit"
          name="saveButton">
            {buttonText}
        </button>
      </form>
      <p className="auth__text">{text}&nbsp;
        <Link to={link} className="auth__link"> {linkText}</Link>
      </p>
    </div>
  );
}

export default Auth;