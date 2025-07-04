import { styled } from "styled-components";

// recommend-card
const RecommendCard = styled.div`
  background: #23272f;
  border-radius: 14px;
  min-width: 140px;
  max-width: 140px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 10px 10px 10px;
  flex-shrink: 0;
`;
const RecommendCardImage = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 10px;
  margin-bottom: 8px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const RecommendCardInfo = styled.div`
  width: 100%;
  text-align: left;
  .recommend-title-text {
    color: #f1f5f9;
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .recommend-town {
    color: #94a3b8;
    font-size: 13px;
  }
`;

export const RecommendationItem = ({ title, image, location }) => {
  return (
    <RecommendCard>
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
