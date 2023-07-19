import headerLogo from '../../images/logo.svg';
import './Logo.css';

function Logo() {
  return (
      <img className="logo" src={headerLogo} alt="Логотип-смайлик" />
  );
}

export default Logo;