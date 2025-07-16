import { styled } from "styled-components";
import { PageContainer as BasePageContainer } from "../../components/Common/PageContainer.style";
// pages/MatchCreate/MatchCreatePage.style.js

export const PageContainer = styled(BasePageContainer)`
  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .completion-message {
    font-size: 16px;
    color: #bbb;
    margin: 0px 0 32px;
    line-height: 1.5;
  }
`;
export const CheckIcon = styled.div`
  width: 80px;
  height: 80px;
  background: #4caf50;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: #fff;
  margin: 0 auto 24px;
`;

export const SummaryMatchSection = styled.section`
  background: #111;
  /* background: #111; */
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 30px;
  width: 100%;

  .match-title {
    margin: 16px 0;
  }
`;

export const MatchSummaryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px 0 0;
`;
export const MatchSummaryItem = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #333;
  padding-bottom: 8px;
  font-size: 14px;
  &:last-child {
    border-bottom: none;
  }
  .label {
    color: #bbb;
  }
  .value {
    color: #fff;
    font-weight: bold;
  }
`;

export const PageActions = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
  width: 100%;
`;

export const MatchAdditionalInfo = styled.aside`
  text-align: left;
  width: 100%;
  color: #bbb;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

export const SearchInputBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  background: #232323;
  color: #fff;
  border: 1px solid #444;
  border-radius: 6px;
  padding: 8px 10px;
  font-size: 15px;
  .search-place {
    background: #232323;
    border: 0;
    font-size: 15px;
    width: 100%;
    color: #fff;
  }
`;

export const NoSearchValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  gap: 10px;
`;

export const SearchList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 23px;
  margin: 23px 0;
`;

export const SearchItem = styled.li`
  button {
    cursor: pointer;
    width: 100%;
    color: #fff;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
  .place-title-box {
    display: flex;
    align-items: center;
  }
  .place-title {
    margin-right: 10px;
  }
  .place-category,
  .place-distance {
    font-size: 13px;
  }

  .place-address {
    font-size: 14px;
  }
`;
