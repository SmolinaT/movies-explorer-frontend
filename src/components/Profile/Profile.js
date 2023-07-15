import React from "react";
import './Profile.css';

function Profile () {
  return (
    <div className="profile">
      <h2 className="profile__title">Привет, Татьяна!</h2>
      <form className="profile__content">
        <div className="profile__space">
          <label class="profile__name" for="name">Имя</label>
          <input type="text" 
            required 
            className="profile__input" 
            placeholder="Имя" 
            name="name"
            id="name" />
        </div>
        <div className="profile__space">
          <label class="profile__name" for="email">E-mail</label>
          <input type="email" 
            required 
            className="profile__input" 
            placeholder="Email" 
            name="email"
            id="email" />
        </div>
      </form>
        <button className="profile__edit-button" type="button">Редактировать</button>
        <button className="profile__close-button" type="button">Выйти из аккаунта</button>
    </div>
  );
}

export default Profile;