import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import fetch from "node-fetch";
dotenv.config();
console.log("✅ API 키 확인:", process.env.NAVER_ID, process.env.NAVER_SECRET);

const app = express();
app.use(cors());

app.get("/api/reverse-geocode", async (req, res) => {
  // console.log(req);

  const { lat, lon } = req.query;
  console.log(lat, lon);

  if (!lat || !lon) {
    return res.status(400).json({ error: "Missing lat/lon parameters" });
  }

  const url = `https://maps.apigw.ntruss.com/map-reversegeocode/v2/gc?coords=${lon},${lat}&output=json&orders=roadaddr`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-NCP-APIGW-API-KEY-ID": process.env.NAVER_ID,
        "X-NCP-APIGW-API-KEY": process.env.NAVER_SECRET,
      },
    });

    const data = await response.json();
    // console.log("🔍 네이버 응답 데이터:", data); // 추가
    res.json(data);
  } catch (err) {
    console.error("API 요청 실패:", err);
    res.status(500).json({ error: "Failed to fetch address" });
  }
});

// 장소명으로 검색하는 API 추가
app.get("/api/search-place", async (req, res) => {
  const { keyword } = req.query;
  console.log("✅ 요청 도착:", keyword);
  if (!keyword) {
    return res
      .status(400)
      .json({ error: "keyword 쿼리 파라미터가 필요합니다." });
  }

  const encoded = encodeURIComponent(keyword);
  const url = `https://openapi.naver.com/v1/search/local.json?query=${encoded}&display=5&start=1&sort=sim`;

  try {
    const response = await fetch(url, {
      headers: {
        "X-Naver-Client-Id": process.env.NAVER_CLIENT_ID,
        "X-Naver-Client-Secret": process.env.NAVER_CLIENT_SECRET,
      },
    });
    console.log("🔵 네이버 응답 status:", response.status); // ✅ 추가

    const data = await response.json();
    console.log("🔍 네이버 응답 데이터:", data); // 추가
    console.log("전체 검색 결과 수:", data.total);
    console.log("받은 items 수:", data.items.length);
    res.json(data);
  } catch (error) {
    console.error("장소 검색 에러:", error);
    res.status(500).json({ error: "장소 검색 실패" });
  }
});

app.listen(5001, () => {
  console.log("✅ Server running at http://localhost:5001");
});
