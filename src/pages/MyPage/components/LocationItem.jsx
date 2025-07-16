import { memo } from "react";
import { Location, MyPageButton } from "../myPage.style";

export const LocationItem = memo(({ el, onDelete, id }) => {
  console.log("LocationItem 랜더링");

  return (
    <Location>
      {el}
      <MyPageButton onClick={() => onDelete(id)}>삭제</MyPageButton>
    </Location>
  );
});
