import styled from "styled-components";

// matching-card
const MatchingCardItem = styled.li`
  background-color: #18181b;
  border: 3px solid #111;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  min-height: 160px;

  &:hover {
    border-color: #15803d;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  @media (max-width: 640px) {
    display: flex;
    gap: 20px;
    align-items: flex-start;
    min-width: 0;
  }
`;

// card-content
const CardMainInfoBox = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  height: 100%;
  min-width: 0;
  color: #f3f4f6;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 15px;
  }
`;

// card-info
const CardMainInfo = styled.div`
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
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
    font-size: 14px;
    color: #d1d5db;
    line-height: 1.5;
    height: 42px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    margin-bottom: 10px;
  }
`;

// card-header
const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 0;
  margin-bottom: 10px;
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
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
  }
`;

// card-image
const CardImage = styled.div`
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
    width: 100%;
    height: 120px;
    order: -1;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

// card-details
const CardDetailBox = styled.div`
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
const DetailItem = styled.div`
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
    font-size: 13px;
    max-width: 100%;
  }
  @media (max-width: 400px) {
    font-size: 11px;
    max-width: 70px;
  }

  .location {
    min-width: 80px;
    max-width: 140px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const CardBookMark = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  color: #9ca3af;
  user-select: none;
`;

const ViewCount = styled.span`
  color: #9ca3af;
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const BookMarkGroup = styled.span`
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

export const MatchingCard = ({ card }) => {
  const {
    id,
    title,
    beginner,
    description,
    imgUrl,
    detailLocation,
    detailTime,
    detailCurrentCapacity,
    detailCapacity,
    detailGrade,
    viewCount,
    bookmarkCount,
  } = card;

  return (
    <MatchingCardItem key={id} className="matching-card">
      <CardMainInfoBox className="card-content">
        <CardMainInfo className="card-info">
          <CardHeader className="card-header">
            <span className="card-title">{title}</span>
            <span className="level-badge beginner">{beginner}</span>
          </CardHeader>
          <p className="card-description">{description}</p>
        </CardMainInfo>
        {imgUrl && (
          <CardImage className="card-image">
            <img src={imgUrl} alt={detailLocation} />
          </CardImage>
        )}
      </CardMainInfoBox>
      <CardDetailBox className="card-details">
        <DetailItem $width="150px" className="detail-item">
          <span>📍</span>
          <span className="location">{detailLocation}</span>
        </DetailItem>
        <DetailItem $width="150px" className="detail-item">
          <span>🕒</span>
          <span className="time">{detailTime}</span>
        </DetailItem>
        <DetailItem className="detail-item">
          <span>👥</span>
          <p>
            <span>{detailCurrentCapacity} /</span>
            <span>{detailCapacity}명</span>
          </p>
        </DetailItem>
        <DetailItem $width="100px" $maxWidth="100px" className="detail-item">
          <span>🏸 급수:</span>
          <span>{detailGrade}</span>
        </DetailItem>
      </CardDetailBox>

      <CardBookMark className="card-bookmark">
        <ViewCount className="view-count">
          <span>조회</span>
          <span>{viewCount}</span>
        </ViewCount>
        <BookMarkGroup className="bookmark-group">
          <span className="heart">&#9829;</span>
          <span className="bookmark-count">{bookmarkCount}</span>
        </BookMarkGroup>
      </CardBookMark>
    </MatchingCardItem>
  );
};
