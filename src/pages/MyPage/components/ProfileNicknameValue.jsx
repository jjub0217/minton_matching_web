import { memo } from "react";
import { useSelector } from "react-redux";

export const ProfileNicknameValue = memo(() => {
  const nickname = useSelector((state) => state.user.formData.nickname);
  console.log("📛 ProfileNicknameValue 렌더링");

  return (
    <>
      <span className="label">닉네임</span>
      <span className="labelValue">{nickname}</span>
    </>
  );
});
