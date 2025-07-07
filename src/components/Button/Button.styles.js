import styled from "styled-components";

export const LikeButton = styled.button`
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

export const JoinButton = styled.button`
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
