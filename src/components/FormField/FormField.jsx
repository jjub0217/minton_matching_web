import { memo } from "react";
import { FormFieldBox } from "../Common/FormField.style";

export const FormField = memo(
  ({
    label,
    id,
    type = "text",
    placeholder,
    options = [],
    rows = 4,
    children,
    name,
    onChange,
    value,
    page,
  }) => {
    return (
      <FormFieldBox className={page === "mypage" ? "mypage-filed" : ""}>
        <label htmlFor={id}>{label}</label>
        {/* {type !== "custom" && <label htmlFor={id}>{label}</label>} */}
        {type === "custom" ? (
          children
        ) : type === "textarea" ? (
          <textarea
            id={id}
            className="input-textarea"
            rows={rows}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required
          />
        ) : type === "select" ? (
          <select
            id={id}
            className="input-select"
            name={name}
            value={value}
            onChange={onChange}
            required
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            id={id}
            className="input-text"
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            required
          />
        )}
      </FormFieldBox>
    );
  }
);
