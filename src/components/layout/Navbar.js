import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/imgs/Star_Wars_logo.svg";

const Navbar = () => {
  return (
    <nav className="padding">
      <div className="nav-left">
        <img src={logo} alt="Star Wars" />
      </div>
      <ul className="nav-right">
        <li>
          <Link className="btn" to="/">
            HOME
          </Link>
        </li>
        <li>
          <Link className="btn" to="/status">
            STATUS
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
