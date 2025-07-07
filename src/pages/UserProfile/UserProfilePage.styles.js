import styled from "styled-components";

// participant-detail-container
export const ParticipantInfoBox = styled.div`
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
export const ParticipantProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 28px 24px 12px 24px;
`;

export const ParticipantImage = styled.div`
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
export const ParticipantInfo = styled.div`
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
export const ParticipantStats = styled.div`
  display: flex;
  gap: 18px;
  padding: 8px 24px 0 24px;
  justify-content: center;
`;

// participant-history-section
export const ParticipantHistorySection = styled.div`
  padding: 24px 24px 0 24px;
  .history-title {
    font-size: 15px;
    color: #f3f4f6;
    margin-bottom: 10px;
    font-weight: 600;
  }
`;
