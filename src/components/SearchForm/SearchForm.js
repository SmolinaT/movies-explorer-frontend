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
          id="movie" />
        <button type="submit" className="search-form__submit" name="searchButton" />
      </div>
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;