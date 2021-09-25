import React from "react";
import logo from "../../images/logo.PNG";
import './Header.css'

const Header = () => {
  return (
    <div>
      <nav>
        <figure className="brand-logo">
          <img src={logo} alt="" />
        </figure>
        <div className="nav-bar">
          <div className="nav-menu">
            <div className="nav-options">
              <li>Home</li>
              <li>Service</li>
              <li>Food-Vlog</li>
            </div>
            <div className="food-search">
              <input type="text" placeholder="search your favorite food" />
              <button className="src-btn">Search</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
