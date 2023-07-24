import { Link } from "react-router-dom";
import './Header.css';
import Logo from '../Logo/Logo';

function Header({ children }) {
  return (
    <header className="header header_page_main">
      <Link to="/" className="header__link link-hover">
        <Logo />
      </Link>
      {children}
    </header>
  );
}

export default Header;