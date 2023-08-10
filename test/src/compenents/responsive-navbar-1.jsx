import "./responsive-navbar-1.scss";
import React, { useState } from "react";

const Navbar1 = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <div>
      <div className="container">
        <div
          className="menu-btn"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <i className="fa-solid fa-bars"></i>
          <nav className="navbar">
            <div className="logo">
              <a href="">Your Logo</a>
            </div>

            <ul
              className={`main-menu
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"`}
            >
              <li className="list-items">
                <a href="">About</a>
              </li>
              <li className="list-items">
                <a href="">Services</a>
              </li>
              <li className="list-items">
                <a href="">Contact</a>
              </li>
              <li className="list-items">
                <a href="">Blog</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Navbar1;
