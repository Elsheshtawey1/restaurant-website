import Button from "../Button";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Container from "../Container";

const Hero = () => {
  return (
    <>
      <Container>
        <main className="hero ">
          <div className="left">
            <h1>We provide the best food for you</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="button">
              <Button aria-label="Menu" text={"menu"} className="btn-secondary" />
              <Button aria-label="Book a table" text={"Book a table "} />
            </div>
            <div className="social">
              <a href="https://www.linkedin.com/in/mohamed-elsheshtawey/" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={28} color="var(--third-color)" />
              </a>
              <a href="https://www.linkedin.com/in/mohamed-elsheshtawey/" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={28} color="var(--third-color)" />
              </a>
              <a href="https://www.linkedin.com/in/mohamed-elsheshtawey/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={28} color="var(--third-color)" />
              </a>
            </div>
          </div>
          <div className="right">
            <img className="img-one" src="/img/Mask group.png" alt="Restaurant hero background with mask group" loading="lazy" />
            <img className="img-two" src="/img/dish-2 1.png" alt="Featured dish: Som Tam Salad" loading="lazy" />
          </div>
        </main>
      </Container>
    </>
  );
};

export default Hero;
