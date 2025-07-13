import styled from "styled-components";

export const VerticalList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap || "16px"};
`;
