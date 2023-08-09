import './responsive-navbar-1.scss'
import React from "react";

const Navbar1 = () => {
    return (
        <div>
            <div className="container">
  <div className="row">
    <div className="menu-btn">
      <i className="fa-solid fa-bars"></i>
    </div>
    <nav className="navbar">
      <div className="logo">

        <a href="">Your Logo</a>
      </div>
      <ul className="main-menu">
        <li className="list-items"><a href="">About</a></li>
        <li className="list-items"><a href="">Services</a></li>
        <li className="list-items"><a href="">Contact</a></li>
        <li className="list-items"><a href="">Blog</a></li>
      </ul>
    </nav>
  </div>

</div>
        </div>
      )
    }
    export default Navbar1