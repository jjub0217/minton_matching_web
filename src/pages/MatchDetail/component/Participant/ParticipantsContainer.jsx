import { useMemo } from "react";
import { JoinButton } from "../../../../components/Button/JoinButton";
import { LikeButton } from "../../../../components/Button/LikeButton";
import { MatchReviewButton } from "../../../../components/Button/MatchReviewButton";
import { ActionButtons } from "../../../../components/Common/ActionButtons.style";
import { ParticipantMembersExpandable } from "./ParticipantMembersExpandable";
import { ParticipantCount, Section } from "./ParticipantsContainer.styles";

export const ParticipantsContainer = ({ participants, time }) => {
  const parseMeetingTime = (timeStr) => {
    const regex = /(\d{1,2})월 (\d{1,2})일.*(오전|오후)\s*(\d{1,2}):(\d{2})/;
    const match = timeStr.match(regex);

    if (!match) return null;

    const [, month, day, ampm, hourStr, minuteStr] = match;
    let hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);

    if (ampm === "오후" && hour !== 12) hour += 12;
    if (ampm === "오전" && hour === 12) hour = 0;

    const year = new Date().getFullYear(); // 현재 연도 사용
    return new Date(year, month - 1, day, hour, minute);
  };

  const isPastMeeting = useMemo(() => {
    const postedDate = parseMeetingTime(time);
    return postedDate < new Date(); // 과거 시점인지
  }, [time]);

  return (
    <Section>
      {/* 미팅 참여인원 */}
      <ParticipantCount>
        <span className="participant-member">참여중인 인원</span>
        <p aria-live="polite">
          <span
            className={
              participants.list.length > participants.count.capacity
                ? "over-capacity"
                : ""
            }
            aria-label={`현재 인원 ${participants.list.length}명`}
          >
            {participants.list.length}
          </span>
          <span> / {participants.count.capacity}</span>
        </p>
      </ParticipantCount>

      {/* 미팅 참여인원 정보 */}
      <ParticipantMembersExpandable participants={participants.list} />

      {/* 미팅 참여 여부 영역 */}
      <ActionButtons $mt={"28px"}>
        <LikeButton />
        <JoinButton />
        {isPastMeeting && <MatchReviewButton />}
        {/* <MatchReviewButton /> */}
      </ActionButtons>

      {/* 다른 모임 추천 영역 */}
    </Section>
  );
};
