import { SaveBtn } from "../Common/Button.styles";

export const SaveButton = ({ page }) => {
  return (
    <SaveBtn type="submit" title="저장">
      {page === "matchCreate" || page === "mypage" ? (
        <span>저장</span>
      ) : page === "review" ? (
        <span>리뷰 저장</span>
      ) : (
        <span>변경사항 저장</span>
      )}
    </SaveBtn>
  );
};
