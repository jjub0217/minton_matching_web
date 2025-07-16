import styled from "styled-components";

export const PageContainer = styled.div`
  margin: 0 auto;
  background: #18181b;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
  padding: ${(props) => (props.$padding ? props.$padding : "32px 0")};
  height: ${(props) => props.height};
`;

export const PageContainerTitle1 = styled.h1`
  font-size: 24px;
  margin: ${(props) => (props.$margin ? props.$margin : "")};
`;
export const PageContainerTitle2 = styled.h2`
  margin: ${(props) => (props.$margin ? props.$margin : "")};
`;
export const PageContainerTitle3 = styled.h3`
  margin: ${(props) => (props.$margin ? props.$margin : "")};
`;
