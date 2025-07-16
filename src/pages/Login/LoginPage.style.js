import { styled } from "styled-components";

import { PageContainer as BasePageContainer } from "../../components/Common/PageContainer.style";

export const PageContainer = styled(BasePageContainer)`
  .inner {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h2 {
    padding: 41.5px 24px 32px 24px;
  }
  p {
    font-size: 15px;
    color: #a1a1aa;
    margin-bottom: 32px;
  }
`;

export const Buttons = styled.div``;
