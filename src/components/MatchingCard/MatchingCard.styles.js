import styled from "styled-components";

export const MatchingCardItem = styled.li`
  background-color: #18181b;
  border: 3px solid #111;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  min-height: 160px;
  cursor: pointer;

  &:hover {
    border-color: #15803d;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`;

// card-content
export const CardMainInfoBox = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  height: 100%;
  min-width: 0;
  color: #f3f4f6;

  @media (max-width: 640px) {
    gap: 15px;
  }
`;

// card-info
export const CardMainInfo = styled.div`
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
  overflow: hidden;
  margin-bottom: 18px;

  @media (max-width: 640px) {
    .card-description {
      height: auto;
    }
    .card-description {
      height: auto;
    }
  }
  .card-description {
    font-size: 16px;
    color: #d1d5db;
    line-height: 1.5;
    height: 42px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
`;

// card-header
export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  align-items: flex-start;
  min-width: 0;
  @media (max-width: 640px) {
    .card-title {
      margin-right: 0;
    }
  }
  .card-title {
    font-size: 18px;
    font-weight: 600;
    color: #f3f4f6;
    flex: 1;
    margin-right: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .level-badge {
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap;
    flex-shrink: 0;
    background-color: #222;
    color: #60a5fa;
    margin-bottom: 8px;
  }
`;

// card-image
export const CardImage = styled.div`
  flex-shrink: 0;
  width: 120px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #222;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 640px) {
    width: 30%;
    height: 120px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

// card-details
export const CardDetailBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  margin-top: auto;
  overflow: hidden;
  max-width: 100%;
  margin-bottom: 0;

  @media (min-width: 768px) {
    gap: 30px;
  }
  @media (max-width: 640px) {
    flex-wrap: wrap;
    gap: 12px;
  }
  @media (max-width: 400px) {
    gap: 8px;
  }
`;

// detail-item
export const DetailItem = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #f3f4f6;
  min-width: 0;
  flex-shrink: 1;

  display: flex;
  align-items: center;
  gap: 5px;

  width: ${(props) => props.$width || "120px"};
  max-width: ${(props) => props.$maxWidth};

  @media (max-width: 640px) {
    font-size: 14px;
    width: auto;
  }

  .location {
    min-width: 80px;
    max-width: 140px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    @media (max-width: 640px) {
      max-width: 110px;
    }
  }
`;

export const CardBookMark = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  color: #9ca3af;
  user-select: none;
`;

export const ViewCount = styled.span`
  color: #9ca3af;
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const BookMarkGroup = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  .heart {
    font-size: 18px;
  }
  .bookmark-count {
    font-size: 15px;
    font-weight: 500;
  }
`;
