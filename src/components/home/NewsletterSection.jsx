import React from "react";
import Container from "../Container";

const NewsletterSection = () => {
  return (
    <section className="newsletter-section">
      <Container>
        <div className="newsletter-overlay">
          <img src="/img/cta-img-bg 1.png" alt="Newsletter call-to-action background" loading="lazy" />
        </div>
        <div className="newsletter-content">
          <h2>Join Our Newsletter for Exclusive Offers!</h2>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" className="newsletter-input" aria-label="Email for newsletter" />
            <button type="submit" className="newsletter-button">
              Join Now
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default NewsletterSection;
