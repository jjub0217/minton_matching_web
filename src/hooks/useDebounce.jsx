import { useRef } from "react";

export default function useDebounce(callback, delay = 500) {
  const timerRef = useRef(null);

  const debounce = (...args) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      callback(...args); // 검색 함수 호출
    }, delay);
  };

  return debounce;
}
