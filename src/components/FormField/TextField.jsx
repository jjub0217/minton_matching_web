import { memo } from "react";
import { useMatchField } from "../../hooks/useMatchField";
import { useReviewField } from "../../hooks/useReviewField";
import { useUserField } from "../../hooks/useUserField";
import { FormField } from "./FormField";

export const TextField = memo(({ label, placeholder, id, type, page }) => {
  console.log(`${label} 렌더링`);
  const { value, onChange } =
    page === "matchCreate"
      ? useMatchField(id)
      : page === "review"
      ? useReviewField(id)
      : useUserField(id);

  return (
    <FormField
      label={label}
      id={id}
      type={type}
      name={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      page={page}
    />
  );
});
