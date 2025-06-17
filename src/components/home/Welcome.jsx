import Button from "../Button";
import Container from "../Container";
function Welcome() {
  return (
    <section className="welcome-section">
      <Container>
        <div className="background-sketch sketch-top-right">
          <img src="/img/Group (3).svg" alt="Decorative sketch top right" loading="lazy" />
        </div>
        <div className="background-sketch sketch-bottom-right">
          <img src="/img/Group (1).svg" alt="Decorative sketch bottom right" loading="lazy" />
        </div>
        <div className="background-sketch sketch-top-center-ish">
          <img src="/img/Group (2).svg" alt="Decorative sketch top center" loading="lazy" />
        </div>

        <div className="welcome-container ">
          <div className="image-column">
            <div className="dish-image-wrapper">
              <img src="/img/dish-2 1.png" alt="Som Tam Salad dish" className="dish-image" loading="lazy" />
              <img src="/img/leaf-3.svg" alt="Basil leaf decoration 1" className="floating-leaf leaf-1" loading="lazy" />
              <img src="/img/leaf-1.svg" alt="Basil leaf decoration 2" className="floating-leaf leaf-2" loading="lazy" />
              <img src="/img/leaf-2.svg" alt="Basil leaf decoration 3" className="floating-leaf leaf-3" loading="lazy" />
            </div>
          </div>

          <div className="text-column">
            <h1 className="welcome-title">Welcome to Our Restaurant</h1>
            <p className="welcome-description">
              From our kitchen to your table, we bring you authentic recipes, warm hospitality, and a cozy atmosphere. Whether you're here for a family dinner or a special celebration, we promise a
              taste of home in every bite.
            </p>
            <div className="button">
              <Button aria-label="Menu" text={"menu"} className="btn-secondary" />
              <Button aria-label="Book a table" text={"Book a table "} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Welcome;
