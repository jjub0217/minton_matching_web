import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// participant
const Participant = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  min-width: 64px;
  cursor: pointer;

  .participant-id {
    font-size: 13px;
    color: #f3f4f6;
    margin-top: 2px;
    max-width: 55px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

// participant-img
const ParticipantImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #222;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Badge = styled.span`
  color: #18181b;
  font-size: 12px;
  border-radius: 8px;
  padding: 2px 8px;
  margin-top: 2px;
  font-weight: 500;
  background-color: ${(props) => {
    switch (props.role) {
      case "주최":
        return "#60a5fa";
      case "참여":
        return "#34d399";
      case "대기":
        return "#facc15";
      default:
        return "#d4d4d8";
    }
  }};
`;

export const ParticipantItem = ({ id, userName, role, profileImg }) => {
  const navigate = useNavigate();

  const handleUserProfile = (userId) => {
    navigate(`/userInfo/${userId}`);
  };
  return (
    <Participant onClick={() => handleUserProfile(id)}>
      <ParticipantImage>
        <img src={profileImg} alt={role} />
      </ParticipantImage>
      <span className="participant-id">{userName}</span>
      <Badge role={role}>{role}</Badge>
    </Participant>
  );
};
