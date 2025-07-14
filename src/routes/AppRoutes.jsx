import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/Landing/LandingPage";
import { LoginPage } from "../pages/Login/LoginPage";
import { MainPage } from "../pages/Main/MainPage";
import { MapPage } from "../pages/MatchCreate/MapPage";
import { MatchCreatePage } from "../pages/MatchCreate/MatchCreatePage";
import { MatchCreateSuccessPage } from "../pages/MatchCreate/MatchCreateSuccessPage";
import { SearchPlacePage } from "../pages/MatchCreate/SearchPlacePage";
import { MatchDetailPage } from "../pages/MatchDetail/MatchDetailPage";
import { MatchManagePage } from "../pages/MatchManage/MatchManagePage";
import { MatchReviewPage } from "../pages/MatchReview/MatchReviewPage";
import { MyPage } from "../pages/MyPage/MyPage";
import { NotificationPage } from "../pages/Notification/NotificationPage";
import { ParticipantReviewPage } from "../pages/ParticipantReview/ParticipantReviewPage";
import { UserProfilePage } from "../pages/UserProfile/UserProfilePage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/main" element={<MainPage />} />
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
      <Route path="/review/:id" element={<MatchReviewPage />} />
      <Route
        path="/participant-review/:id"
        element={<ParticipantReviewPage />}
      />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/notification" element={<NotificationPage />} />
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};
