import React from "react";
import Container from "../Container";
function Special() {
  return (
    <section className="special  ">
      <Container>
        <div className="background-sketch sketch-top-left">
          <img src="/img/Group (3).svg" alt="Decorative sketch top left" loading="lazy" />
        </div>
        <div className="background-sketch sketch-top-right">
          {" "}
          <img src="/img/Group (2).svg" alt="Decorative sketch top right" loading="lazy" />
        </div>
        <div className="background-sketch sketch-bottom-center">
          <img src="/img/Group (4).svg" alt="Decorative sketch bottom center" loading="lazy" />
        </div>

        <div className="content-header">
          {" "}
          <h1>Our Special Dishes</h1>
          <p>Explore our chef's handpicked specialties, each bursting with unique flavors and made to order just for you.</p>
        </div>

        <div className="special-dishes">
          <div className="dish active">
            <div className="image-container">
              {" "}
              <img src="/img/dish-1 1.png" alt="Lumpia with Sauce special dish" loading="lazy" />
              <span className="price-tag">$12</span>
            </div>
            <div className="dish-content">
              {" "}
              <h2>Lumpia with Sauce</h2>
              <p>Crispy spring rolls filled with fresh vegetables and served with our signature sweet chili sauce.</p>
            </div>
          </div>

          <div className="dish">
            <div className="image-container">
              <img src="/img/dish-3 1.png" alt="Fish and Veggie special dish" loading="lazy" />
              <span className="price-tag">$12</span>
            </div>
            <div className="dish-content">
              <h2>Fish and Veggie</h2>
              <p>Grilled fish fillet paired with seasonal vegetables, finished with a zesty lemon herb dressing.</p>
            </div>
          </div>

          <div className="dish">
            <div className="image-container">
              <img src="/img/dish-4.png" alt="Tofu Chili special dish" loading="lazy" />
              <span className="price-tag">$12</span>
            </div>
            <div className="dish-content">
              <h2>Tofu Chili</h2>
              <p>Golden tofu cubes tossed in a spicy homemade chili sauce, perfect for spice lovers and vegetarians alike.</p>
            </div>
          </div>

          <div className="dish">
            <div className="image-container">
              <img src="/img/dish-5.png" alt="Egg and Cucumber special dish" loading="lazy" />
              <span className="price-tag">$12</span>
            </div>
            <div className="dish-content">
              <h2>Egg and Comber</h2>
              <p>Fluffy scrambled eggs served with cucumber salad and a touch of dill for a refreshing twist.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Special;
