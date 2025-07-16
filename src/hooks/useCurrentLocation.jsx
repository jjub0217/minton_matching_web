// hooks/useCurrentLocation.js
import { useEffect, useState } from "react";

export const useCurrentLocation = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    error: null,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation((prev) => ({
        ...prev,
        error: "Geolocation을 지원하지 않는 브라우저입니다.",
      }));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setLocation({ latitude, longitude, error: null });
      },
      () => {
        setLocation((prev) => ({
          ...prev,
          error: "위치 정보를 가져오는 데 실패했습니다.",
        }));
      }
    );
  }, []);

  return location;
};
