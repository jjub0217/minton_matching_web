import styled from "styled-components";

const FormMatchingButtonStyle = `
  font-size: 15px;
  padding: 8px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:focus-visible { 
    outline: 2px solid #4caf50; 
    outline-offset: 2px; 
  }
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
  background-color: #d32f2f;
`;

export const SocialBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  transition: transform 0.15s;
  background-color: #fff;
  cursor: pointer;
  &.kakao {
    background-color: #fee500;
  }
  &.naver {
    background-color: #03c75a;
  }
`;
export const SocialBtnImage = styled.div`
  width: 50%;
  height: 50%;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const ActionBtn = styled.button`
  background-color: transparent;
  width: 20px;
  height: 20px;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
    fill: #fff;
  }
`;
