import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="header__logo header__logo-link--activate">
      <img
        className="header__logo"
        src="../public/img/logo.svg"
        alt="6 cities logo"
        width="81"
        height="41"
      />
    </Link>
  );
}
export { Logo };
