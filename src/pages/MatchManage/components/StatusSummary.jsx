import { StatusBadge } from "../../../components/Common/StatusBadge.style";
import { StatusSummaryBox } from "../MatchManage.style";

export const StatusSummary = ({ approved, pending, rejected }) => {
  return (
    <StatusSummaryBox>
      <StatusBadge $status={"approved"} aria-label="승인된 참가자 수">
        승인: {approved}명
      </StatusBadge>
      <StatusBadge $status={"pending"} aria-label="대기중인 참가자 수">
        대기: {pending}명
      </StatusBadge>
      <StatusBadge $status={"rejected"} aria-label="거절된 참가자 수">
        거절: {rejected}명
      </StatusBadge>
    </StatusSummaryBox>
  );
};
