import styled from "styled-components";

export const ProfileImage = styled.div`
  width: ${(props) => props.size || "48px"};
  height: ${(props) => props.size || "48px"};
  border: 2px solid ${(props) => props.borderColor || "#222"};
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
