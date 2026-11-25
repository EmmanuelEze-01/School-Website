import React from "react";
import Logo from "./assets/Logo.png";
import "./styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export function Navbar() {
  return (
    <nav>
      <div className="contact-info-cnt">
        <div>
          <span>info@crestview.edu.ng</span>
          <span>+234 801 224 5678</span>
        </div>
        <div>
          <span>Students portal</span>
          <span>Staff Portal</span>
          <span>School Mail</span>
        </div>
      </div>
      <div className="nav">
        <img src={Logo} alt="logo" className="logo" />
        <ul>
          <a href="#info">About</a>
          <a href="#academics">Academics</a>
          <a href="#studentLife">Students Life</a>
          <a href="#latestnews">News</a>
          <a href="#admissions">Admissions</a>
          <a href="#admissions">Contact</a>
        </ul>
        <button>Apply Now</button>
        <FontAwesomeIcon icon={faBars} className="menu"/>
      </div>
    </nav>
  );
}
