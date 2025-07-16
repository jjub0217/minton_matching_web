import { memo } from "react";
import { SelectRadioField } from "../../../components/FormField/SelectRadioField";
import { REVIEW_GOOD_POINTS } from "../../../constant/reviewGoodPont";
import { ParticipantsSelections } from "./selector.style";

export const GoodPointSelector = memo(() => {
  return (
    <ParticipantsSelections>
      {REVIEW_GOOD_POINTS.map((item) => (
        <SelectRadioField
          key={item.id}
          id="selectedGoodPoint"
          label={item.value}
        />
      ))}
    </ParticipantsSelections>
  );
});
