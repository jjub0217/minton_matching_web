import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useDispatch, useStore } from "react-redux";
import { CancelButton } from "../../components/Button/CancelButton";
import { SaveButton } from "../../components/Button/SaveButton";
import { ActionButtons } from "../../components/Common/ActionButtons.style";
import { Form } from "../../components/Common/Form.style";
import { PageContainer } from "../../components/Common/PageContainer.style";
import { SelectField } from "../../components/FormField/SelectField";
import { TextField } from "../../components/FormField/TextField";
import { userInfo } from "../../data/user.json";
import { ExpandableReviewListSection } from "./components/ExpandableReviewListSection";
import { LocationSection } from "./components/LocationSection";
import { ProfileImageSection } from "./components/ProfileImageSection";
import { ProfileNicknameValue } from "./components/ProfileNicknameValue";
import {
  Count,
  MyPageButton,
  MyReviewList,
  ProfileActivitySection,
  ProfileInfo,
  ProfileInfoBox,
  ProfileInfoSection,
} from "./myPage.style";

export const MyPage = () => {
  console.log("MyPage 랜더링");
  const store = useStore();
  const reviews = useMemo(() => userInfo.reviews, []);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);

  const [isExpanded, setIsExpanded] = useState(false); // ✅ 추가: 더보기 여부 상태
  const reviewListRef = useRef(null); // ✅ 추가: 후기 리스트 영역 참조
  const [contentHeight, setContentHeight] = useState("0px"); // ✅ 추가

  const handleEditClick = useCallback(() => {
    setIsEditing((prev) => !prev);
  }, []);

  const handleSaveAll = (e) => {
    e.preventDefault();
    const formData = store.getState().user.formData; // ✅ formData 가져오기
    console.log("✅ 저장할 최종 formData:", formData);
  };

  const handleToggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };
  const getCollapsedHeight = () => {
    if (!reviewListRef.current) return "0px";
    const list = reviewListRef.current.querySelectorAll("li");
    const firstThree = Array.from(list).slice(0, 3);
    const height = firstThree.reduce((acc, li) => acc + li.offsetHeight, 0);
    const gapHeight = 12 * (firstThree.length - 1); // gap 포함
    return `${height + gapHeight}px`;
  };
  useEffect(() => {
    if (reviewListRef.current) {
      const height = isExpanded
        ? `${reviewListRef.current.scrollHeight + 24}px` // gap 보정치 수동 추가
        : getCollapsedHeight();
      setContentHeight(height);
    }
  }, [isExpanded, userInfo.reviews]);

  return (
    <PageContainer>
      <div className="inner">
        <Form onSubmit={handleSaveAll} $gap={"32px"}>
          <ProfileInfoSection>
            <ProfileImageSection />

            <ProfileInfoBox>
              <ProfileInfo>
                {isEditing ? (
                  <TextField
                    label="닉네임"
                    id="nickname"
                    type="text"
                    page="mypage"
                  />
                ) : (
                  <ProfileNicknameValue />
                )}
                <MyPageButton
                  className="nickname"
                  type="button"
                  onClick={handleEditClick}
                >
                  {isEditing ? "저장" : "수정"}
                </MyPageButton>
              </ProfileInfo>

              <ProfileInfo>
                <span className="label">가입일</span>
                <span className="labelValue">{userInfo.profile.joined}</span>
              </ProfileInfo>

              <SelectField
                label="실력 급수"
                id="skillLevel"
                type="select"
                page="mypage"
                options={[
                  { value: "Beginner", label: "Beginner" },
                  { value: "Intermediate", label: "Intermediate" },
                  { value: "Advanced", label: "Advanced" },
                  { value: "Pro", label: "Pro" },
                ]}
              />
              <LocationSection />
            </ProfileInfoBox>
          </ProfileInfoSection>

          <ProfileActivitySection>
            <ProfileInfo className="my-review">
              <span className="label">모임 참여횟수</span>
              <span className="labelValue">{userInfo.history.length}회</span>
            </ProfileInfo>

            <ProfileInfo className="my-review">
              <span className="label">모임에서 평가한 나의 점수</span>
              <span className="labelValue">
                {userInfo.stats.reviewScore} / 5.0
              </span>
            </ProfileInfo>

            <ExpandableReviewListSection reviews={reviews} />

            <ProfileInfo className="my-review">
              <span className="label">나에대한 좋았던 점</span>
              <div className="activity-row">
                <MyReviewList>
                  {userInfo.goodPoints
                    .sort((a, b) => b.count - a.count)
                    .map((point) => (
                      <li key={point.id}>
                        <FaCheckCircle />
                        <span className="label">{point.label}</span>
                        <Count>x {point.count}</Count>
                      </li>
                    ))}
                </MyReviewList>
              </div>
            </ProfileInfo>
          </ProfileActivitySection>

          <ActionButtons>
            <SaveButton page="mypage" />
            <CancelButton />
          </ActionButtons>
        </Form>
      </div>
    </PageContainer>
  );
};
