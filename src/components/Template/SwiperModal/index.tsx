import * as S from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { useState } from "react";
import { IoCloseOutline, IoChevronBack, IoChevronForward } from "react-icons/io5";

const SwiperModal = ({
  images,
  curSwiperImageIndex,
  setCurSwiperImageIndex,
}: {
  images: string[];
  curSwiperImageIndex: number;
  setCurSwiperImageIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);

  return (
    <S.SwiperModalContainer>
      <div className="wrapper">
        <Swiper initialSlide={curSwiperImageIndex - 1} onSwiper={setSwiper}>
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={`${import.meta.env.VITE_AWS_S3_URL}/${image}`} alt={`슬라이드 이미지_${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="tools">
          <div
            onClick={() => {
              swiper && swiper.slidePrev();
            }}
          >
            <IoChevronBack color="#fff" size={20} />
          </div>
          <div
            onClick={() => {
              swiper && swiper.slideNext();
            }}
          >
            <IoChevronForward color="#fff" size={20} />
          </div>
          <div onClick={() => setCurSwiperImageIndex(0)}>
            <IoCloseOutline color="#fff" size={20} />
          </div>
        </div>
      </div>
    </S.SwiperModalContainer>
  );
};

export default SwiperModal;
