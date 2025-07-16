import { FaArrowLeft } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { ActionBtn } from "../Common/Button.styles";
const actionConfig = {
  backArrow: {
    icon: <FaArrowLeft />,
    className: "arrow-back",
  },
  more: {
    icon: <IoIosMore />,
    className: "more-btn",
  },
};

export const ActionButton = ({ title, iconType }) => {
  const config = actionConfig[iconType];
  const navigate = useNavigate();

  const handleToPage = () => {
    if (config.className === "arrow-back") {
      navigate(-1);
    } else {
      console.log("더보기로 이동");
    }
  };

  return (
    <ActionBtn
      type="button"
      title={title}
      className={config.className}
      onClick={handleToPage}
    >
      {config.icon}
    </ActionBtn>
  );
};
