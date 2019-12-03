import React from "react";
import PropTypes from "prop-types";
import logo from "../../assets/imgs/Star_Wars_logo.svg";

const Navbar = props => {
  return (
    <nav>
      <div className="nav-left">
        <img src={logo} alt="Star Wars" />
      </div>
      <ul className="nav-right">
        <li>
          <a className="btn" href="#!">
            HOME
          </a>
        </li>
        <li>
          <a className="btn" href="#!">
            STATUS
          </a>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
