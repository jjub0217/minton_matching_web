import styled from "styled-components";

export const Button = styled.button`
  background: #60a5fa;
  color: #18181b;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  padding: 8px 22px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: #3b82f6;
    color: #fff;
  }
`;
