import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import { CardDetailPage } from "./pages/CardDetailPage/CardDetailPage";
import { MainPage } from "./pages/MainPage";
import { UserProfilePage } from "./pages/UserProfilePage/UserProfilePage";

const Container = styled.div`
  max-width: 800px;
  min-width: 480px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 640px) {
    padding: 15px;
  }
`;

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/detail/:id" element={<CardDetailPage />} />
      <Route path="/userInfo/:userId" element={<UserProfilePage />} />
    </Routes>
  );
}

export default App;
