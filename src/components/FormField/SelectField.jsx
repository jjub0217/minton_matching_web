import { memo } from "react";
import { useMatchField } from "../../hooks/useMatchField";
import { useUserField } from "../../hooks/useUserField";
import { FormField } from "./FormField";

export const SelectField = memo(
  ({ label, placeholder, id, type, options, page }) => {
    const { value, onChange } =
      page === "mypage" ? useUserField(id) : useMatchField(id);

    return (
      <FormField
        label={label}
        id={id}
        type={type}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        options={options}
        page={page}
      />
    );
  }
);
