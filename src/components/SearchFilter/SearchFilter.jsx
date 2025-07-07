import { useState } from "react";
import { FilterContainer, SearchInput, Select } from "./SearchFilter.styles";

export const SearchFilter = () => {
  const filterGrade = ["초심", "D조", "C조", "B조", "A조"];
  const filterRadius = ["1km 이내", "3km 이내", "C조", "B조", "A조"];
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  return (
    <FilterContainer>
      <Select>
        <option>급수</option>
        {filterGrade.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </Select>
      <Select>
        <option>반경</option>
        {filterRadius.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </Select>
      <SearchInput
        type="text"
        placeholder="장소, 제목 검색"
        value={inputValue}
        onChange={handleInputValue}
      />
    </FilterContainer>
  );
};
