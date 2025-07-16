import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { setPhotos } from "../../slice/reviewFormSlice";
import { updateProfileImage } from "../../slice/userSlice";
import {
  PhotoUploadBox,
  PhotoUploadList,
  PlusIcon,
} from "../Common/FormField.style";
import { FormField } from "./FormField";
export const PhotoUploadField = memo(({ label, id, page }) => {
  console.log("PhotoUploadField 렌더링");

  const dispatch = useDispatch();
  const [previewImages, setPreviewImages] = useState([]);

  const handleImageChangeFromReview = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) {
      console.warn("파일이 없습니다.");
      return;
    }

    const imageUrls = files.map((file) => {
      const url = URL.createObjectURL(file);
      console.log("📷 미리보기 URL:", url);
      return url;
    });

    const updated = [...previewImages, ...imageUrls];
    setPreviewImages((prev) => [...prev, ...imageUrls]);
    dispatch(setPhotos(updated));
  };

  const handleImageChangeFromMyPage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      dispatch(updateProfileImage(reader.result)); // base64로 저장
    };

    reader.readAsDataURL(file);
  };
  return (
    <FormField label={label} id={id} type="custom">
      <PhotoUploadBox>
        <input
          type="file"
          id={id}
          className="photo-upload-input"
          accept="image/*"
          multiple
          onChange={
            page === "review"
              ? handleImageChangeFromReview
              : handleImageChangeFromMyPage
          }
          style={{ display: "none" }}
          aria-label={
            page === "review" ? "리뷰 사진 업로드" : "프로필 사진 업로드"
          }
        />
        {page === "review" && (
          <>
            <label htmlFor={id}>
              <PlusIcon />
              <span className="photo-upload-text">사진 추가</span>
            </label>
            <PhotoUploadList aria-label="업로드한 이미지 목록">
              {previewImages.map((src, i) => (
                <li key={i}>
                  <img src={src} alt={`미리보기 이미지 ${i + 1}`} />
                </li>
              ))}
            </PhotoUploadList>
            <div aria-live="polite" className="blind">
              {previewImages.length}개의 이미지가 추가되었습니다.
            </div>
          </>
        )}
      </PhotoUploadBox>
    </FormField>
  );
});
