import styled from "styled-components";

export const DetailContainer = styled.div`
  margin: 32px auto;
  background: #18181b;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  padding: 0 0 32px 0;
  .inner {
    padding: 0 24px;
  }
`;

export const MeetingPlaceImage = styled.div`
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

// profile-row
export const HostProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  padding: 20px 0px 8px 0px;
`;

export const HostProfileImage = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #222;

  /* profile-img */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// profile-info
export const HostProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;

  /* profile-id */
  .host-id {
    font-size: 16px;
    font-weight: 600;
    color: #f8fafc;
  }
`;

// profile-town-time
export const HostProfileMetaInfo = styled.p`
  font-size: 14px;
  color: #94a3b8;
  display: flex;
  gap: 3px;
`;

// meeting-time, meeting-place
export const MeetingInfo = styled.div`
  padding: 4px 0px;
  font-size: 15px;
  color: #d1d5db;
  display: flex;
  align-items: center;
  gap: 8px;
  .icon {
    font-size: 17px;
  }
`;

// meeting-content
export const MeetingDescription = styled.div`
  padding: 31px 0px 23px 0px;
  font-size: 15px;
  color: #f3f4f6;
  line-height: 1.7;
`;

// meeting-map
export const MeetingMapSection = styled.div`
  padding: 0 0px 8px 0px;
`;

/* map-img */
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

// map-info
export const MeetingMapInfo = styled.div`
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  gap: 6px;
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

// like-view-row
export const PostStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 12px 0px 0 0px;

  font-size: 15px;
`;

// like-btn
export const ViewLike = styled.div`
  background: none;
  border: none;
  cursor: pointer;
  color: #9ca3af;
  transition: color 0.2s;
  display: flex;
  gap: 16px;
  align-items: center;

  .heart {
    font-size: 18px;
    vertical-align: middle;
  }
  .like-count {
    font-size: 15px;
    color: #9ca3af;
    font-weight: 500;
  }
`;

// view-count
export const ViewCount = styled.div`
  color: #9ca3af;
  margin-left: auto;
`;
