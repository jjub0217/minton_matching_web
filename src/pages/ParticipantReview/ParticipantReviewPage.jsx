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
import { FormField } from "../../components/FormField/FormField";
import { StarRatingField } from "../../components/FormField/StarRatingField";
import { TextField } from "../../components/FormField/TextField";
import { resetForm } from "../../slice/memberReviewFormSlice";
import { store } from "../../store/store"; // 직접 접근용
import { GoodPointSelector } from "./components/GoodPointSelector";
import { ParticipantSelector } from "./components/ParticipantSelector";

export const ParticipantReviewPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const state = store.getState().memberReviewForm;
    console.log("🧾 제출할 ParticipantReviewForm 상태:", state);

    // 3. 나중에 서버 전송할 때 쓸 수 있는 구조 예시 (axios는 나중에)
    /*
  const formDataToSend = new FormData();
  formDataToSend.append("reviewRating", reviewRating);
  formDataToSend.append("review", review);
  photoFiles.forEach((file) => formDataToSend.append("photos", file));

  axios.post("/api/reviews", formDataToSend);
  */
    dispatch(resetForm()); // Redux 값 초기화
    navigate(`/detail/${id}`);
  };

  return (
    <PageContainer height={"100vh"}>
      <div className="inner">
        <PageContainerTitle2 $margin={"20px 0 24px"}>
          참가자 리뷰
        </PageContainerTitle2>
        <Form onSubmit={handleSubmit}>
          <fieldset>
            <legend className="blind">리뷰 대상 참여자 선택</legend>
            <FormField
              label="참여자 선택"
              id={"selectedParticipantMember"}
              type="custom"
              name={"selectedParticipantMember"}
            >
              <ParticipantSelector />
            </FormField>
          </fieldset>

          <StarRatingField
            label="별점"
            id="participantReviewRating"
            type="custom"
          />
          <TextField
            label="상세 후기"
            placeholder="모임에 대한 후기를 작성해 주세요."
            id="participantReview"
            type="textarea"
            page="participantReview"
          />
          <fieldset>
            <legend className="blind">좋았던 점</legend>
            <FormField
              label="좋았던 점 (복수 선택)"
              id={"selectedReviewPoint"}
              type="custom"
              name={"selectedReviewPoint"}
            >
              <GoodPointSelector />
            </FormField>
          </fieldset>
          <ActionButtons>
            <SaveButton page={"review"} />
            <CancelButton />
          </ActionButtons>
        </Form>
      </div>
    </PageContainer>
  );
};
