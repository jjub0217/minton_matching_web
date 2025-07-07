import { useState } from "react";
import { NeighborhoodsContainer } from "./NeighborhoodSelector.styles";

export const NeighborhoodSelector = () => {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState("강남구");

  // 서버에서 받아올 예정인 동네 리스트
  const neighborhoods = ["강남구", "송파구"];

  const handleActive = (name) => {
    console.log(name);
    setSelectedNeighborhood(name);
  };
  return (
    <NeighborhoodsContainer className="my-neighborhoods">
      {neighborhoods.map((el) => (
        <button
          key={el}
          type="button"
          className={`neighborhood-badge ${
            selectedNeighborhood === el ? "active" : ""
          }`}
          onClick={() => handleActive(el)}
        >
          {el}
        </button>
      ))}
      <button type="button" className="neighborhood-btn">
        내 동네 설정
      </button>
    </NeighborhoodsContainer>
  );
};
