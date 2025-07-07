import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home/HomePage";
import { MatchDetailPage } from "../pages/MatchDetail/MatchDetailPage";
import { UserProfilePage } from "../pages/UserProfile/UserProfilePage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail/:id" element={<MatchDetailPage />} />
      <Route path="/userInfo/:userId" element={<UserProfilePage />} />
    </Routes>
  );
};
