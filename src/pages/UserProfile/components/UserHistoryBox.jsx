import { StatusBadge } from "../../../components/Common/StatusBadge.style";
import { HistoryItem } from "../UserProfilePage.styles";

export const UserHistoryBox = ({ date, title, role }) => {
  return (
    <HistoryItem>
      <span className="history-date">{date}</span>
      <span className="history-title-text">{title}</span>
      <StatusBadge
        $status={role}
        $textColor={"#18181b"}
        $padding={"2px 8px"}
        $radius={"8px"}
      >
        {role}
      </StatusBadge>
    </HistoryItem>
  );
};
