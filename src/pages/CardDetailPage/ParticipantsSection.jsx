import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ParticipantItem } from "../../components/ParticipantItem/ParticipantItem";

const ParticipantsListWrapper = styled.div`
  overflow: hidden;
  transition: height 0.4s ease;
  margin-bottom: 18px;
`;

const ParticipantsBox = styled.div`
  .more-btn {
    display: block;
    margin: 12px auto 18px auto;
    background: #222;
    color: #60a5fa;
    border: none;
    border-radius: 8px;
    padding: 7px 20px;
    font-size: 15px;
    cursor: pointer;
    font-weight: 500;
    transition: background 0.2s, color 0.2s;
  }
`;

// participants-list
export const ParticipantsList = styled.ul`
  display: grid;
  gap: 16px;
  column-gap: 30px;
  grid-template-columns: repeat(5, 1fr);
  flex-wrap: wrap;
  margin-bottom: 18px;
`;

export const ParticipantsSection = ({ participants }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [containerHeight, setContainerHeight] = useState("0px");
  const listRef = useRef(null);

  const visibleCount = 5;
  console.log(participants);

  useEffect(() => {
    if (listRef.current) {
      const children = listRef.current.children;
      const totalItems = children.length;
      const rowHeight = children[0]?.offsetHeight + 16 || 0;
      const rowCount = isExpanded
        ? Math.ceil(totalItems / 5)
        : Math.ceil(visibleCount / 5);

      setContainerHeight(`${rowHeight * rowCount}px`);
    }
  }, [isExpanded, participants]);

  return (
    <ParticipantsBox>
      <ParticipantsListWrapper style={{ height: containerHeight }}>
        <ParticipantsList ref={listRef}>
          {participants.map((el) => (
            <ParticipantItem {...el} key={el.id} />
          ))}
        </ParticipantsList>
      </ParticipantsListWrapper>

      {participants.length > visibleCount && (
        <button className="more-btn" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "접기" : "더보기"}
        </button>
      )}
    </ParticipantsBox>
  );
};
