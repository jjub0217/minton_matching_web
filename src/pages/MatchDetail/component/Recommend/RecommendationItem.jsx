import {
  RecommendCard,
  RecommendCardImage,
  RecommendCardInfo,
} from "./Recommendations.styles";

export const RecommendationItem = ({ title, image, location }, ref) => {
  return (
    <RecommendCard ref={ref}>
      <RecommendCardImage>
        <img src={image} alt={title} />
      </RecommendCardImage>

      <RecommendCardInfo>
        <h3 className="recommend-title-text">{title}</h3>
        <div className="recommend-town">{location}</div>
      </RecommendCardInfo>
    </RecommendCard>
  );
};
