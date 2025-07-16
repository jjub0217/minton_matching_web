import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;

app.get("/api/reverse-geocode", async (req, res) => {
  const { lat, lon } = req.query;

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
    res.json(data);
  } catch (err) {
    console.error("API 요청 실패:", err);
    res.status(500).json({ error: "Failed to fetch address" });
  }
});

app.get("/api/search-place", async (req, res) => {
  const { keyword } = req.query;

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
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("장소 검색 에러:", error);
    res.status(500).json({ error: "장소 검색 실패" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
