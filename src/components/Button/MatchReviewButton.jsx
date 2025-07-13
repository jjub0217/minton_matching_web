import { useNavigate, useParams } from "react-router-dom";
import { ReviewButton } from "../Common/Button.styles";

export const MatchReviewButton = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const toggleJoin = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/${id}/review`);
  };

  return (
    <ReviewButton type="button" onClick={toggleJoin} title="모임 리뷰하기">
      <span className="heart">모임 리뷰하기</span>
    </ReviewButton>
  );
};
