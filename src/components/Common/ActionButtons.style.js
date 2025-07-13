import styled from "styled-components";

export const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;

  margin-top: ${(props) => props.$mt || "32px"};
`;
