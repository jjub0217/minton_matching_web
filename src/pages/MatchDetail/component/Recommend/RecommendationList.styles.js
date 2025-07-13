import styled from "styled-components";

export const Section = styled.section`
  margin-top: 40px;
  padding-left: 24px;
  .recommend-title {
    color: #f8fafc;
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 14px;
    margin-left: 8px;
  }

  .swiper .swiper-button-next,
  .swiper .swiper-button-prev {
    display: none;
  }
  .swiper-slide.more-button {
    width: auto !important;
    margin-right: 0 !important;
  }
`;

// recommend-card
export const RecommendCard = styled.div`
  background: #23272f;
  border-radius: 14px;
  /* min-width: 120px;
  max-width: 120px; */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 10px 10px 10px;
  flex-shrink: 0;
`;
export const RecommendCardImage = styled.div`
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
export const RecommendCardInfo = styled.div`
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
export const MoreSlideButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 162.5px;
`;

export const MoreSlideButton = styled.button`
  justify-content: center;
  width: 100px;
  height: 100px;
  font-size: 15px;
  font-weight: 600;
  color: #f1f5f9;
  background: #23272f;
  cursor: pointer;
  border-radius: 50%;
  text-align: center;
  transition: background 0.2s;

  &:hover {
    background: #334155;
  }
`;
