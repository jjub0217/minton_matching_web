import styled from "styled-components";
import { PageContainer as BasePageContainer } from "../../components/Common/PageContainer.style";

export const PageContainer = styled(BasePageContainer)`
  .inner {
    padding-top: 32px;
    padding-bottom: 32px;
    height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 640px) {
      padding: 15px;
    }
  }
`;
export const Nav = styled.nav`
  padding-bottom: 30px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;

export const BarIcon = styled.button`
  background: transparent;
  align-self: flex-end;
  text-align: right;

  cursor: pointer;
  svg {
    fill: #fff;
  }
`;

export const MatchingListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  overflow: scroll;
`;
