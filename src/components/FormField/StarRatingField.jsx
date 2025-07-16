import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateField as updateMemberReviewForm } from "../../slice/memberReviewFormSlice";
import { updateField as updateReviewForm } from "../../slice/reviewFormSlice";
import { FormField } from "./FormField";
import { StarRating } from "./StarRating";

export const StarRatingField = memo(({ label, id, type }) => {
  console.log("StarRatingField 렌더링");
  const dispatch = useDispatch();
  const value =
    id === "reviewRating"
      ? useSelector((state) => state.reviewForm.reviewRating)
      : useSelector((state) => state.memberReviewForm.reviewRating);
  const handleChange = (val) => {
    if (id === "reviewRating") {
      dispatch(updateReviewForm({ name: "reviewRating", value: val }));
    } else {
      dispatch(updateMemberReviewForm({ name: "reviewRating", value: val }));
    }
  };
  return (
    <FormField label={label} id={id} type={type}>
      <StarRating value={Number(value)} onChange={handleChange} />
    </FormField>
  );
});
