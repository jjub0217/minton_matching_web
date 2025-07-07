import { useNavigate } from "react-router-dom";
import {
  Badge,
  ParticipantImage,
  ParticipantMember,
} from "./Participant.styles";

export const ParticipantMemberItem = ({ id, userName, role, profileImg }) => {
  const navigate = useNavigate();

  const handleUserProfile = (userId) => {
    navigate(`/userInfo/${userId}`);
  };
  return (
    <ParticipantMember onClick={() => handleUserProfile(id)}>
      <ParticipantImage>
        <img src={profileImg} alt={role} />
      </ParticipantImage>
      <span className="participant-id">{userName}</span>
      <Badge role={role}>{role}</Badge>
    </ParticipantMember>
  );
};
