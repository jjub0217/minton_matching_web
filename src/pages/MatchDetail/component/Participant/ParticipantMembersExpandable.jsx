import { useEffect, useRef, useState } from "react";
import { ParticipantMemberItem } from "./ParticipantMemberItem";
import {
  ParticipantsMemberList,
  ParticipantsMembers,
} from "./ParticipantsContainer.styles";

export const ParticipantMembersExpandable = ({ participants }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [containerHeight, setContainerHeight] = useState("0px");
  const listRef = useRef(null);
  const buttonRef = useRef(null);

  const visibleCount = 5;

  useEffect(() => {
    if (listRef.current) {
      const children = listRef.current.children;
      const totalItems = children.length;
      const rowHeight = children[0]?.offsetHeight + 16 || 0;
      const rowCount = isExpanded
        ? Math.ceil(totalItems / 10)
        : Math.ceil(visibleCount / 10);

      setContainerHeight(`${rowHeight * rowCount}px`);
    }
  }, [isExpanded, participants]);

  useEffect(() => {
    if (buttonRef.current && isExpanded) {
      buttonRef.current.focus(); // 다시 초점 부여
    }
  }, [isExpanded]);
  return (
    <>
      <ParticipantsMembers style={{ height: containerHeight }}>
        <ParticipantsMemberList ref={listRef}>
          {participants.map((el) => (
            <ParticipantMemberItem {...el} key={el.id} />
          ))}
        </ParticipantsMemberList>
      </ParticipantsMembers>

      {participants.length > visibleCount && (
        <button
          type="button"
          className="more-btn"
          ref={buttonRef}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "접기" : "더보기"}
        </button>
      )}
    </>
  );
};
