import React from 'react';
import './FilterCheckbox.css'

function FilterCheckbox() {
  return (
    <div className="checkbox">
      <label className="checkbox__label button-hover" htmlFor="checkbox">
        <input className="checkbox__input" type="checkbox" name="checkbox" id="checkbox" />
        <span className="checkbox__inner">Короткометражки</span>
      </label>
    </div>
  );
}

export default FilterCheckbox;