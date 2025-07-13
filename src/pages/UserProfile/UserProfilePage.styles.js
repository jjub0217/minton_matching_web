import styled from "styled-components";

// pages/UserProfile/UserProfilePage.style.js

export const ParticipantProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 28px 24px 12px 24px;
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

export const ParticipantStats = styled.div`
  display: flex;
  gap: 18px;
  padding: 8px 24px 0 24px;
  justify-content: center;
`;

export const ParticipantHistorySection = styled.div`
  padding: 24px 24px 0 24px;
  .history-title {
    font-size: 15px;
    color: #f3f4f6;
    margin-bottom: 10px;
    font-weight: 600;
  }
`;

export const HistoryItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #232323;
  .history-date {
    font-size: 13px;
    color: #a1a1aa;
    min-width: 80px;
  }
  .history-title-text {
    font-size: 15px;
    color: #f3f4f6;
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const State = styled.div`
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
