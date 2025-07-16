import { useNavigate } from "react-router-dom";
import { MainButton } from "../../components/Common/Button.styles";
import { Footer, Header, PageContainer, Section } from "./LandingPage.style";

export const LandingPage = () => {
  const navigate = useNavigate();

  const handleToMain = () => {
    navigate(`/login`);
  };
  return (
    <>
      <PageContainer height={"100vh"}>
        <div className="inner">
          <Header>
            <h1>운동갈래</h1>
            <p className="app-slogan">오늘 같이 운동할 사람 없나?</p>
            <p className="app-slogan">내 주변 같이 운동할 사람을 찾아보세요.</p>
            <MainButton className="main-button" onClick={handleToMain}>
              지금 시작하기
            </MainButton>
          </Header>
          <Section>
            <h2>운동갈래 주요 기능</h2>
            <ul>
              <li>
                <strong>모든 스포츠 매칭</strong>
                <span>
                  배드민턴, 탁구, 농구, 축구 등 다양한 종목에서 운동 친구를 쉽게
                  찾을 수 있어요.
                </span>
              </li>
              <li>
                <strong>스마트 자동/수동 승인</strong>
                <span>
                  급수, 신뢰도 등 조건에 따라 자동 승인! 끼리끼리 문화를
                  방지하고, 새로운 만남을 응원합니다.
                </span>
              </li>
              <li>
                <strong>리뷰 & 후기 시스템</strong>
                <span>
                  별점, 코멘트, 복수 선택 평가로 운동 경험을 서로 나눌 수
                  있어요.
                </span>
              </li>
              <li>
                <strong>무단 불참 자동 페널티</strong>
                <span>
                  신뢰도 높은 운동 문화를 위해, 무단 불참 시 자동으로 패널티가
                  부여됩니다.
                </span>
              </li>
              <li>
                <strong>프로필 & 신뢰도</strong>
                <span>
                  참여 이력, 후기, 신뢰도 점수 등 내 운동 라이프를 한눈에!
                </span>
              </li>
              <li>
                <strong>실시간 알림</strong>
                <span>
                  매칭 확정, 대기, 리뷰 요청 등 주요 이벤트를 실시간으로
                  안내받으세요.
                </span>
              </li>
            </ul>
          </Section>
          <Footer>
            <p>© 2024 운동갈래. 모두가 함께하는 스포츠 커뮤니티</p>
          </Footer>
        </div>
      </PageContainer>
    </>
  );
};
