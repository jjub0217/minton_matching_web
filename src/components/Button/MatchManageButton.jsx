import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetForm } from "../../slice/matchFormSlice";
import { ManageButton } from "../Common/Button.styles";
export const MatchManageButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleToManageMatch = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(resetForm());
    navigate("/match/manage");
  };

  return (
    <ManageButton
      type="button"
      onClick={handleToManageMatch}
      title="매칭 관리하기"
    >
      <span>매칭 관리하기</span>
    </ManageButton>
  );
};
