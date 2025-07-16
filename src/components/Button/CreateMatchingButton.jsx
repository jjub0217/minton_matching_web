import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CreateMatchButton } from "../Common/Button.styles";
export const CreateMatchingButton = () => {
  const navigate = useNavigate();
  const toggleMatchCreate = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/match/create`);
  };

  return (
    <CreateMatchButton
      type="button"
      onClick={toggleMatchCreate}
      title="매칭 생성하기"
    >
      <FaPlus />
      <span>매칭 생성하기</span>
    </CreateMatchButton>
  );
};
