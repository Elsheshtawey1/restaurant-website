import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Container from "../components/Container";

const FooterSection = () => {
  return (
    <Container>
      <footer className="footer-section" role="contentinfo">
        <div className="footer-background-sketch"></div>
        <div className="footer-container">
          <div className="footer-column about-us">
            <div className="footer-logo-container">
              <img src="/img/logo 1.svg" alt="Restaurant logo and brand" className="footer-logo-img" loading="lazy" />
              <span className="footer-logo-text">restaurant</span>
            </div>
            <p>
              At Restaurant, we believe in great food and genuine hospitality. Our team is dedicated to serving you fresh, flavorful dishes in a welcoming environment.{" "}
              <a href="#learn-more" className="learn-more-link">
                Learn more
              </a>
            </p>
          </div>

          <div className="footer-column opening-hours">
            <h4>OPENING HOURS</h4>
            <div className="hours-grid">
              <div>
                <p>Monday - Friday</p>
                <p>8:00 am to 9:00 pm</p>
              </div>
              <div>
                <p>Saturday</p>
                <p>8:00 am to 9:00 pm</p>
              </div>
              <div>
                <p>Sunday</p>
                <p className="closed">CLOSED</p>
              </div>
            </div>
          </div>

          <div className="footer-column navigation-links">
            <h4>NAVIGATION</h4>
            <ul>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#about">About us</a>
              </li>
              <li>
                <a href="#contact">Contact us</a>
              </li>
              <li>
                <a href="#main-dishes">Main dishes</a>
              </li>
            </ul>
          </div>

          <div className="footer-column dishes-links">
            <h4>DISHES</h4>
            <ul>
              <li>
                <a href="#fish">Fish & Viggies</a>
              </li>
              <li>
                <a href="#tofu">Tofu Chili</a>
              </li>
              <li>
                <a href="#egg">Egg & Cocumber</a>
              </li>
              <li>
                <a href="#lumpia">Lumpia w/Suace</a>
              </li>
            </ul>
          </div>

          <div className="footer-column follow-us">
            <h4>FOLLOW US</h4>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/mohamed-elsheshtawey/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://www.linkedin.com/in/mohamed-elsheshtawey/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/mohamed-elsheshtawey/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>&copy; 2024 Restaurants, All Right Reserved. Designed by ELSHESHTAWEY</p>
          <div className="legal-links">
            <a href="#terms">Terms of Service</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default FooterSection;
