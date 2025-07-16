import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { CancelButton } from "../../components/Button/CancelButton";
import { SaveButton } from "../../components/Button/SaveButton";
import { ActionButtons } from "../../components/Common/ActionButtons.style";
import { Form } from "../../components/Common/Form.style";
import {
  PageContainer,
  PageContainerTitle2,
} from "../../components/Common/PageContainer.style";
import { PhotoUploadField } from "../../components/FormField/PhotoUploadField";
import { StarRatingField } from "../../components/FormField/StarRatingField";
import { TextField } from "../../components/FormField/TextField";
import { store } from "../../store/store";
export const MatchReviewPage = () => {
  console.log("MatchReviewPage 렌더링");
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const state = store.getState().reviewForm;
    console.log("🧾 제출할 reviewForm 상태:", state);

    navigate(`/participant-review/${id}`);
    // 3. 나중에 서버 전송할 때 쓸 수 있는 구조 예시 (axios는 나중에)
    /*
  const formDataToSend = new FormData();
  formDataToSend.append("reviewRating", reviewRating);
  formDataToSend.append("review", review);
  photoFiles.forEach((file) => formDataToSend.append("photos", file));

  axios.post("/api/reviews", formDataToSend);
  */
  }, []);

  return (
    <PageContainer height={"100vh"}>
      <div className="inner">
        <PageContainerTitle2 $margin={"20px 0 24px"}>
          모임 리뷰
        </PageContainerTitle2>
        <Form onSubmit={handleSubmit}>
          <StarRatingField label="별점" id="reviewRating" type="custom" />
          <TextField
            label="상세 후기"
            placeholder="모임에 대한 후기를 작성해 주세요."
            id="review"
            type="textarea"
            page="review"
          />
          <PhotoUploadField
            label="사진 등록 (최대 3장)"
            id="photo"
            page="review"
          />
          <ActionButtons>
            <SaveButton page={"review"} />
            <CancelButton />
          </ActionButtons>
        </Form>
      </div>
    </PageContainer>
  );
};
