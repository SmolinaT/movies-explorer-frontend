import React from "react";
import './Profile.css';
import Header from "../Header/Header";
import NavLogin from "../NavLogin/NavLogin";

function Profile () {
  return (
    <>
      <Header>
        <NavLogin />
      </Header>
      <main className="profile">
        <div className="profile__container">
          <h2 className="profile__title">Привет, Татьяна!</h2>
          <form className="profile__content">
            <div className="profile__space">
              <label className="profile__name" htmlFor="name">Имя</label>
              <input type="text" 
                required 
                className="profile__input" 
                placeholder="Татьяна" 
                name="name"
                id="name"
                minLength="1"
                maxLength="20" />
            </div>
            <div className="profile__space">
              <label className="profile__name" htmlFor="email">E-mail</label>
              <input type="email" 
                required 
                className="profile__input" 
                placeholder="pochta@yandex.ru" 
                name="email"
                id="email"
                minLength="2"
                maxLength="30" />
            </div>
          </form>
            <button
              className="profile__edit-button button-hover"
              type="button">
                Редактировать
            </button>
            <button
              className="profile__close-button button-hover"
              type="button">
                Выйти из аккаунта
            </button>
        </div>
      </main>
    </>
  );
}

export default Profile;