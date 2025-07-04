import { useState } from "react";
import { Button } from "./Button.styles";

export const LikeButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite((prev) => !prev);
  };

  return (
    <Button
      type="button"
      onClick={toggleFavorite}
      $isFavorite={isFavorite}
      title="좋아요"
    >
      <span className="heart">♥</span>
    </Button>
  );
};
