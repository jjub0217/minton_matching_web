import { useState } from "react";
import { ParticipantButton } from "../Common/Button.styles";

export const JoinButton = () => {
  const [isJoin, setIsJoin] = useState(false);

  const toggleJoin = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsJoin((prev) => !prev);
  };

  return (
    <ParticipantButton type="button" onClick={toggleJoin} title="참여하기">
      <span>참여하기</span>
    </ParticipantButton>
  );
};
