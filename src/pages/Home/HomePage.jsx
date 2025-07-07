import { MatchingCard } from "../../components/MatchingCard/MatchingCard";
import { NeighborhoodSelector } from "../../components/Neighborhood/NeighborhoodSelector";
import { SearchFilter } from "../../components/SearchFilter/SearchFilter";
import { cardList } from "../../data/cardList";
import { MatchingListWrapper, PageContainer } from "./HomePage.styles";

export const HomePage = () => {
  return (
    <PageContainer>
      <NeighborhoodSelector />
      <SearchFilter />
      <MatchingListWrapper>
        {cardList.map((card) => (
          <MatchingCard key={card.id} card={card} />
        ))}
      </MatchingListWrapper>
    </PageContainer>
  );
};
