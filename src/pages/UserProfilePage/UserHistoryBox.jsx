import { styled } from "styled-components";

// history-item
const HistoryItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #232323;
  .history-date {
    font-size: 13px;
    color: #a1a1aa;
    min-width: 80px;
  }
  .history-title-text {
    font-size: 15px;
    color: #f3f4f6;
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const HistoryRole = styled.span`
  font-size: 12px;
  border-radius: 8px;
  padding: 2px 8px;
  font-weight: 500;
  margin-left: 4px;
  color: #18181b;
  background-color: ${(props) => {
    switch (props.role) {
      case "주최":
        return "#60a5fa";
      case "참여":
        return "#34d399";
      default:
        return "#d4d4d8";
    }
  }};
`;

export const UserHistoryBox = ({ date, title, role }) => {
  return (
    <HistoryItem>
      <span className="history-date">{date}</span>
      <span className="history-title-text">{title}</span>
      <HistoryRole role={role}>{role}</HistoryRole>
    </HistoryItem>
  );
};
