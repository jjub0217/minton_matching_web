import { useNavigate } from "react-router-dom";
import { CancelBtn } from "../Common/Button.styles";

export const CancelButton = () => {
  const navigate = useNavigate();
  const handleCancel = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(-1);
  };

  return (
    <CancelBtn type="button" onClick={handleCancel} title="취소">
      <span>취소</span>
    </CancelBtn>
  );
};
