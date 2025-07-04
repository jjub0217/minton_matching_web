import { useState } from "react";
import styled from "styled-components";

// my-neighborhoods
const NeighborhoodsContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
  align-items: center;

  .neighborhood-badge,
  .neighborhood-btn {
    color: #60a5fa;
    font-weight: 500;
    font-size: 15px;
    cursor: pointer;
  }

  .neighborhood-badge {
    background: #222;
    padding: 6px 16px;
    border-radius: 16px;
    opacity: 0.7;
    transition: background 0.2s, color 0.2s, opacity 0.2s;
    &.active {
      background: #60a5fa;
      color: #18181b;
      opacity: 1;
    }
  }
  .neighborhood-btn {
    background: transparent;
    padding: 4px 8px;
    border-radius: 8px;
    margin-left: 10px;
    transition: background 0.2s, color 0.2s;
    &:hover {
      background: #222;
      color: #93c5fd;
    }
  }
`;

export const MyNeighborhoods = () => {
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
