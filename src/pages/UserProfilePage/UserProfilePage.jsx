import styled from "styled-components";
import { userInfo } from "../../data/user.json";
import { UserHistoryBox } from "./userHistoryBox";

// participant-detail-container
const ParticipantInfoBox = styled.div`
  max-width: 420px;
  margin: 32px auto;
  background: #18181b;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  padding: 0 0 32px 0;
  border: 1px solid #111;
  .participant-grade {
    background: #6366f1;
    color: #fff;
    font-size: 13px;
    border-radius: 8px;
    padding: 4px 12px;
    font-weight: 500;
    margin-left: 8px;
  }
`;

// participant-profile-row
const ParticipantProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 28px 24px 12px 24px;
`;

const ParticipantImage = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid #222;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
`;

// participant-profile-info
const ParticipantInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
  .participant-name {
    font-size: 18px;
    font-weight: 600;
    color: #f8fafc;
  }
  .participant-joined {
    font-size: 14px;
    color: #94a3b8;
  }
`;

// participant-stats-row
const ParticipantStats = styled.div`
  display: flex;
  gap: 18px;
  padding: 8px 24px 0 24px;
  justify-content: center;
`;

// stat-box
const StatBox = styled.div`
  background: #222;
  border-radius: 10px;
  padding: 12px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 90px;
  .stat-label {
    font-size: 13px;
    color: #a1a1aa;
    margin-bottom: 4px;
  }
  .stat-value {
    font-size: 20px;
    font-weight: 700;
    color: #fbbf24;
  }
`;
// participant-history-section
const ParticipantHistorySection = styled.div`
  padding: 24px 24px 0 24px;
  .history-title {
    font-size: 15px;
    color: #f3f4f6;
    margin-bottom: 10px;
    font-weight: 600;
  }
`;

export const UserProfilePage = () => {
  return (
    <ParticipantInfoBox>
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
        <StatBox>
          <span className="stat-label">리뷰 점수</span>
          <span className="stat-value">{userInfo.stats.reviewScore}</span>
        </StatBox>
        <StatBox>
          <span className="stat-label">페널티</span>
          <span className="stat-value">
            <span>{userInfo.stats.penaltyCount}</span>
            <span>회</span>
          </span>
        </StatBox>
      </ParticipantStats>

      <ParticipantHistorySection>
        <h2 className="history-title">매칭 히스토리</h2>
        <ul className="history-list">
          {userInfo.history.map((el) => (
            <UserHistoryBox {...el} key={el.id} />
          ))}
        </ul>
      </ParticipantHistorySection>
    </ParticipantInfoBox>
  );
};
