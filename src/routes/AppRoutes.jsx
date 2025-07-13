import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home/HomePage";
import { MapPage } from "../pages/MatchCreate/MapPage";
import { MatchCreatePage } from "../pages/MatchCreate/MatchCreatePage";
import { MatchCreateSuccessPage } from "../pages/MatchCreate/MatchCreateSuccessPage";
import { SearchPlacePage } from "../pages/MatchCreate/SearchPlacePage";
import { MatchDetailPage } from "../pages/MatchDetail/MatchDetailPage";
import { MatchManagePage } from "../pages/MatchManage/MatchManagePage";
import { MatchReviewPage } from "../pages/MatchReview/MatchReviewPage";
import { MyPage } from "../pages/MyPage/MyPage";
import { ParticipantReviewPage } from "../pages/ParticipantReview/ParticipantReviewPage";
import { UserProfilePage } from "../pages/UserProfile/UserProfilePage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail/:id" element={<MatchDetailPage />} />
      <Route path="/userInfo/:userId" element={<UserProfilePage />} />
      <Route path="/match/create" element={<MatchCreatePage />} />
      <Route path="/match/create/search-place" element={<SearchPlacePage />} />
      <Route path="/match/create/map" element={<MapPage />} />
      <Route
        path="/match/create/success"
        element={<MatchCreateSuccessPage />}
      />
      <Route path="/match/manage" element={<MatchManagePage />} />
      <Route path="/:id/review" element={<MatchReviewPage />} />
      <Route path="/:id/participant" element={<ParticipantReviewPage />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
};
