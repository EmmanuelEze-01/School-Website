import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faFileLines, faCalendar, faUser } from '@fortawesome/free-regular-svg-icons';
import './styles/info.css'
import WelcomeImg from "./assets/Assembly.jpg"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export  function Info() {
  return (
    <div id="info">
      <div className="card-contianer">
        <div className="card">
            <FontAwesomeIcon icon={faFileLines} className="icon" />
            <span>Apply online</span>
            <p>Complete the form in about 10mins</p>
        </div>
        <div className="card">
            <FontAwesomeIcon icon={faGraduationCap} className="icon" />
            <span>Our curriculum</span>
            <p>Get a head start with our modern curriculum</p>
        </div>
        <div className="card">
            <FontAwesomeIcon icon={faCalendar} className="icon"  />
            <span>School calendar</span>
            <p>Term dates, holidays, and more.</p>
        </div>
        <div className="card">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <span>Parent portal</span>
            <p>Track progress and communicate easily</p>
        </div>
      </div>
      <div className="welcome-cnt">
            <img src={WelcomeImg} alt="" />
            <div className="wlc">
                <span className="wlcm-text">WELCOME TO CRESTVIEW</span>   
                <h3>A school that knows every child by name.</h3>
                <p>Invite two or three sentences about your school's story, founding year and values. Here, we help students discover their petential in a supportive and inspiring environment.</p>
                <div>
                    <span><FontAwesomeIcon icon={faCheck} className="green"/>Qualified, caring teachers</span>
                    <span><FontAwesomeIcon icon={faCheck} className="green"/>Safe, secure campus</span>
                    <span><FontAwesomeIcon icon={faCheck} className="green"/>Strong exam results</span>
                </div>
                <button>Read our story <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </div>
        <div className="achievements-container">
            <div className="achievements-card">
                <span>20+</span>
                <p>years of excellence</p>
            </div>
            <div className="achievements-card">
                <span>98%</span>
                <p>Student success rate</p>
            </div>
            <div className="achievements-card">
                <span>200+</span>
                <p>Expert teachers</p>
            </div>
            <div className="achievements-card">
                <span>25+</span>
                <p>Clubs & societies</p>
            </div>
        </div>
      </div>    
  );
}
