import { memo } from "react";
import { useMatchField } from "../../hooks/useMatchField";
import { FormField } from "./FormField";

export const DateField = memo(({ label, id, type }) => {
  console.log("DateField 렌더링");
  const { value, onChange } = useMatchField(id);

  return (
    <FormField
      label={label}
      id={id}
      type={type}
      name={id}
      value={value}
      onChange={onChange}
    />
  );
});
