import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating, totalStars = 5 }) => {
  const stars = [];
  for (let i = 1; i <= totalStars; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={`star-full-${i}`} className="star" />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<FaStarHalfAlt key={`star-half-${i}`} className="star" />);
    } else {
      stars.push(<FaRegStar key={`star-empty-${i}`} className="star" />);
    }
  }
  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
