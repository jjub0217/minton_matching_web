import { userInfo } from "../../data/user.json";
import { StatBox } from "./components/StatBox";
import { UserHistoryBox } from "./components/UserHistoryBox";

import { PageContainer } from "../../components/Common/PageContainer.style";
import {
  ParticipantHistorySection,
  ParticipantImage,
  ParticipantInfo,
  ParticipantProfile,
  ParticipantStats,
} from "./UserProfilePage.styles";
export const UserProfilePage = () => {
  return (
    <PageContainer>
      <ParticipantProfile>
        <ParticipantImage>
          <img src={userInfo.profile.imgUrl} alt={userInfo.name} />
        </ParticipantImage>

        <ParticipantInfo>
          <span className="participant-name">{userInfo.profile.name}</span>
          <span className="participant-joined">
            <span>가입일:</span>
            <span>{userInfo.profile.joined}</span>
          </span>
        </ParticipantInfo>

        <span className="participant-grade">{userInfo.profile.grade}</span>
      </ParticipantProfile>

      <ParticipantStats>
        <StatBox label={"리뷰 점수"} value={userInfo.stats.reviewScore} />
        <StatBox label={"페널티"} value={userInfo.stats.penaltyCount} />
      </ParticipantStats>

      <ParticipantHistorySection>
        <h2 className="history-title">매칭 히스토리</h2>
        <ul className="history-list">
          {userInfo.history.map((el) => (
            <UserHistoryBox {...el} key={el.id} />
          ))}
        </ul>
      </ParticipantHistorySection>
    </PageContainer>
  );
};
