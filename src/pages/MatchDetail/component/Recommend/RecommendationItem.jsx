import {
  RecommendCard,
  RecommendCardImage,
  RecommendCardInfo,
} from "./RecommendationList.styles";

export const RecommendationItem = ({ title, image, location }, ref) => {
  return (
    <RecommendCard role="group">
      <RecommendCardImage>
        <img src={image} alt={`${title} 대표 이미지`} />
      </RecommendCardImage>

      <RecommendCardInfo>
        <h3 className="recommend-title-text">{title}</h3>
        <p className="recommend-town">{location}</p>
      </RecommendCardInfo>
    </RecommendCard>
  );
};
