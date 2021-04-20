import React from "react";
import "./NavbarStyle.scss";
import logo from "../../../assets/image-asset@2x.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Our Story</a>
        </li>
        <li>
          <div className="dropdown">
            <label className="label">Services</label>
            <div className="dropdown-content">
              <a href="#">Salon Services</a>
              <hr />
              <a href="#">Spa Services</a>
              <hr />
              <a href="#">Bridal Services</a>
            </div>
          </div>
        </li>
      </ul>
      <img src={logo} alt="logo" />
      <ul className="nav-right">
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
