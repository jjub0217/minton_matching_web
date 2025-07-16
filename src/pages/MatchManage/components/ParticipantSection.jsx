import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import { RiHourglassFill } from "react-icons/ri";

import { CheckIcon, ParticipationBox } from "../MatchManage.style";
import { ParticipationCard } from "./ParticipationCard";

export const ParticipantSection = ({ type, title, users }) => {
  return (
    <ParticipationBox>
      <h4 className="section-subtitle">
        <CheckIcon type={type}>
          {type === "approve" ? (
            <IoMdCheckmark />
          ) : type === "pending" ? (
            <RiHourglassFill />
          ) : (
            <IoMdClose />
          )}
        </CheckIcon>
        <span>{title}</span>
      </h4>

      <ul className="applicants-list" role="list">
        {users.map((user) => (
          <ParticipationCard key={user.id} user={user} />
        ))}
      </ul>
    </ParticipationBox>
  );
};
