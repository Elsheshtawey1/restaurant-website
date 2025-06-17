import StarRating from "./StarRating";

const TestimonialCard = ({ imageSrc, name, title, stars, text }) => {
  return (
    <div className="testimonial-card">
      <img src={imageSrc} alt={`Photo of customer ${name}`} className="customer-image" loading="lazy" />
      <StarRating rating={stars} />
      <p className="testimonial-text">{text}</p>
      <div className="customer-info">
        <p className="customer-name">{name}</p>
        <p className="customer-title">{title}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
