import { useState } from "react";
import { FavoriteButton } from "../Common/Button.styles";

export const LikeButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite((prev) => !prev);
  };

  return (
    <FavoriteButton type="button" onClick={toggleFavorite} title="좋아요">
      <span className="heart">♥</span>
    </FavoriteButton>
  );
};
