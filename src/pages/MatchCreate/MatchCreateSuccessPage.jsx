import { IoMdCheckmark } from "react-icons/io";
import { useSelector } from "react-redux";
import { HomeButton } from "../../components/Button/HomeButton";
import { MatchManageButton } from "../../components/Button/MatchManageButton";
import {
  PageContainerTitle2,
  PageContainerTitle3,
} from "../../components/Common/PageContainer.style";
import {
  CheckIcon,
  MatchAdditionalInfo,
  MatchSummaryItem,
  MatchSummaryList,
  PageActions,
  PageContainer,
  SummaryMatchSection,
} from "./MatchCreatePage.style";

export const MatchCreateSuccessPage = () => {
  console.log("✅ MatchCreateSuccessPage 렌더링");
  const formData = useSelector((state) => state.matchForm);

  const summaryMap = [
    { label: "제목", value: formData.title },
    { label: "날짜", value: formData.date },
    { label: "장소", value: formData.place },
    { label: "참여 정원", value: `${formData.capacity}명` },
    { label: "급수", value: formData.level },
  ];

  return (
    <PageContainer height={"100vh"}>
      <div className="inner">
        <CheckIcon>
          <IoMdCheckmark />
        </CheckIcon>

        <PageContainerTitle2 $margin={"20px 0 16px"}>
          매칭이 성공적으로 생성되었습니다!
        </PageContainerTitle2>
        <p className="completion-message">
          매칭이 등록되었습니다. 참가자들의 신청을 기다려보세요.
        </p>

        <SummaryMatchSection aria-labelledby="summary-match-title">
          <PageContainerTitle3 id="summary-match-title" $margin={"18px 0 16px"}>
            생성된 매칭 정보
          </PageContainerTitle3>
          <MatchSummaryList>
            {summaryMap.map((el, i) => (
              <MatchSummaryItem key={i}>
                <span className="label">{el.label}:</span>
                <span className="value">{el.value}</span>
              </MatchSummaryItem>
            ))}
          </MatchSummaryList>
        </SummaryMatchSection>

        <PageActions>
          <HomeButton />
          <MatchManageButton />
        </PageActions>

        <MatchAdditionalInfo aria-label="추가 안내">
          <p>
            * 매칭 관리에서 신청자 목록을 확인하고 참가 여부를 결정할 수
            있습니다.
          </p>
          <p>* 매칭 정보는 언제든지 수정할 수 있습니다.</p>
        </MatchAdditionalInfo>
      </div>
    </PageContainer>
  );
};
