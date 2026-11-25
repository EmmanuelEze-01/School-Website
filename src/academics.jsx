import React from "react";
import "./styles/academics.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faFlask,
  faGraduationCap
} from "@fortawesome/free-solid-svg-icons";

export function Academics() {
  return (
    <div id="academics">
      <span className="tag">ACADEMICS</span>
      <h2>Learning that fits every stage.</h2>
      <p>
        From first steps in nusery to university readiness in senior secondary.
      </p>
      <div className="a-card-container">
        <div className="a-card">
          <div className="top">
            <FontAwesomeIcon icon={faBookOpen} className="a-icon" />
          </div>
          <div>
            <span>Nursery</span>
            <p>Ages 3-5</p>
            <h3>
              Play-based learning that builds curosity trait and social skills
            </h3>
            <button>Explore</button>
          </div>
        </div>

        <div className="a-card">
          <div className="top">
            <FontAwesomeIcon icon={faBookOpen} className="a-icon" />
          </div>
          <div>
            <span>Primary</span>
            <p>Ages 6-11</p>
            <h3>Strong foundations in literacy, numaracy and more</h3>
            <button>Explore</button>
          </div>
        </div>

        <div className="a-card">
          <div className="top">
            <FontAwesomeIcon icon={faFlask} className="a-icon" />
          </div>
          <div>
            <span>Junior Secondary</span>
            <p>Ages 12-14</p>
            <h3>Hands-on science, technology and critical thinking.</h3>
            <button>Explore</button>
          </div>  
        </div>

        <div className="a-card">
          <div className="top">
            <FontAwesomeIcon icon={faGraduationCap} className="a-icon" />
          </div>
          <div>
            <span>Senior Secondary</span>
            <p>Ages 15-18</p>
            <h3>Focused exam preparation with diverse subject options.</h3>
            <button>Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
}
