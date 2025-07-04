import styled from "styled-components";
import { FilterSection } from "../components/FilterSection/FilterSection";
import { MatchingCard } from "../components/MatchingCard/MatchingCard";
import { MyNeighborhoods } from "../components/MyNeighborhoods/MyNeighborhoods";
import { cardList } from "../data/cardList";

const PageContainer = styled.div`
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

const MatchingList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 600px;
  min-width: 440px;
`;

export const MainPage = () => {
  return (
    <PageContainer>
      <MyNeighborhoods />
      <FilterSection />
      <MatchingList>
        {cardList.map((card) => (
          <MatchingCard key={card.id} card={card} />
        ))}
      </MatchingList>
    </PageContainer>
  );
};
