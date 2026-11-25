import React from "react";
import './styles/admission.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";


export function Admission() {
  return (
    <div id="admissions">
      <span className="tag">ADMISSIONS</span>
      <h2>joining Crestview in four steps</h2>
      <div className="steps-cards-cnt">
        <div className="step-card">
          <p>1</p>
          <span>Enquire</span>
          <h3>Submit an application</h3>
        </div>
        <div className="step-card">
          <p>2</p>
          <span>Apply</span>
          <h3>Complete the online form and upload documents.</h3>
        </div>
        <div className="step-card">
          <p>3</p>
          <span>Assessment</span>
          <h3>Your child takes a friendly assessment</h3>
        </div>
        <div className="step-card">
          <p>4</p>
          <span>Enroll</span>
          <h3>You receive an offer, pay fees and join the family.</h3>
        </div>
      </div>
      <div className="action-sec">
        <div>
          <span className="ic">< FontAwesomeIcon icon={faPaperPlane}/></span>
          <div>
            <span>Ready to see Crestview for yourself?</span>
            <p>
              Book a campus tour and meet our teachers, students and families.
            </p>
          </div>
        </div>

        <button>Book a tour < FontAwesomeIcon icon={faArrowRight} /></button>
      </div>
    </div>
  );
}
