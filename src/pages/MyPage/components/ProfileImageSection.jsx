import { memo } from "react";
import { useSelector } from "react-redux";
import { ProfileImage } from "../../../components/Common/ProfileImage.style";
import { PhotoUploadField } from "../../../components/FormField/PhotoUploadField";
import { ProfileImageBox } from "../myPage.style";
export const ProfileImageSection = memo(() => {
  const imgUrl = useSelector((state) => state.user.formData.imgUrl);
  console.log("ProfileImageSection 렌더링");
  return (
    <>
      <ProfileImageBox>
        <ProfileImage size={"80px"} className="box">
          <img src={imgUrl} alt="프로필 이미지" />
        </ProfileImage>
        <PhotoUploadField label="이미지 변경" id="profileImage" />
      </ProfileImageBox>
    </>
  );
});
