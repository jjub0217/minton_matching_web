import { memo } from "react";
import { SelectRadioField } from "../../../components/FormField/SelectRadioField";
import { meetingDetail } from "../../../data/cardDetail";
import { ParticipantsSelections } from "./selector.style";

export const ParticipantSelector = memo(() => {
  return (
    <ParticipantsSelections>
      {meetingDetail.participants.list.map((item) => (
        <SelectRadioField
          key={item.id}
          id="selectedMember"
          label={item.userName}
        />
      ))}
    </ParticipantsSelections>
  );
});
