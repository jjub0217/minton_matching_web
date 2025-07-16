// src/pages/MyPage/components/ExpandableReviewListSection.jsx
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { ExpandableReviewList, MoreButton, ProfileInfo } from "../myPage.style";

export const ExpandableReviewListSection = memo(({ reviews }) => {
  console.log("🧩 ExpandableReviewListSection 렌더링");

  const reviewListRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState("0px");

  const getCollapsedHeight = () => {
    if (!reviewListRef.current) return "0px";
    const list = reviewListRef.current.querySelectorAll("li");
    const firstThree = Array.from(list).slice(0, 3);
    const height = firstThree.reduce((acc, li) => acc + li.offsetHeight, 0);
    const gapHeight = 12 * (firstThree.length - 1);
    return `${height + gapHeight}px`;
  };

  useEffect(() => {
    if (reviewListRef.current) {
      const height = isExpanded
        ? `${reviewListRef.current.scrollHeight + 24}px`
        : getCollapsedHeight();
      setContentHeight(height);
    }
  }, [isExpanded, reviews]);

  const handleToggleExpand = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  return (
    <ProfileInfo className="my-review">
      <span className="label">나에대한 후기</span>
      <div className="activity-row">
        <ExpandableReviewList
          ref={reviewListRef}
          style={{ maxHeight: contentHeight }}
        >
          {reviews.map((el) => (
            <li key={el.id}>{el.review}</li>
          ))}
        </ExpandableReviewList>

        {reviews.length > 3 && (
          <MoreButton type="button" onClick={handleToggleExpand}>
            {isExpanded ? "접기" : "더보기"}
          </MoreButton>
        )}
      </div>
    </ProfileInfo>
  );
});
