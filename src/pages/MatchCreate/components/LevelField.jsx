import { SelectGroup } from "../../../components/Common/FormField.style";
import { FormField } from "../../../components/FormField/FormField";

export const LevelField = ({ value, onChange }) => {
  return (
    <FormField label="급수" id="level" type="custom">
      <SelectGroup>
        <select
          id="level"
          className="input-select"
          name="level"
          value={value}
          onChange={onChange}
          required
          aria-describedby="level-guide"
        >
          <option value="초심">초심 이상</option>
          <option value="D조">D조 이상</option>
          <option value="C조">C조 이상</option>
          <option value="B조">B조 이상</option>
          <option value="A조">A조 이상</option>
        </select>
        <span id="level-guide" className="guide">
          * 선택한 급수 이상만 참여할 수 있습니다.
        </span>
      </SelectGroup>
    </FormField>
  );
};
