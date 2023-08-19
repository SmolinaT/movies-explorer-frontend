import React from "react";
import './Profile.css';
import Header from "../Header/Header";
import NavLogin from "../NavLogin/NavLogin";
import useValidateForm from "../../hooks/useValidateForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile ({ onSignOut, isSending, errorMessage, onUpdateUser, isBtnSaveVisible, setIsBtnSaveVisible, okMessage }) {
  const {
    values,
    setValues,
    errors,
    isValid,
    handleChange,
    resetForm
  } = useValidateForm();

  const currentUser = React.useContext(CurrentUserContext);

  const blockedButton = (!isValid || (currentUser.name === values.name && currentUser.email === values.email));

  React.useEffect(() => {
    setValues(currentUser);
    setIsBtnSaveVisible(false);
  }, [currentUser, setValues, setIsBtnSaveVisible])

  function handleSubmit(e) {
    console.log(values);
    console.log(currentUser)
    e.preventDefault();
      onUpdateUser({
        name: values.name,
        email: values.email
      })
      .then(()=> {
        resetForm();
      })
  }

  function handleUpdateProfile() {
    setIsBtnSaveVisible(true);
  }

  return (
    <>
      <Header>
        <NavLogin />
      </Header>
      <main className="profile">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <form className="profile__form" onSubmit={handleSubmit} noValidate>
          <div className="profile__content">
            <div className="profile__space">
              <label className="profile__name" htmlFor="name">Имя</label>
              <input type="text" 
                required 
                className="profile__input" 
                name="name"
                id="name"
                minLength="1"
                maxLength="20"
                value={values.name || ""} 
                onChange={handleChange}
                disabled={isBtnSaveVisible ? false : true} />
            </div>
            <span className="profile__input-error">{errors.name || ''}</span>
            <div className="profile__space">
              <label className="profile__name" htmlFor="email">E-mail</label>
              <input type="email" 
                required 
                className="profile__input" 
                name="email"
                id="email"
                minLength="2"
                maxLength="30"
                value={values.email || ""} 
                onChange={handleChange}
                disabled={isBtnSaveVisible ? false : true}
                pattern="[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\.{1,1}[a-z]{2,}" />
            </div>
            <span className="profile__input-error">{errors.email || ''}</span>
          </div>
          {!isBtnSaveVisible ? (
            <>
              {okMessage && <p className="profile__error profile__error_status_ok">{okMessage}</p>}
              <button
                className="profile__edit-button button-hover"
                type="button"
                onClick={handleUpdateProfile}>
                  Редактировать
              </button>
              <button
                className="profile__close-button button-hover"
                type="button"
                onClick={onSignOut}>
                  Выйти из аккаунта
              </button>
            </>
          ) : (
            <div className="profile__button-container">
              {errors && <span className="profile__error profile__error_status_bad">{errorMessage}</span>}
              <button
                type="submit"
                className={`profile__submit ${blockedButton
                  ? 'profile__submit_type_disabled' 
                  : 'button-hover'}`}
                name="saveProfileButton"
                disabled={blockedButton}>
                  {isSending ?'Сохранение..' : 'Сохранить'}
              </button>
          </div>
          )}
        </form>
      </main>
    </>
  );
}

export default Profile;