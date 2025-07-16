import { FaInfoCircle } from "react-icons/fa";
import { styled } from "styled-components";

// pages/MatchManage/MatchManage.style.js

export const MatchMetaInfo = styled.div`
  display: flex;
  gap: 16px;
  font-size: 14px;
  color: #bbb;
  .meta-info {
    display: flex;
    gap: 3px;
  }
`;

export const ParticipantListSection = styled.section`
  margin-top: 40px;
`;

export const ParticipationHeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .container-header {
    font-size: 18px;
    margin-bottom: 40px;
  }
`;

export const ParticipationBox = styled.section`
  .section-subtitle {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .applicants-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export const ParticipationItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #111;
  border-radius: 12px;
  padding: 16px;
  border-left: 4px solid;
  border-left-color: ${(props) =>
    props.type === "approval"
      ? "#444"
      : props.type === "pending"
      ? "#ff9800"
      : "#f44336"};
`;

export const ParticipateUserInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  .participate-user-image {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const ParticipateUserMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  p,
  dl:nth-of-type(1) {
    font-size: 14px;
    color: #bbb;
  }
  dl {
    display: flex;
    align-items: center;
    gap: 2px;
  }
`;

export const StateBox = styled.div`
  text-align: right;
  .reject-info {
    font-size: 15px;
    margin-top: 5px;
    color: #bbb;
  }
`;

export const AdditionalInfo = styled.aside`
  display: flex;
  align-items: flex-start;
  .additional-info {
  }
`;

export const ApprovalButtons = styled.div`
  display: flex;
  gap: 16px;
`;

export const InfoIcon = styled(FaInfoCircle)`
  transform: translateY(2px);
  margin-right: 5px;
`;

export const CheckIcon = styled.div`
  width: 16px;
  height: 16px;
  background: transparent;
  border-radius: 4px;
  background-color: ${(props) =>
    props.type === "approve" ? "#4caf50" : "transparent"};
  svg {
    fill: ${(props) =>
      props.type !== "pending" && props.type !== "approve"
        ? "red"
        : "currentColor"};
  }
`;

export const StatusSummaryBox = styled.div`
  display: flex;
  gap: 12px;
`;
