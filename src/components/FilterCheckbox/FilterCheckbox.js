import React from 'react';
import './FilterCheckbox.css'

function FilterCheckbox({onChange, checked}) {
  return (
    <div className="checkbox">
      <label className="checkbox__label button-hover" htmlFor="checkbox">
        <input className="checkbox__input" type="checkbox" name="checkbox" id="checkbox" onChange={onChange} checked={checked} />
        <span className="checkbox__inner">Короткометражки</span>
      </label>
    </div>
  );
}

export default FilterCheckbox;