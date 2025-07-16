import { useState } from "react";

export const useSearchPlaces = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchPlaces = async (keyword) => {
    if (!keyword.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `http://localhost:5001/api/search-place?keyword=${encodeURIComponent(
          keyword
        )}`
      );
      const data = await res.json();
      setResults(data.items || []);
    } catch (err) {
      console.error("🔴 장소 검색 에러:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { searchPlaces, results, loading, error, setResults };
};
