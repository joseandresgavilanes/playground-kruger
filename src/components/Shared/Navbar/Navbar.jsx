import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__container-element">
          <NavLink to={"/"}>
            <i className="fa-solid fa-key"></i>
            <p>Home</p>
          </NavLink>
        </div>
        <div className="navbar__container-element">
          <NavLink to={"/bmi"}>
            <i className="fa-solid fa-key"></i>
            <p>BMI</p>
          </NavLink>
        </div>
        <div className="navbar__container-element">
          <NavLink to={"/age"}>
            <i className="fa-solid fa-key"></i>
            <p>Age Calculator</p>
          </NavLink>
        </div>
        <div className="navbar__container-logo">
          <img src="/logo.png" className="navbar__container-logo__img" />
          <h2 className="navbar__container-logo__title">KrugerStar</h2>
        </div>
        <div className="navbar__container-element">
          <NavLink to={"/clock"}>
            <i className="fa-solid fa-key"></i>
            <p>Clock</p>
          </NavLink>
        </div>
        <div className="navbar__container-element">
          <NavLink to={"/about"}>
            <i className="fa-solid fa-key"></i>
            <p>About me</p>
          </NavLink>
        </div>
        <div className="navbar__container-element">
          <NavLink to={"/contact"}>
            <i className="fa-solid fa-key"></i>
            <p>Contact</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
