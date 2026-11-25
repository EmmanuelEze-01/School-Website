import React from "react";
import "./styles/App.css";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Info } from "./info";
import { Academics } from "./academics";
import { Studentlife } from "./Studentlife";
import { Latestnews } from "./Latestnews";
import { Admission } from "./Admission";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Info />
      <Academics />
      <Studentlife />
      <Latestnews />
      <Admission />
      <footer>
        <div className="f-top-items-cnt">
          <div className="ti">
            <h3>Crestview Academy</h3>
            <p>Nutring minds and character from nursery to senior secondary.</p>
          </div>
          <div className="ti-two">
            <ul>
              <span>Explore</span>
              <li>About us</li>
              <li>Academics</li>
              <li>Admissions</li>
              <li>Student life</li>
            </ul>
          </div>
          <div className="ti-three">
            <ul>
              <span>For parents</span>
              <li>Parent portal</li>
              <li>Calendar</li>
              <li>Fees</li>
              <li>Policies</li>
            </ul>
          </div>
          <div className="ti-two">
            <ul>
              <span>Contact</span>
              <li>Beside Customary Court Pasali, Kuje 900102, Federal Capital Territory, Abuja</li>
              <li>+234 812 466 8411</li>
              <li>info@crestview.ed</li>
              <li>Mon-Fri &middot; 09:00 - 14:00</li>
            </ul>
          </div>
        </div>
        <div className="f-bottom-items-cnt">
          <span>&copy; 2026 Crestview Academy. All rights resereved.</span>
          <span>Privacy &middot; Terms &middot; Accessibility</span>
        </div>
      </footer>
    </>
  );
}

export default App;
