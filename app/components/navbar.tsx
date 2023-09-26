import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dices from "../images/dices.jpg";
import { Link } from "@remix-run/react";
import { faUser, faScroll } from "@fortawesome/free-solid-svg-icons";
import { faDAndD } from "@fortawesome/free-brands-svg-icons";
const NavBar = () => {
  return (
    <header className="bg-backgroundSecondary flex items-center justify-between h-28">
      <img src={dices} alt="logo" className="h-20 w-20 ml-6" />
      <nav className="mr-6 flex justify-around w-36">
        <Link to="/adventure">
          <FontAwesomeIcon icon={faScroll} className="navIcons" />
        </Link>
        <Link to="/comunity">
          <FontAwesomeIcon icon={faDAndD} className="navIcons" />
        </Link>
        <Link to="/account">
          <FontAwesomeIcon icon={faUser} className="navIcons" />
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
