import styled from "styled-components";

// pages/ParticipantReview/components/selector.style.js
export const ParticipantsSelections = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  label {
    color: #fff;
    border: 1px solid #333;
    background-color: #111;
    padding: 8px 18px;
    font-size: 15px;
    cursor: pointer;
    transition: background 0.2s, border 0.2s;
    margin: 0;
    &.selected {
      background-color: #22c55e; /* 초록색 */
      border-color: #22c55e;
      color: white;
    }
  }
`;
