import React from 'react';
import './NavTab.css'

function NavTab() {
  return (
    <nav className="navtab">
        <ul className="navtab__links">
          <li className="navtab__links-text">
            <a
              href="#about-project"
              className="navtab__link navtab__link_number_one link-hover">
                О проекте
            </a>
          </li>
          <li className="navtab__links-text">
            <a
              href="#techs"
              className="navtab__link navtab__link_number_two link-hover">
                Технологии
            </a>
          </li>
          <li className="navtab__links-text">
            <a
              href="#about-me"
              className="navtab__link navtab__link_number_three link-hover">
                Студент
            </a>
          </li>
        </ul>
    </nav>
  );
}

export default NavTab;