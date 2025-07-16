import { IoNotifications } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { CreateMatchingButton } from "../../components/Button/CreateMatchingButton";
import { MatchingCard } from "../../components/MatchingCard/MatchingCard";
import { NeighborhoodSelector } from "../../components/Neighborhood/NeighborhoodSelector";
import { SearchFilter } from "../../components/SearchFilter/SearchFilter";
import { cardList } from "../../data/cardList";
import {
  BarIcon,
  MatchingListWrapper,
  Nav,
  PageContainer,
} from "./MainPage.styles";
export const MainPage = () => {
  const navigate = useNavigate();
  const handleToMyPage = (e) => {
    e.preventDefault();
    navigate(`/mypage`);
  };
  const handleToNotificationPage = (e) => {
    e.preventDefault();
    navigate(`/notification`);
  };
  return (
    <PageContainer $padding={"0"}>
      <div className="inner">
        <Nav>
          <BarIcon onClick={handleToNotificationPage}>
            <IoNotifications size={24} />
          </BarIcon>
          <BarIcon onClick={handleToMyPage}>
            <RxAvatar color="#fff" size={26} />
          </BarIcon>
        </Nav>
        <NeighborhoodSelector />
        <SearchFilter />
        <MatchingListWrapper>
          {cardList.map((card) => (
            <MatchingCard key={card.id} card={card} />
          ))}
        </MatchingListWrapper>
        <CreateMatchingButton />
      </div>
    </PageContainer>
  );
};
