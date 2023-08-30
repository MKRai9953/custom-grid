import React from "react";
import "./Navbar.css";
import grid from "../../assests/grid.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="navbar-logo">
          <img src={grid} alt="" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
