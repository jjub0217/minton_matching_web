// src/pages/MyPage/components/LocationSection.jsx
import { nanoid } from "@reduxjs/toolkit";
import { memo, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormField } from "../../../components/FormField/FormField";
import { addLocation, deleteLocation } from "../../../slice/userSlice";
import {
  LocationBox,
  LocationList,
  MyPageButton,
  ProfileInfo,
} from "../myPage.style";
import { LocationItem } from "./LocationItem";

export const LocationSection = memo(() => {
  console.log("📍 LocationSection 렌더링");
  const dispatch = useDispatch();
  const location = useSelector((state) => state.user.formData.location);
  const [locationInput, setLocationInput] = useState("");
  const handleLocationInputChange = useCallback((e) => {
    setLocationInput(e.target.value);
  }, []);

  const handleDelete = useCallback(
    (id) => {
      dispatch(deleteLocation(id));
    },
    [dispatch]
  );

  const handleAddLocation = useCallback(() => {
    const trimmed = locationInput.trim();
    if (
      !trimmed ||
      location.length >= 2 ||
      location.some((l) => l.name === trimmed)
    )
      return;

    dispatch(addLocation({ id: nanoid(), name: trimmed }));
    setLocationInput("");
  }, [locationInput, location, dispatch]);

  return (
    <FormField label="위치" type="custom" page="mypage">
      <LocationBox>
        <LocationList>
          {location.map((loc) => (
            <LocationItem
              key={loc.id}
              el={loc.name}
              id={loc.id}
              onDelete={handleDelete}
            />
          ))}
        </LocationList>

        {location.length < 2 && (
          <ProfileInfo>
            <input
              type="text"
              className="input-text"
              placeholder="구 입력"
              value={locationInput}
              onChange={handleLocationInputChange}
            />
            <MyPageButton className="location" onClick={handleAddLocation}>
              추가
            </MyPageButton>
          </ProfileInfo>
        )}

        <p className="location-guide">
          <span>({location.length} / 2)</span>
          <span> 최대 2개까지 선택할 수 있습니다.</span>
        </p>
      </LocationBox>
    </FormField>
  );
});
