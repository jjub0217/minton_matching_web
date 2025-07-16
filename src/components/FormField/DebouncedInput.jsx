// components/FormField/DebouncedInput.jsx
import { memo, useEffect, useState } from "react";

export const DebouncedInput = memo(
  ({ defaultValue = "", onDebounce, delay = 300, ...props }) => {
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
      const handler = setTimeout(() => {
        onDebounce?.(value);
      }, delay);
      return () => clearTimeout(handler);
    }, [value, delay, onDebounce]);

    return (
      <input
        {...props}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  }
);
