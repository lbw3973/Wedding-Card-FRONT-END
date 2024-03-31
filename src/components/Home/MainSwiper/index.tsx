import * as S from "./style";

import { Swiper, SwiperSlide } from "swiper/react"; // basic
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";

const MainSwiper = () => {
  const images = ["img1.png", "img2.png", "img3.png", "img4.png"];
  const imgName = ["모던웨딩", "서울숲", "성수웨딩", "강남웨딩"];
  const [currentIndex, setCurrentIndex] = useState(1);
  const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);

  const handleChangeSwiper = (e: { realIndex: number }) => {
    setCurrentIndex(e.realIndex + 1);
    setCurrentAnimationIndex(e.realIndex);
  };

  return (
    <S.SwiperContainer>
      <Swiper
        className="swiper"
        effect="fade"
        modules={[Navigation, Autoplay, EffectFade]}
        slidesPerView={1}
        autoplay={{ delay: 500 }}
        loop={true}
        onSlideChange={handleChangeSwiper}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="swiperslide">
            <S.SwiperImage src={img} alt="" />
            <S.SwiperImageTag className={currentAnimationIndex === index ? "animate" : ""}>
              {imgName[index]}
            </S.SwiperImageTag>
          </SwiperSlide>
        ))}
        <span>
          {currentIndex}/{images.length}
        </span>
      </Swiper>
    </S.SwiperContainer>
  );
};

export default MainSwiper;
