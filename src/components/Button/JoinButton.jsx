import { useState } from "react";
import { LikeButton } from "./Button.styles";

export const JoinButton = () => {
  const [isJoin, setIsJoin] = useState(false);

  const toggleJoin = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsJoin((prev) => !prev);
  };

  return (
    <LikeButton
      type="button"
      onClick={toggleJoin}
      $isJoin={isJoin}
      title="참여하기"
    >
      <span className="heart">참여하기</span>
    </LikeButton>
  );
};
