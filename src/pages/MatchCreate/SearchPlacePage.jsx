import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  PageContainer,
  PageContainerTitle2,
} from "../../components/Common/PageContainer.style";
import { useCurrentLocation } from "../../hooks/useCurrentLocation";
import useDebounce from "../../hooks/useDebounce";
import { useSearchPlaces } from "../../hooks/useSearchPlaces";
import { SearchPlaceList } from "./components/SearchPlaceList";
import { NoSearchValue, SearchInputBox } from "./MatchCreatePage.style";
export const SearchPlacePage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialKeyword = searchParams.get("query") || "";
  const [keyword, setKeyword] = useState(initialKeyword);

  const { latitude: currentLatitude, longitude: currentLongitude } =
    useCurrentLocation();

  console.log(
    "currentLatitude: ",
    currentLatitude,
    "currentLongitude: ",
    currentLongitude
  );

  const { searchPlaces, results, loading, error, setResults } =
    useSearchPlaces();

  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const debouncedNavigate = useDebounce((value) => {
    if (value.trim() === "") {
      navigate("/match/create/search-place");
      setResults([]); // ✅ 검색 결과 초기화
    } else {
      searchPlaces(value);
      navigate(`/match/create/search-place?query=${encodeURIComponent(value)}`);
    }
  }, 500);

  const handleChange = (e) => {
    const value = e.target.value;
    setKeyword(value);
    debouncedNavigate(value);
  };

  // ✅ 최초 마운트 시 쿼리로 검색
  // useEffect(() => {
  //   if (initialKeyword.trim()) {
  //     searchPlaces(initialKeyword);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (keyword.trim()) {
  //     searchPlaces(keyword);
  //     navigate(
  //       `/match/create/search-place?query=${encodeURIComponent(keyword)}`
  //     );
  //   } else {
  //     setResults([]);
  //     navigate("/match/create/search-place");
  //   }
  // }, [keyword]);

  // ✅ 결과값이 바뀔 때마다 콘솔로 확인
  // useEffect(() => {
  //   if (results.length > 0) {
  //     console.log("🟢 디바운스된 API 응답 결과:", results);
  //   }
  // }, [results]);

  return (
    <PageContainer height={"100vh"}>
      <div className="inner">
        <PageContainerTitle2 $margin={"20px 0 16px"}>
          장소검색
        </PageContainerTitle2>
        <SearchInputBox>
          <IoSearch />
          <label htmlFor="searchPlaceInput" className="blind">
            장소 검색어 입력
          </label>
          <input
            id="searchPlaceInput"
            type="text"
            placeholder="장소명으로 검색"
            className="search-place"
            onChange={handleChange}
            value={keyword}
          />
        </SearchInputBox>

        {/* 결과가 없을 때만 보여주기 */}
        {!loading && results.length === 0 && (
          <NoSearchValue>
            <p>구체적인 단어로 장소를 찾아보세요.</p>
            <p>예) 지니 일산점</p>
          </NoSearchValue>
        )}
        {/* 결과 있을 경우 표시할 공간 */}
        {results.length > 0 && (
          <SearchPlaceList
            searchPlaceList={results}
            currentLatitude={currentLatitude}
            currentLongitude={currentLongitude}
            getDistanceFromLatLonInKm={getDistanceFromLatLonInKm}
          />
        )}
      </div>
    </PageContainer>
  );
};
