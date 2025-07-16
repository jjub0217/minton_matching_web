import { styled } from "styled-components";
// pages/MyPage/myPage.style.js

export const MyPageButton = styled.button`
  font-size: 11px;
  background: #b71c1c;
  border-radius: 6px;
  cursor: pointer;
  color: #fff;
  padding: 2px 6px;
  &.nickname {
    background-color: #2d6fa1;
  }
  &.location {
    background-color: #2e7d32;
  }
`;

export const ProfileInfoSection = styled.section`
  display: flex;
  justify-content: flex-start;
  gap: 24px;
  padding-top: 20px;
`;

export const ProfileImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  label {
    font-size: 12px;
    padding: 4px 10px;
    background: #333;
    border-radius: 8px;
    cursor: pointer;
    color: #fff;
  }
`;
export const ProfileInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  .label {
    min-width: 80px;
    color: #bbb;
    font-size: 15px;
    padding: 4px;
  }
  .labelValue {
    padding: 4px;
    font-size: 15px;
    min-width: 156px;
  }
  &.my-review {
    align-items: flex-start;
    .label {
      padding: 0;
      min-width: 170px;
    }
    .labelValue {
      padding: 0;
    }
  }
  .activity-row {
    display: flex;
    flex-direction: column;
  }
`;

export const LocationBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  .location-guide {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    span {
      line-height: 1;
      color: #bbb;
      &:first-child {
        color: #4caf50;
      }
    }
  }
`;

export const LocationList = styled.ul`
  display: flex;
  gap: 8px;
`;

export const Location = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;
  background: #333;
  border-radius: 8px;
  padding: 4px 8px;
`;

export const ProfileActivitySection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const MyReviewList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  li {
    display: flex;
    align-items: center;
    gap: 6px;
    background: #2a2a2a;
    color: #eee;
    padding: 12px 16px;
    border-radius: 12px;
    font-size: 14px;
    line-height: 1.5;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    svg {
      color: #4ade80;
      font-size: 16px;
      flex-shrink: 0;
    }

    .label {
      flex: 1;
    }
  }
`;

export const Count = styled.span`
  background: #4ade80;
  color: #000;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: bold;
`;

export const ExpandableReviewList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: hidden;
  transition: max-height 0.4s ease-in-out;

  li {
    background: #2a2a2a;
    color: #eee;
    padding: 14px 16px;
    border-radius: 12px;
    font-size: 14px;
    line-height: 1.5;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }
`;

export const MoreButton = styled.button`
  margin-top: 12px;
  margin-left: auto; /* ✅ 오른쪽 끝으로 정렬 */
  padding: 6px 14px;

  font-size: 14px;
  font-weight: 600;
  color: #4ade80;
  background: #1e293b;
  border: 1px solid #4ade80;
  border-radius: 8px;

  transition: background 0.2s, border 0.2s, color 0.2s;
  cursor: pointer;

  &:hover {
    background: #4ade80;
    color: #000;
    border-color: #4ade80;
  }
`;
