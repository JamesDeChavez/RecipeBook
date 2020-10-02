import React from 'react';
import "./css/Footer.css";

const Footer = (props) => {

  return(
    <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><a className="nav-link" href="/">About</a></li>
          <li className="nav-item"><a className="nav-link" href="/">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Footer;
