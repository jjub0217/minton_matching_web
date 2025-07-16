import { ChangeReason } from "../NotificationPage.style";

export const ChangeDetail = ({ details, changeType }) => {
  console.log(details);
  console.log(changeType);

  if (!details) return null;

  const formatDate = (iso) => {
    if (!iso) return "-";
    const date = new Date(iso);
    return `${
      date.getMonth() + 1
    }월 ${date.getDate()}일 오후 ${date.getHours()}시`;
  };

  return (
    <>
      {changeType === "canceled" && (
        <ChangeReason>
          <span>원래 일정: {formatDate(details.originalDate)}</span>
          <span>취소 사유: {details.reason}</span>
        </ChangeReason>
      )}

      {changeType === "time" && (
        <ChangeReason>
          <span>변경 전: {formatDate(details.oldDate)}</span>
          <span>변경 후: {formatDate(details.newDate)}</span>
          <span>변경 사유: {details.reason}</span>
        </ChangeReason>
      )}

      {changeType === "location" && (
        <ChangeReason>
          <span>변경 전: {details.oldLocation}</span>
          <span>변경 후: {details.newLocation}</span>
          <span>변경 사유: {details.reason}</span>
        </ChangeReason>
      )}
    </>
  );
};
