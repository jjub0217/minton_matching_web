import { useNavigate } from "react-router-dom";
import {
  BookMarkGroup,
  CardBookMark,
  CardDetailBox,
  CardHeader,
  CardImage,
  CardMainInfo,
  CardMainInfoBox,
  DetailItem,
  MatchingCardItem,
} from "./MatchingCard.styles";

// matching-card

export const MatchingCard = ({ card }) => {
  const {
    id,
    title,
    beginner,
    description,
    imgUrl,
    place,
    time,
    currentCapacity,
    capacity,
    grade,
    views,
    likes,
  } = card;

  const navigate = useNavigate();
  const handleDetailPage = (cardId) => {
    navigate(`/detail/${cardId}`);
  };
  return (
    <MatchingCardItem
      key={id}
      className="matching-card"
      onClick={() => handleDetailPage(id)}
    >
      <CardMainInfoBox className="card-content">
        <CardMainInfo className="card-info">
          <CardHeader className="card-header">
            <span className="card-title">{title}</span>
            <span className="level-badge beginner">{grade}</span>
          </CardHeader>
          <p className="card-description">{description}</p>
        </CardMainInfo>
        {imgUrl && (
          <CardImage className="card-image">
            <img src={imgUrl} alt={place} />
          </CardImage>
        )}
      </CardMainInfoBox>
      <CardDetailBox className="card-details">
        <DetailItem $width="150px" className="detail-item">
          <span>📍</span>
          <span className="location">{place}</span>
        </DetailItem>
        <DetailItem $width="150px" className="detail-item">
          <span>🕒</span>
          <span className="time">{time}</span>
        </DetailItem>
        <DetailItem className="detail-item">
          <span>👥</span>
          <p>
            <span>{currentCapacity} / </span>
            <span>{capacity}명</span>
          </p>
        </DetailItem>
        <DetailItem $width="100px" $maxWidth="100px" className="detail-item">
          <span>🏸 급수:</span>
          <span>{grade}</span>
        </DetailItem>
      </CardDetailBox>

      <CardBookMark className="card-bookmark">
        <div className="view-count">
          <span>조회</span>
          <span>{views}</span>
        </div>
        <BookMarkGroup className="bookmark-group">
          <span className="heart">&#9829;</span>
          <span className="bookmark-count">{likes}</span>
        </BookMarkGroup>
      </CardBookMark>
    </MatchingCardItem>
  );
};
