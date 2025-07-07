import styled from "styled-components";

// participants-section
export const Section = styled.section`
  padding: 18px 0px 0 0px;
`;

// participant-count
export const ParticipantCount = styled.div`
  font-size: 15px;
  color: #f3f4f6;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  .participant-member {
    line-height: 1;
  }
  .over-capacity {
    color: #e11d48;
  }
`;

export const ParticipantsMembers = styled.div`
  overflow: hidden;
  transition: height 0.4s ease;
  margin-bottom: 18px;
  & + .more-btn {
    display: block;
    margin: 12px auto 18px auto;
    background: #222;
    color: #60a5fa;
    border: none;
    border-radius: 8px;
    padding: 7px 20px;
    font-size: 15px;
    cursor: pointer;
    font-weight: 500;
    transition: background 0.2s, color 0.2s;
  }
`;

// participants-list
export const ParticipantsMemberList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  row-gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 18px;
`;

// participant
export const ParticipantMember = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  min-width: 64px;
  cursor: pointer;
  /* flex: 1; */
  .participant-id {
    font-size: 13px;
    color: #f3f4f6;
    margin-top: 2px;
    max-width: 55px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

// participant-img
export const ParticipantImage = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 2px solid #222;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Badge = styled.span`
  color: #18181b;
  font-size: 12px;
  border-radius: 8px;
  padding: 2px 8px;
  margin-top: 2px;
  font-weight: 500;
  background-color: ${(props) => {
    switch (props.role) {
      case "주최":
        return "#60a5fa";
      case "참여":
        return "#34d399";
      case "대기":
        return "#facc15";
      default:
        return "#d4d4d8";
    }
  }};
`;

export const ParticipantActions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 28px;
`;
