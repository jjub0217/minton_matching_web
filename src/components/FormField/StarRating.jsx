import { useState } from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { RatingIcon, StarRatingBox } from "../Common/FormField.style";

export const StarRating = ({ value = 0, onChange }) => {
  const [hoverValue, setHoverValue] = useState(null);
  const displayValue = hoverValue !== null ? hoverValue : value;

  const handleMouseMove = (e, index) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const isHalf = x < width / 2;
    const hoverVal = isHalf ? index + 0.5 : index + 1;
    setHoverValue(hoverVal);
  };

  const handleMouseLeave = () => {
    setHoverValue(null);
  };

  const handleClick = (e, index) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const selectedRating = x < width / 2 ? index + 0.5 : index + 1;
    onChange?.(selectedRating);
    setHoverValue(null);
  };

  const getStarIcon = (value, index) => {
    if (value >= index + 1) return <FaStar />;
    if (value >= index + 0.5) return <FaStarHalfAlt />;
    return <FaRegStar />;
  };
  const STAR_INDEXES = Array.from({ length: 5 }, (_, i) => i);

  return (
    <StarRatingBox aria-label={`별점 ${displayValue}점`} role="radiogroup">
      {STAR_INDEXES.map((i) => (
        <RatingIcon
          key={i}
          onMouseMove={(e) => handleMouseMove(e, i)}
          onMouseLeave={handleMouseLeave}
          onClick={(e) => handleClick(e, i)}
          role="radio"
          aria-checked={displayValue >= i + 1}
        >
          {getStarIcon(displayValue, i)}
        </RatingIcon>
      ))}
    </StarRatingBox>
  );
};
