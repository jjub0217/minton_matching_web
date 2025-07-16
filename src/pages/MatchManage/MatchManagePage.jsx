import { CancelButton } from "../../components/Button/CancelButton";
import { SaveButton } from "../../components/Button/SaveButton";
import { ActionButtons } from "../../components/Common/ActionButtons.style";
import {
  PageContainer,
  PageContainerTitle2,
  PageContainerTitle3,
} from "../../components/Common/PageContainer.style";
import { match } from "../../data/manageMatch.json";
import { ParticipantSection } from "./components/ParticipantSection";
import { StatusSummary } from "./components/StatusSummary";
import {
  AdditionalInfo,
  InfoIcon,
  MatchMetaInfo,
  ParticipantListSection,
  ParticipationHeaderBox,
} from "./MatchManage.style";

export const MatchManagePage = () => {
  console.log(match);

  const approvedList = match.participants.filter(
    (el) => el.state === "approval"
  );
  const pendingList = match.participants.filter((el) => el.state === "pending");
  const rejectedList = match.participants.filter((el) => el.state === "reject");

  return (
    <PageContainer>
      <div className="inner">
        <PageContainerTitle2 $margin={"20px 0 24px"}>
          매칭관리
        </PageContainerTitle2>

        <section aria-labelledby="match-meta-heading">
          <PageContainerTitle3 id="match-meta-heading" $margin={"24px 0 12px"}>
            {match.title}
          </PageContainerTitle3>

          <MatchMetaInfo>
            <span>{match.time}</span>
            <span>{match.place}</span>
            <p className="meta-info">
              <span>{match.participants.length}명</span>
              <span>
                ({match.currentCapacity}/{match.capacity} 참가)
              </span>
            </p>
          </MatchMetaInfo>
        </section>

        <ParticipantListSection>
          <ParticipationHeaderBox>
            <h4 className="container-header">신청자 목록</h4>
            <StatusSummary
              approved={approvedList.length}
              pending={pendingList.length}
              rejected={rejectedList.length}
            />
          </ParticipationHeaderBox>

          <AdditionalInfo aria-label="신청 안내 사항">
            <InfoIcon />
            <p className="additional-info">
              급수 조건에 맞는 참가자는 자동으로 승인됩니다.
              <br />
              무단 불참 시 자동으로 패널티가 부여됩니다.
              <br />
              매너 문제는 모임 종료 후 참가자 평가를 통해 반영됩니다.
            </p>
          </AdditionalInfo>

          <ParticipantSection
            title="자동 승인된 참가자"
            type={"approve"}
            users={approvedList}
          />
          <ParticipantSection
            title="승인 대기 중"
            type={"pending"}
            users={pendingList}
          />
          <ParticipantSection
            title="거절된 참가자"
            type={"reject"}
            users={rejectedList}
          />
        </ParticipantListSection>

        <ActionButtons>
          <SaveButton />
          <CancelButton />
        </ActionButtons>
      </div>
    </PageContainer>
  );
};
