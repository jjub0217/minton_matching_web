import { styled } from "styled-components";

const baseButton = `
  padding: 6px 14px;
  font-size: 13px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: background 0.2s, color 0.2s;
`;

export const Header = styled.header`
  background: #2a2a2a;
  padding: 32px 0;
  border-bottom: 1px solid #333;
  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 20px;
    }
  }
`;

export const Notification = styled.article`
  padding: 16px 0;
  border-bottom: 1px solid #333;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #2a2a2a;
  }
  .inner {
    display: flex;
    align-items: center;
    gap: 12px;

    h1 {
      font-size: 20px;
    }
  }
`;

export const NotificationIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
`;

export const NotificationContent = styled.div`
  flex: 1;

  h3 {
    font-size: 15px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 4px;
  }
  p {
    font-size: 14px;
    color: #bbb;
    line-height: 1.4;
    margin-bottom: 6px;
  }
  time {
    font-size: 12px;
    color: #888;
  }
`;
export const ChangeReason = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border-left: 3px solid #ff9800;
  padding: 8px 12px;
  margin-top: 8px;
  margin-bottom: 6px;
  span {
    font-size: 12px;
    color: #ccc;
    line-height: 1.3;
  }
`;

export const AcceptButton = styled.button`
  ${baseButton};
  background-color: #4caf50;
  color: #fff;

  &:hover {
    background-color: #388e3c;
  }
`;

export const RejectButton = styled.button`
  ${baseButton};
  background-color: #f44336;
  color: #fff;

  &:hover {
    background-color: #d32f2f;
  }
`;

export const WriteReviewButton = styled.button`
  ${baseButton};
  background-color: #ffd700;
  color: #333;

  &:hover {
    background-color: #fbc02d;
  }
`;
