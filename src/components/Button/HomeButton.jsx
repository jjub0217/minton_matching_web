import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetForm } from "../../slice/matchFormSlice";
import { MainButton } from "../Common/Button.styles";
export const HomeButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGoHome = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(resetForm());
    navigate("/main");
  };

  return (
    <MainButton type="button" onClick={handleGoHome} title="홈으로 이동">
      <span>홈으로 이동</span>
    </MainButton>
  );
};
