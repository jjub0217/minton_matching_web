import styled from "styled-components";

export const PageContainer = styled.div`
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 640px) {
    padding: 15px;
  }
`;
export const MatchingListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
