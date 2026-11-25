import React from "react";
import "./styles/Studentlife.css"
import volleyball from "./assets/volleball.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faUsers, faComputer } from '@fortawesome/free-solid-svg-icons';
import { faFutbol } from '@fortawesome/free-regular-svg-icons';

export function Studentlife() {
    return(
        <div id="studentLife">
            <span className="tag">STUDENT LIFE</span>
            <h2>More than the classroom.</h2>
            <div className="s-card-container">
                <img src={volleyball} alt="" className="s-image"/>
                {/* <div className="s-image"></div> */}
                <div className="s-card s-one">
                    <FontAwesomeIcon icon={faPalette} className="s-icon"/>
                    <span>Music & Drama</span>
                </div>
                <div className="s-card s-two">
                    <FontAwesomeIcon icon={faFutbol} className="s-icon"/>
                    <span>Sports & Games</span>
                </div>
                <div className="s-card s-three">
                    <FontAwesomeIcon icon={faUsers} className="s-icon"/>
                    <span>Art Studio</span>
                </div>
                <div className="s-card s-four">
                    <FontAwesomeIcon icon={faComputer} className="s-icon"/>
                    <span>Libary & ICT Hub</span>
                </div>
            </div>
        </div>
    )
}