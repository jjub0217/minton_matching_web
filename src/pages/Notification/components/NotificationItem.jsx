import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { ActionButtons } from "../../../components/Common/ActionButtons.style";
import {
  AcceptButton,
  Notification,
  NotificationContent,
  RejectButton,
} from "../NotificationPage.style";
import { ChangeDetail } from "./ChangeDetail";

export const NotificationItem = ({
  title,
  message,
  type,
  changeType,
  timestamp,
  details,
  status,
}) => {
  const getTimeText = (time) => {
    const targetTime = new Date(time);
    // console.log("데이터:", targetTime);

    const now = new Date(); // 현재 시간 (로컬 시간)
    // console.log("현재:", now);

    const diffMs = now - targetTime;
    // console.log("밀리초 차이:", diffMs);

    const diffSec = Math.floor(diffMs / 1000);
    // console.log("초 차이:", diffSec);
    const diffMin = Math.floor(diffSec / 60);
    // console.log("분 차이:", diffMin);
    const diffHr = Math.floor(diffMin / 60);
    // console.log("시간 차이:", diffHr);

    if (diffSec <= 180) return "방금 전";
    if (diffMin < 60) return `${diffMin}분 전`;
    return `${diffHr}시간 전`;
  };

  const [timeText, setTimeText] = useState(() => getTimeText(timestamp));

  const getNotificationNavigationIcon = (notificationType) => {
    switch (notificationType) {
      case "approval":
      case "start_soon":
      case "schedule_changed":
        return <IoIosArrowForward />;
      case "friend_request":
        return (
          <>
            <AcceptButton>수락</AcceptButton>
            <RejectButton>거절</RejectButton>
          </>
        );

      default:
        return null;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeText(getTimeText(timestamp));
    }, 60 * 1000); // 1분마다 갱신

    return () => clearInterval(interval); // 정리
  }, [timestamp]);

  return (
    <Notification type={type}>
      <div className="inner">
        <NotificationContent>
          <h3>{title}</h3>
          {changeType ? (
            <>
              <p>{message}</p>
              <ChangeDetail details={details} changeType={changeType} />
            </>
          ) : (
            <p>{message}</p>
          )}
          <time className="notification-time">{timeText}</time>
        </NotificationContent>
        <ActionButtons $mt={"0"}>
          {getNotificationNavigationIcon(type)}
        </ActionButtons>
      </div>
    </Notification>
  );
};
