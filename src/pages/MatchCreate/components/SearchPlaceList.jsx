import { BsDot } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { SearchItem, SearchList } from "../MatchCreatePage.style";

export const SearchPlaceList = ({
  searchPlaceList,
  currentLatitude,
  currentLongitude,
  getDistanceFromLatLonInKm,
}) => {
  const navigate = useNavigate();
  const handleMap = (title, placeLat, placeLon) => {
    navigate(
      `/match/create/map?title=${encodeURIComponent(
        title
      )}&lat=${placeLat}&lon=${placeLon}`
    );
  };
  return (
    <SearchList>
      {searchPlaceList.map((place, i) => {
        const detailCategory = place.category.split(">")[1];
        const title = place.title.replace(/<[^>]*>?/g, "");
        const placeLat = Number(place.mapy) / 1e7;
        const placeLon = Number(place.mapx) / 1e7;

        // 현재 위치가 존재할 때만 거리 계산
        const distance =
          currentLatitude && currentLongitude
            ? getDistanceFromLatLonInKm(
                currentLatitude,
                currentLongitude,
                placeLat,
                placeLon
              )
            : null;

        return (
          <SearchItem
            key={place.mapx + place.mapy}
            onClick={() => handleMap(title, placeLat, placeLon)}
          >
            <button type="button">
              <p className="place-title-box">
                <strong className="place-title">{title}</strong>
                <span className="place-category">{detailCategory}</span>
                <BsDot />
                <span className="place-distance">{distance.toFixed(2)}km</span>
              </p>
              <p className="place-address">{place.roadAddress}</p>
            </button>
          </SearchItem>
        );
      })}
    </SearchList>
  );
};
