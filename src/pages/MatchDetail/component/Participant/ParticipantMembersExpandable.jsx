import { useEffect, useRef, useState } from "react";
import {
  ParticipantsMemberList,
  ParticipantsMembers,
} from "./Participant.styles";
import { ParticipantMemberItem } from "./ParticipantMemberItem";

export const ParticipantMembersExpandable = ({ participants }) => {
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
        ? Math.ceil(totalItems / 10)
        : Math.ceil(visibleCount / 10);

      setContainerHeight(`${rowHeight * rowCount}px`);
    }
  }, [isExpanded, participants]);

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
        <button className="more-btn" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "접기" : "더보기"}
        </button>
      )}
    </>
  );
};
