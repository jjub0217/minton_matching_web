import "./App.css";

import styled from "styled-components";
import { FilterSection } from "./components/FilterSection";
import { Main } from "./components/Main";
import { MyNeighborhoods } from "./components/MyNeighborhoods";

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
    <Container>
      <MyNeighborhoods />
      <FilterSection />
      <Main />
    </Container>
  );
}

export default App;
