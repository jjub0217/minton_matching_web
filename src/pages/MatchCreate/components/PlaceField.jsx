import { SelectGroup } from "../../../components/Common/FormField.style";
import { FormField } from "../../../components/FormField/FormField";

export const PlaceField = ({ value, onClickSearch }) => {
  return (
    <FormField label="장소" id="place" type="custom">
      <SelectGroup>
        <input
          type="text"
          id="place"
          name="place"
          className="input-text place"
          placeholder="장소를 선택하세요"
          readOnly
          tabIndex={-1}
          value={value}
        />
        <button
          type="button"
          className="map-select-btn"
          onClick={onClickSearch}
        >
          장소 검색
        </button>
      </SelectGroup>
    </FormField>
  );
};
