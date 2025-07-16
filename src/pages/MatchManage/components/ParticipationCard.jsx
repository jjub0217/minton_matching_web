import { ApprovalButton } from "../../../components/Button/ApprovalButton";
import { RejectButton } from "../../../components/Button/RejectButton";
import {
  ApprovalButtons,
  InfoIcon,
  ParticipateUserInfo,
  ParticipateUserMeta,
  ParticipationItem,
  StateBox,
} from "../MatchManage.style";

export const ParticipationCard = ({ user }) => {
  return (
    <ParticipationItem type={user.state} role="listitem">
      <ParticipateUserInfo>
        <div className="participate-user-image">
          <img src={user.imgUrl} alt={user.name} />
        </div>

        <ParticipateUserMeta>
          <strong>{user.name}</strong>
          <p>{user.grade}</p>
          <dl>
            <dt>평점:</dt>
            <dd>{user.reviewScore}</dd>
          </dl>
          <dl>
            <dt>참여율: </dt>
            <dd>{user.ParticipationRate}점</dd>
          </dl>
        </ParticipateUserMeta>
      </ParticipateUserInfo>
      <StateBox>
        {user.state === "approval" ? (
          <span>자동승인</span>
        ) : user.state === "pending" ? (
          <ApprovalButtons>
            <ApprovalButton>승인</ApprovalButton>
            <RejectButton>거절</RejectButton>
          </ApprovalButtons>
        ) : (
          <>
            <div role="status" aria-live="polite">
              <InfoIcon />
              <span>거절됨</span>
            </div>
            <p>급수 조건 미달로 거절</p>
          </>
        )}
      </StateBox>
    </ParticipationItem>
  );
};
