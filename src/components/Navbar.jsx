import React from "react";
import {Button} from "react-bootstrap"
import {HashLink} from "react-router-hash-link"
const Navbar = ({ navbarOpen, setNavbarOpen }) => {
  return (
    <div className="d-flex header justify-content-between align-items-center">
      <button
        className={navbarOpen ? "menu-btn expanded" : "menu-btn"}
        onClick={() => setNavbarOpen((prevNavbarOpen) => !prevNavbarOpen)}
      >
        <div className="menu-icon-container">
            <span className="icon-line"></span>
            <span className="icon-line"></span>
            <span className="icon-line"></span>
        </div>
      </button>
      <div className="logo">Photography  Today</div>
      <div className="cantact-btn">
        <HashLink to ="#contact" smooth>
        <Button variant="primary">Subscribe</Button>
        </HashLink>
        
      </div>
    </div>
  );
};

export default Navbar;
