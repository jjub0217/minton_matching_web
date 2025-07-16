import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// __dirname 세팅 (ESM 환경용)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS 설정
app.use(cors());
app.use(express.json());

// React 정적 파일 서빙
app.use(express.static(path.join(__dirname, "../dist")));

app.get("/{*any}", (req, res, next) => {
  // API 경로일 경우 다음 미들웨어로 넘김
  if (req.path.startsWith("/api/")) return next();
  // 그 외 모든 경로는 React 앱의 index.html 반환
  res.sendFile(path.resolve(__dirname, "../dist/index.html"));
});

// 네이버 역지오코딩 API 프록시
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

// 네이버 장소 검색 API 프록시
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

// 서버 시작
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
