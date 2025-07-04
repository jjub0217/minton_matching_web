import { useMemo } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { RecommendationItem } from "./RecommendationItem";
import { RecommendationContainer } from "./Recommendations.styles";
export const Recommendations = ({ recommendations }) => {
  console.log(recommendations);

  const RecommendationSlides = useMemo(
    () =>
      recommendations.map((el) => (
        <SwiperSlide key={el.id}>
          <RecommendationItem {...el} />
        </SwiperSlide>
      )),
    [recommendations]
  );
  return (
    <RecommendationContainer>
      <h2 className="recommend-title">이런 모임도 추천해요</h2>
      <Swiper
        spaceBetween={16}
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={2.5}
        navigation={true}
        speed={600}
        slidesPerGroup={1}
        breakpoints={
          {
            // 320: {
            //   slidesPerView: 3.5,
            // },
            // 640: {
            //   slidesPerView: 3.5,
            // },
            // 768: {
            //   slidesPerView: 6.5,
            // },
            // 1024: {
            //   slidesPerView: 9.5,
            // },
            // 1279: {
            //   slidesPerView: 6.2,
            // },
            // 1920: {
            //   slidesPerView: 3.5,
            // },
          }
        }
      >
        {RecommendationSlides}
      </Swiper>
    </RecommendationContainer>
  );
};
