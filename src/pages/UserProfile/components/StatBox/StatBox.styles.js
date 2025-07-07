import styled from "styled-components";

// stat-box
export const State = styled.div`
  background: #222;
  border-radius: 10px;
  padding: 12px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 90px;
  .stat-label {
    font-size: 13px;
    color: #a1a1aa;
    margin-bottom: 4px;
  }
  .stat-value {
    font-size: 20px;
    font-weight: 700;
    color: #fbbf24;
  }
`;
