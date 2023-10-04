import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({handleSearchMovie, onChange, checked, isMoviesPage, handleSearchSavedMovie, onSaveChange, checkedSave}) {
  const [keyword, setKeyword] = React.useState('');
  const [isValid, setIsValid] = React.useState(false);
  const [errorText, setErrorText] = React.useState('');

  React.useEffect(() => {
    if(isMoviesPage) {
      setKeyword(localStorage.getItem('searchKeyword' || ''));
    }
  }, [])

  function handleChangeKeyword(evt) {
    setKeyword(evt.target.value);
    setIsValid(evt.target.closest('form').checkValidity());
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    if (keyword) {
      if (isMoviesPage) {
        handleSearchMovie(keyword);
      } else {
        handleSearchSavedMovie(keyword);
      }
   } else {
      return setErrorText('Нужно ввести ключевое слово')
   }
  }

  return (
    <form className="search-form" onSubmit={handleSubmit} noValidate>
      <div className="search-form__container">
        <div className="search-form__icon"/>
          <input 
            type="text" 
            required 
            className="search-form__input" 
            placeholder="Фильм" 
            name="movie"
            id="movie"
            minLength="2"
            maxLength="50"
            onChange={handleChangeKeyword}
            value={keyword || ''} />
          <button
            type="submit"
            className="search-form__submit button-hover"
            name="searchButton" />
      </div>
      <span className='search-form__error'>{!isValid && errorText}</span>
      { isMoviesPage ? (
        <FilterCheckbox onChange={onChange} checked={checked} />
      )
      : (
        <FilterCheckbox onChange={onSaveChange} checked={checkedSave} />
      )  
      }
    </form>
  );
}

export default SearchForm;