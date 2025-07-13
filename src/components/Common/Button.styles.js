import styled from "styled-components";

const FormMatchingButtonStyle = `
  font-size: 15px;
  padding: 8px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const HandlePageButtonStyle = `
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
    color: #fff;
`;

export const ParticipantButton = styled.button`
  border: none;
  border-radius: 8px;
  cursor: pointer;

  background: #60a5fa;
  color: #18181b;
  font-size: 16px;
  font-weight: 600;
  padding: 8px 22px;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: #3b82f6;
    color: #fff;
  }
`;
export const ReviewButton = styled(ParticipantButton)`
  background-color: #4caf50;

  color: #18181b;
  &:hover {
    background: #319735;
    color: #fff;
  }
`;

export const FavoriteButton = styled.button`
  border: none;
  border-radius: 8px;
  cursor: pointer;

  background: #222;
  color: #e11d48;
  font-size: 20px;
  font-weight: 500;
  padding: 10px 18px;
  display: flex;
  align-items: center;
  gap: 0;
  transition: background 0.2s, color 0.2s, transform 0.1s, box-shadow 0.1s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  &:hover,
  &:focus {
    background: #333;
    color: #f472b6;
    transform: scale(1.12);
    box-shadow: 0 4px 16px rgba(225, 29, 72, 0.15);
  }
  &:active {
    background: #18181b;
    color: #be185d;
    transform: scale(0.96);
  }
  .heart {
    font-size: 20px;
    vertical-align: middle;
  }
`;

export const CreateMatchButton = styled.button`
  position: absolute;
  bottom: 80px;
  right: 50px;
  font-size: 16px;
  border-radius: 35px;
  padding: 20px;
  display: flex;
  gap: 10px;
  cursor: pointer;
`;

export const SaveBtn = styled.button`
  ${FormMatchingButtonStyle}
  background: #4caf50;
  color: #fff;
`;

export const CancelBtn = styled.button`
  ${FormMatchingButtonStyle}
  background: #444;
  color: #fff;
`;

export const MainButton = styled(SaveBtn)`
  ${HandlePageButtonStyle}
`;

export const ManageButton = styled.button`
  ${HandlePageButtonStyle}
  background: #2d6fa1;
`;

export const ApproveButton = styled(SaveBtn)`
  ${HandlePageButtonStyle}
`;

export const RejectedButton = styled(SaveBtn)`
  ${HandlePageButtonStyle}
  background-color: #d32f2f;
`;
