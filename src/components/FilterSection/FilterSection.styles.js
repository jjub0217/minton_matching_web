import styled from "styled-components";

// filter-select
const CommonSelectInputStyle = `
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #111;
  border-radius: 8px;
  background-color: #222;
  color: #f3f4f6;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #333;
    box-shadow: 0 0 0 3px rgba(55, 65, 81, 0.1);
  }
  @media (min-width: 768px) {
    min-width: 0;
  }
`;

// filter-section
export const FilterSectionWrapper = styled.div`
  width: 100%;
  margin-bottom: 40px;
  background-color: #111;
  padding: 20px 0;
  border: 1px solid #111;
`;

// filter-container
export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 600px;
  min-width: 440px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

// filter-select
export const Select = styled.select`
  ${CommonSelectInputStyle}

  @media (min-width: 768px) {
    min-width: 0;
  }
`;

export const SearchInput = styled.input`
  ${CommonSelectInputStyle}
  @media (min-width: 768px) {
    min-width: 0;
  }
`;
