import { useNavigate } from "react-router-dom";
import { StatusBadge } from "../../../../components/Common/StatusBadge.style";
import {
  ParticipantImage,
  ParticipantMember,
} from "./ParticipantsContainer.styles";

export const ParticipantMemberItem = ({ id, userName, role, profileImg }) => {
  const navigate = useNavigate();

  const handleUserProfile = (userId) => {
    navigate(`/userInfo/${userId}`);
  };
  return (
    <ParticipantMember>
      <button
        type="button"
        onClick={() => handleUserProfile(id)}
        aria-label={`${userName}님의 프로필 보기`}
      >
        <ParticipantImage>
          <img src={profileImg} alt={userName} />
        </ParticipantImage>
        <span className="participant-id">{userName}</span>
        <StatusBadge
          $status={role}
          $textColor={"#18181b"}
          $padding={"2px 8px"}
          $radius={"8px"}
          aria-label={`역할: ${role}`}
        >
          {role}
        </StatusBadge>
      </button>
    </ParticipantMember>
  );
};
