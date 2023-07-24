import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <form className="search-form">
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
          maxLength="50" />
        <button
          type="submit"
          className="search-form__submit button-hover"
          name="searchButton" />
      </div>
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;