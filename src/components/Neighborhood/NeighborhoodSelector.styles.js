import styled from "styled-components";

// my-neighborhoods
export const NeighborhoodsContainer = styled.div`
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
