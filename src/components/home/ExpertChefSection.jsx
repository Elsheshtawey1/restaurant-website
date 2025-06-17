import Button from "../Button";
import Container from "../Container";

const checkmarkImagePath = "/img/check.svg";

const CheckmarkIcon = () => <img src={checkmarkImagePath} alt="Checkmark icon for chef highlight" className="checkmark-image-icon" loading="lazy" />;

const ExpertChefSection = () => {
  return (
    <Container>

    <section className="expert-chef-section">
      <div className="garlic-sketch-background">
        <img src="/img/Vector.svg" alt="Garlic sketch background" loading="lazy" />
      </div>
      <div className="chef-section-container">
        <div className="chef-text-content">
          <h2 className="chef-section-title">Our Expert Chef</h2>
          <p className="chef-section-description">
            Meet Chef Antonio, the creative force behind our menu. With over 20 years of culinary experience, Chef Antonio brings passion, artistry, and a love for fresh ingredients to every plate.
          </p>
          <ul className="chef-highlights">
            <li className="highlight-point">
              <CheckmarkIcon />
              <span>Farm-to-table ingredients sourced locally</span>
            </li>
            <li className="highlight-point">
              <CheckmarkIcon />
              <span>Signature sauces and house-made dressings</span>
            </li>
            <li className="highlight-point special-highlight">
              <CheckmarkIcon />
              <span>Seasonal tasting menus and chef's specials</span>
            </li>
            <li className="highlight-point">
              <CheckmarkIcon />
              <span>Expert in international and fusion cuisine</span>
            </li>
            <li className="highlight-point">
              <CheckmarkIcon />
              <span>Dedicated to exceptional guest experiences</span>
            </li>
            <li className="highlight-point">
              <CheckmarkIcon />
              <span>Passionate about culinary innovation</span>
            </li>
          </ul>
          <div className="button">
            <Button aria-label="Menu" text={"menu"} className="btn-secondary" />
            <Button aria-label="Book a table" text={"Book a table "} />
          </div>
        </div>
        <div className="chef-image-container">
          <div className="chef-orange-bg"></div>
          <img src="/img/chef 1.png" alt="Portrait of our expert chef" className="chef-main-image" loading="lazy" />
        </div>
      </div>
    </section>
    </Container>
  );
};

export default ExpertChefSection;
