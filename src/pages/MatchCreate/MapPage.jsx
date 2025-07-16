// src/pages/MatchCreate/MapPage.jsx

import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { updateField } from "../../slice/matchFormSlice";
export const MapPage = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const lat = parseFloat(params.get("lat"));
  const lon = parseFloat(params.get("lon"));
  const title = params.get("title");

  const selectedPlace = useMemo(
    () => ({
      title,
      mapx: lon * 1e7,
      mapy: lat * 1e7,
    }),
    [lat, lon, title]
  );

  useEffect(() => {
    const existingScript = document.getElementById("naver-map-script");

    // 이미 로딩된 경우 생략
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "naver-map-script";
      script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${
        import.meta.env.VITE_NAVER_MAP_KEY_ID
      }`;
      script.defer = true;
      document.head.appendChild(script);

      script.onload = () => {
        loadMap();
      };
    } else {
      loadMap();
    }

    function loadMap() {
      if (!selectedPlace) return;

      const lat = Number(selectedPlace.mapy) / 1e7;
      const lon = Number(selectedPlace.mapx) / 1e7;

      const map = new window.naver.maps.Map("map", {
        center: new window.naver.maps.LatLng(lat, lon),
        zoom: 16,
      });

      new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(lat, lon),
        map,
        title: selectedPlace.title,
      });
    }
  }, [selectedPlace]);

  const handleSelectPlace = () => {
    dispatch(updateField({ name: "place", value: title }));
    navigate(`/match/create`);
  };

  return (
    <>
      <div
        id="map"
        role="region"
        aria-label="선택한 장소의 위치를 보여주는 지도"
        style={{ width: "100%", height: "300px", marginTop: "24px" }}
      />
      <button type="button" onClick={handleSelectPlace}>
        선택완료
      </button>
    </>
  );
};
