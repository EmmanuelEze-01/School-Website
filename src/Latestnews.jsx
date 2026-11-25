import React from "react";
import "./styles/news.css";
import grad from "./assets/graduation.jpg";
import sports from "./assets/sports.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export function Latestnews() {
  return (
    <div id="latestnews">
      <span className="tag">LATEST NEWS</span>
      <h2 className="sn">From our community</h2>
      <div className="news-cards-cnt">
        <div className="news-card">
          <img src={sports} alt="" />
          <span>
            <FontAwesomeIcon icon={faCalendar} />
            Oct 10, 2026
          </span>
          <h3>CrestView Inter-House Sport 2026</h3>
          <p>A day of talent, teamwork and school spirit.</p>
          <a href="">
            {" "}
            Read more <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
        <div className="news-card">
          <img src={grad} alt="" />
          <span>
            <FontAwesomeIcon icon={faCalendar} />
            Sep 25, 2026
          </span>
          <h3>Class of 2026 Gradurates</h3>
          <p>Celebrating excellence and new beginnings.</p>
          <a href="">
            Read more <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
        <div className="calendar">
          <h2>
            <FontAwesomeIcon icon={faCalendar} /> Upcoming events
          </h2>
          <div className="de-cnt">
            <div className="de">
              <div className="date">
                <span>01</span>
                <span>DEC</span>
              </div>
              <div className="event">
                <span>Open Day</span>
                <span>9:00 AM - 1:00 PM</span>
              </div>
            </div>
            <div className="de">
              <div className="date">
                <span>01</span>
                <span>DEC</span>
              </div>
              <div className="event">
                <span>Open Day</span>
                <span>9:00 AM - 1:00 PM</span>
              </div>
            </div>
            <div className="de">
              <div className="date">
                <span>01</span>
                <span>DEC</span>
              </div>
              <div className="event">
                <span>Open Day</span>
                <span>9:00 AM - 1:00 PM</span>
              </div>
            </div>
          </div>
          <a href="">
            Full calendar <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </div>
      <div className="testimonials">
        <h2>What parents say</h2>
        <div className="testimonials-cards-container">
          <div className="testimonial-cards">
            <span>
              <FontAwesomeIcon icon={faQuoteLeft} />
              Crestview Academy has gicen my child confidence and a love for
              learning. <br /> Mrs. Adebayo, Parent
            </span>
          </div>
          <div className="testimonial-cards">
            <span>
              <FontAwesomeIcon icon={faQuoteLeft} />
              Crestview Academy has gicen my child confidence and a love for
              learning. <br /> Mrs. Adebayo, Parent
            </span>
          </div>
          <div className="testimonial-cards">
            <span>
              <FontAwesomeIcon icon={faQuoteLeft} />
              Crestview Academy has gicen my child confidence and a love for
              learning. <br /> Mrs. Adebayo, Parent
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
