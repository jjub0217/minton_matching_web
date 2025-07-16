import styled from "styled-components";

export const Section = styled.section`
  padding: 18px 0px 0 0px;
`;

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

export const ParticipantsMemberList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  row-gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 18px;
`;

export const ParticipantMember = styled.li`
  button {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    min-width: 64px;
    cursor: pointer;
  }
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
