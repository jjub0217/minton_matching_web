import { memo } from "react";
import { useDispatch } from "react-redux";
import { useParticipantField } from "../../hooks/useParticipantField";
import { Label } from "../Common/FormField.style";

export const SelectRadioField = memo(({ label, id }) => {
  console.log("SelectField 렌더링");
  const dispatch = useDispatch();

  const { value, onChange } = useParticipantField(id);

  return (
    <Label id={id} className={`${value === label ? "selected" : ""}`}>
      <input
        type="radio"
        name={id}
        value={label}
        checked={value === label}
        onChange={onChange}
        hidden
      />
      {label}
    </Label>
  );
});
