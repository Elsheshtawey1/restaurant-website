import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import TestimonialCard from "../TestimonialCard";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Container from "../Container";

const testimonialsData = [
  {
    id: 1,
    imageSrc: "/img/person-1.png",
    name: "Ama Amah",
    title: "CEO & Founder Inc",
    stars: 5,
    text: "The food was absolutely delicious and the staff made us feel right at home. We'll definitely be coming back!",
  },
  {
    id: 2,
    imageSrc: "/img/person-1.png",
    name: "Weka Adjei",
    title: "Marketing Manager",
    stars: 4.5,
    text: "A wonderful dining experience from start to finish. The chef's specials are a must-try!",
  },
  {
    id: 3,
    imageSrc: "/img/person-1.png",
    name: "Yaw Mensah",
    title: "Lead Developer",
    stars: 5,
    text: "Fresh ingredients, creative dishes, and a cozy atmosphere. Highly recommended for food lovers.",
  },
  {
    id: 4,
    imageSrc: "/img/person-1.png",
    name: "Abena Boateng",
    title: "Product Designer",
    stars: 4,
    text: "The service was attentive and the menu had something for everyone. Loved the desserts!",
  },
];

const HappyCustomersSection = () => {
  return (
    <section className="happy-customers-section">
      <Container>
        <div className="background-food-sketch">
          <img src="/img/Group.svg" alt="back sketch" />
        </div>
        <div className="section-header-customers">
          <h2>Our Happy Customers</h2>
          <p>See what our guests are saying about their dining experience with us.</p>
        </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 50,
              centeredSlides: true,
            },
          }}
          className="testimonials-swiper"
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard imageSrc={testimonial.imageSrc} name={testimonial.name} title={testimonial.title} stars={testimonial.stars} text={testimonial.text} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default HappyCustomersSection;
