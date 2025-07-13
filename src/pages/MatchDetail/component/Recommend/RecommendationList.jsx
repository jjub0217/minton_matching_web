import { useMemo } from "react";
import { FaPlus } from "react-icons/fa";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { RecommendationItem } from "./RecommendationItem";
import {
  MoreSlideButton,
  MoreSlideButtonBox,
  Section,
} from "./RecommendationList.styles";

export const RecommendationList = ({ recommendations }) => {
  const RecommendationSlides = useMemo(
    () => [
      ...recommendations.map((el) => (
        <SwiperSlide key={el.id}>
          <RecommendationItem {...el} />
        </SwiperSlide>
      )),

      // 마지막에 더보기 버튼
      <SwiperSlide className="more-button">
        <MoreSlideButtonBox>
          <MoreSlideButton onClick={() => alert("더보기로 이동!")}>
            <FaPlus />
          </MoreSlideButton>
        </MoreSlideButtonBox>
      </SwiperSlide>,
    ],
    [recommendations]
  );

  return (
    <Section>
      <h2 className="recommend-title">이런 모임도 추천해요</h2>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation={true}
        speed={600}
        slidesPerGroup={1}
        breakpoints={{
          375: {
            slidesPerView: 3.5,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 4.5,
            spaceBetween: 16,
          },
        }}
      >
        {RecommendationSlides}
      </Swiper>
    </Section>
  );
};
