import styled from "styled-components";

// pages/MatchDetail/MatchDetailPage.style.js
export const Inner = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MeetingPlaceImageBox = styled.figure`
  width: 100%;
  height: 220px;
  border-radius: 16px 16px 0 0;
  background: #222;
  border-bottom: 1px solid #111;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const HostProfileSection = styled.section`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 0px 8px 0px;
`;

export const HostProfileInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;

  #host-id {
    font-size: 16px;
    font-weight: 600;
    color: #f8fafc;
  }
`;

export const HostProfileMetaInfoList = styled.ul`
  font-size: 14px;
  color: #94a3b8;
  display: flex;
  gap: 3px;
`;

export const MeetingInfoList = styled.ul`
  padding: 4px 0px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  li {
    font-size: 15px;
    color: #d1d5db;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const MeetingDescription = styled.div`
  padding: 31px 0px 23px 0px;
  font-size: 15px;
  color: #f3f4f6;
  line-height: 1.7;
`;

export const MeetingMapSection = styled.section`
  padding: 0 0px 8px 0px;
`;

export const MeetingMapImage = styled.div`
  width: 100%;
  height: 240px;
  border-radius: 10px;
  background: #222;
  border: 1px solid #111;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const MeetingMapInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 12px;
  .map-building {
    font-weight: 600;
    color: #f3f4f6;
    line-height: 1;
  }
  .map-address {
    font-size: 14px;
    color: #9ca3af;
    line-height: 1;
  }
`;

export const PostStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0px 0 0px;
  font-size: 15px;
`;

export const ViewLike = styled.div`
  background: none;
  border: none;
  cursor: pointer;
  color: #9ca3af;
  transition: color 0.2s;
  display: flex;
  gap: 12px;
  align-items: center;

  .like-count {
    font-size: 15px;
    color: #9ca3af;
    font-weight: 500;
  }
`;

export const ViewCount = styled.div`
  color: #9ca3af;
  margin-left: auto;
  display: flex;
  gap: 12px;
  align-items: center;
`;
