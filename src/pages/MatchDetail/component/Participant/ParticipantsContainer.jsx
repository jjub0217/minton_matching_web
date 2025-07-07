import { JoinButton } from "../../../../components/Button/JoinButton";
import { LikeButton } from "../../../../components/Button/LikeButton";
import {
  ParticipantActions,
  ParticipantCount,
  Section,
} from "../../component/Participant/Participant.styles";
import { ParticipantMembersExpandable } from "./ParticipantMembersExpandable";

export const ParticipantsContainer = ({ participants }) => {
  return (
    <Section>
      {/* 미팅 참여인원 */}
      <ParticipantCount>
        <span className="participant-member">참여중인 인원</span>
        <p>
          <span
            className={
              participants.list.length > participants.count.capacity
                ? "over-capacity"
                : ""
            }
          >
            {participants.list.length}
          </span>
          <span> / {participants.count.capacity}</span>
        </p>
      </ParticipantCount>

      {/* 미팅 참여인원 정보 */}
      <ParticipantMembersExpandable participants={participants.list} />

      {/* 미팅 참여 여부 영역 */}
      <ParticipantActions>
        <LikeButton />
        <JoinButton />
      </ParticipantActions>

      {/* 다른 모임 추천 영역 */}
    </Section>
  );
};
