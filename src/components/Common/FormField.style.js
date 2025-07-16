import { FaPlus } from "react-icons/fa6";
import styled from "styled-components";

export const FormFieldBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 15px;
    color: #bbb;
    margin-bottom: 2px;
  }
  .input-text,
  .input-date,
  .input-select,
  .input-textarea {
    background: #111;
    color: #fff;
    border: 0;
    border: 1px solid #333;
    border-radius: 6px;
    padding: 8px 10px;
    font-size: 15px;
    &:focus-visible {
      outline: 2px solid #60a5fa;
      outline-offset: 2px;
    }
  }
  .input-text.place {
    flex: 1;
  }
  .guide {
    font-size: 13px;
    color: #bbb;
  }
  .map-select-btn {
    background: #2d6fa1;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 8px 14px;
    font-size: 14px;
    cursor: pointer;
    &:focus-visible {
      outline: 2px solid #60a5fa;
      outline-offset: 2px;
    }
  }
  .input-textarea {
    resize: none;
  }
  &.mypage-filed {
    flex-direction: row;
    align-items: center;
    label {
      min-width: 80px;
      color: #bbb;
      font-size: 15px;
      margin-bottom: 0;
      padding: 4px;
    }
    .input-text,
    .input-select {
      padding: 4px;
      font-size: 15px;
    }
  }
`;

export const PlusIcon = styled(FaPlus)`
  font-size: 1.5em;
  color: #4caf50;
`;
export const SelectGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const PhotoUploadBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #232323;
    border: 2px dashed #4caf50;
    border-radius: 12px;
    color: #4caf50;
    cursor: pointer;
    transition: background 0.2s, border 0.2s;
    font-size: 13px;
    padding: 15px;
    gap: 15px;

    &:active,
    &:hover {
      background: #263a29;
      border-color: #388e3c;
    }
  }
`;

export const PhotoUploadList = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 10px;
  li {
    width: 100%;
    max-height: 136px;
    border-radius: 10px;
    border: 2px solid #4caf50;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const Label = styled.label`
  border-radius: ${(props) => (props.id === "selectedMember" ? "8px" : "20px")};
  border-color: ${(props) =>
    props.id === "selectedGoodPoint" ? "#22c55e" : ""};
`;

export const StarRatingBox = styled.div`
  display: flex;
  svg {
    width: 2rem;
    height: 2rem;
  }
`;
export const RatingIcon = styled.div`
  cursor: pointer;
`;
