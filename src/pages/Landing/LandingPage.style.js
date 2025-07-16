import styled from "styled-components";
import { PageContainer as BasePageContainer } from "../../components/Common/PageContainer.style";

export const PageContainer = styled(BasePageContainer)`
  .inner {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 32px;
  }
`;

export const Header = styled.header`
  padding: 41.5px 24px 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 38px;
    margin-bottom: 18px;
    color: #4caf50;
  }

  .app-slogan {
    font-size: 18px;
    color: #bbb;
    margin-bottom: 32px;
  }
  .main-button {
    margin-top: 12px;
    font-size: 20px;
    padding: 16px 48px;
    transition: background 0.2s;
    &:hover,
    &:active {
      background: #388e3c;
    }
  }
`;
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 32px 0 24px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
  strong {
    display: block;
    color: #4caf50;
  }
  span {
    color: #bbb;
    font-size: 15px;
  }
`;
export const Footer = styled.footer`
  color: #888;
  font-size: 13px;
  text-align: center;
`;
