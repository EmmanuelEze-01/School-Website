import React from "react";
import './styles/Hero.css'
import HeroImage from './assets/School-building.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export function Hero(){

    return(
        <div id="hero">
            <div className="left">
                <span>ADMISSIONS OPEN 2026/2027 SESSION</span>
                <h2>Where curious childeren grow into confident leaders.</h2>
                <p>A caring, high-performing school community that builds strong minds, good character and a life long love of learning.</p>
                <div className="buttons">
                    <button>Start an application <FontAwesomeIcon icon={faArrowRight} /></button>
                    <button>Book a campus tour</button>
                </div>
            </div>
            <img src={HeroImage} alt="School Building" />
        </div>
    )
}