import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../../assets/imgs/Star_Wars_logo.svg";

const Navbar = props => {
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

Navbar.propTypes = {};

export default Navbar;
