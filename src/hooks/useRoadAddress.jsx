import { useEffect, useState } from "react";

export const useRoadAddress = (latitude, longitude) => {
  const [roadAddress, setRoadAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!latitude || !longitude) return;

    const fetchAddress = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `http://localhost:5001/api/reverse-geocode?lat=${latitude}&lon=${longitude}`
        );

        const data = await res.json();

        console.log(data);

        if (!data.results?.[0]) {
          throw new Error("주소 없음");
        }

        const area1 = data.results[0].region.area1.name;
        const area2 = data.results[0].region.area2.name;
        const road = data.results[0].land.name;

        setRoadAddress(`${area1} ${area2} ${road}`);
      } catch (err) {
        console.error("주소 요청 실패:", err);
        setError("주소를 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchAddress();
  }, [latitude, longitude]);

  return { roadAddress, loading, error };
};
