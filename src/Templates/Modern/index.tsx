import { getDateMonthDay, getDateWithDots, getDayWithTime, getDday, getFullDate } from "@/utils/parseDate";
import * as S from "./style";
import MockData from "@/mock/JSONData.json";
import { IoCall } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import Calendar from "react-calendar";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { FcLike } from "react-icons/fc";
import { IoIosClose } from "react-icons/io";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import { RiKakaoTalkFill } from "react-icons/ri";
import { HiOutlineLink } from "react-icons/hi";
import { Fragment, useEffect, useRef, useState } from "react";
import LocationCard from "@/components/Common/LocationCard";
import { applyStyles } from "@/utils/parseInlineStyle";
import Bgm from "@/components/Template/Bgm";
import guestBook from "@/mock/GuestBook.json";
import { copyLink } from "@/utils/copyLink";
import YouTube from "react-youtube";
import { shareKakao } from "@/utils/shareKakao";
import SwiperModal from "@/components/Template/SwiperModal";
import galleryImages from "@/mock/GalleryImages.json";
import { IResInvitation } from "@/types/invitation";

const tileClassName = ({ date, view }: { date: Date; view: string }) => {
  if (view === "month") {
    if (date.getDay() === 6) {
      return "saturday";
    }
  }
};

const formatDay = (_locale: string | undefined, date: Date) => {
  return date.getDate().toString();
};

const Modern = (data: IResInvitation) => {
  console.log(data);
  const date = getDateMonthDay(new Date(MockData.date));
  const [topSwiper, setTopSwiper] = useState<SwiperCore | null>(null);
  const [bottomSwiper, setBottomSwiper] = useState<SwiperCore | null>(null);
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [accountModal, setAccountModal] = useState(false);
  const [accountInfo, setAccountInfo] = useState(false);
  const [currentGuestBookPage, setCurrentGuestBookPage] = useState(1);
  const containerRef = useRef<HTMLInputElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);
  const [curSwiperImageIndex, setCurSwiperImageIndex] = useState(0);

  const itemsPerPage = 5;
  const indexOfLastItem = currentGuestBookPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = guestBook.guestbook.slice(indexOfFirstItem, indexOfLastItem);

  const addItemRef = (el: HTMLDivElement) => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current.push(el);
    }
  };

  useEffect(() => {
    if (topSwiper?.swipeDirection === "next") {
      if (swiperIndex >= 3) {
        bottomSwiper?.slideNext();
      }
    } else {
      if (topSwiper?.slides) {
        if (swiperIndex <= (topSwiper?.slides.length as number) - 4) {
          bottomSwiper?.slidePrev();
        }
      }
    }
  }, [swiperIndex]);

  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
    }
  }, []);

  useEffect(() => {
    if (itemRefs.current.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px", threshold: 0.2 },
    );

    itemRefs.current.forEach(el => {
      observer.observe(el);
    });

    return () => {
      itemRefs.current.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, [itemRefs.current.length]);

  const clickBottomImage = (index: number) => {
    if (topSwiper) {
      topSwiper.slideTo(index);
    }
  };

  const clickRoadMap = (e: React.MouseEvent<HTMLDivElement>) => {
    let target = e.target as HTMLElement;
    while (target !== null && target.id === "") {
      target = target.parentNode as HTMLElement;
    }
    console.log(target);
    let url = "";

    switch (target.id) {
      case "naver":
        url = `https://map.naver.com/v5/search/${encodeURIComponent(MockData.location.address)}`;
        break;
      case "kakao":
        url = `https://map.kakao.com/?q=${encodeURIComponent(MockData.location.address)}`;
        break;
      case "tmap":
        url = `https://apis.openapi.sk.com/tmap/app/routes?appKey=${import.meta.env.VITE_TMAP_APP_KEY}&name=${MockData.location.address}&lon=${MockData.location.longitude}&lat=${MockData.location.latitude}`;
        break;
      default:
        return;
    }
    window.open(url, "_blank");
  };

  const clickAccountModal = (e: boolean) => {
    setAccountModal(!accountModal);
    setAccountInfo(e);
  };

  const clickCloseModal = () => {
    setAccountModal(!accountModal);
  };

  const clickPostMessage = () => {};
  const clickRemoveWrite = () => {};

  const clickOpenImageModal = (index: number) => {
    setCurSwiperImageIndex(index);
  };
  const handleClickCopyAccount = (account: string) => {
    navigator.clipboard
      .writeText(account)
      .then(() => {
        alert("계좌 번호가 클립보드에 복사되었습니다.");
      })
      .catch(err => {
        console.error("클립보드 복사에 실패했습니다.", err);
      });
  };

  const handleClickGuestBookPagination = (index: number) => {
    setCurrentGuestBookPage(index);
  };

  const handleClickShareKakao = () => {
    shareKakao({
      title: MockData.open_graph.title,
      description: MockData.open_graph.subtitle,
      imageUrl: "https://avatars.githubusercontent.com/u/75530371?v=4",
      link: window.location.href,
    });
  };

  const handleSlideChange = (e: { realIndex: number }) => {
    setSwiperIndex(e.realIndex);
  };

  return (
    <S.Container ref={containerRef}>
      <Bgm audioNumber={MockData.contents.bgm} />
      <S.Page1Div ref={addItemRef} className="observer">
        <S.Page1Date>
          <p>
            {date.split("").map((char, index) => (
              <Fragment key={index}>
                {index === 2 ? <span>月</span> : null}
                <span>{char}</span>
                {index === 3 ? <span>日</span> : null}
              </Fragment>
            ))}
          </p>
        </S.Page1Date>
        <img src="/img1.jpg" alt="사진" />
        <S.Page1Info>
          <h1>
            {MockData.HUSBAND.ME.name} / {MockData.WIFE.ME.name}
          </h1>
          <h2>{getDayWithTime(new Date(MockData.date))}</h2>
          <h2>{MockData.location.wedding_hall}</h2>
        </S.Page1Info>
      </S.Page1Div>
      <S.Page2Div ref={addItemRef} className="observer">
        <S.Page2Text>
          {MockData.welcome.map((data, index) => (
            <h1 key={index}>{data.text}</h1>
          ))}
        </S.Page2Text>
        <S.Page2Name>
          <h2>
            {MockData.HUSBAND.FATHER.name} · {MockData.HUSBAND.MOTHER.name}
            <span>의 {MockData.HUSBAND.relationship}</span>
            {` ${MockData.HUSBAND.ME.name}`}
          </h2>
          <h2>
            {MockData.WIFE.FATHER.name} · {MockData.WIFE.MOTHER.name}
            <span>의 {MockData.WIFE.relationship}</span>
            {` ${MockData.WIFE.ME.name}`}
          </h2>
        </S.Page2Name>
      </S.Page2Div>
      <S.Page3Div ref={addItemRef} className="observer">
        <p>소중한 당신을 초대합니다.</p>
      </S.Page3Div>
      <S.Page4Div ref={addItemRef} className="observer">
        <div>
          <h1>신랑에게 연락하기</h1>
          <a href={`tel:${MockData.HUSBAND.ME.contact}`}>
            <button className="call">
              <IoCall color="#fff" />
            </button>
          </a>
          <a href={`sms:${MockData.HUSBAND.ME.contact}`}>
            <button className="message">
              <MdOutlineMessage color="#fff" />
            </button>
          </a>
        </div>
        <div>
          <h1>신부에게 연락하기</h1>
          <a href={`tel:${MockData.HUSBAND.ME.contact}`}>
            <button className="call">
              <IoCall color="#fff" />
            </button>
          </a>
          <a href={`sms:${MockData.HUSBAND.ME.contact}`}>
            <button className="message">
              <MdOutlineMessage color="#fff" />
            </button>
          </a>
        </div>
      </S.Page4Div>
      <S.Page5Div ref={addItemRef} className="observer">
        <p>혼주에게 연락하기</p>
        <S.Page5Data>
          <div>
            <h1>신랑 측 혼주</h1>
            <div>
              <span>
                <span>아버지 </span>
                <span>{MockData.HUSBAND.FATHER.name}</span>
              </span>
              <div>
                <a href={`tel:${MockData.HUSBAND.FATHER.contact}`}>
                  <button className="call">
                    <IoCall color="#fff" />
                  </button>
                </a>
                <a href={`sms:${MockData.HUSBAND.FATHER.contact}`}>
                  <button className="message">
                    <MdOutlineMessage color="#fff" />
                  </button>
                </a>
              </div>
            </div>
            <div>
              <span>
                <span>어머니 </span>
                <span>{MockData.HUSBAND.MOTHER.name}</span>
              </span>
              <div>
                <a href={`tel:${MockData.HUSBAND.MOTHER.contact}`}>
                  <button className="call">
                    <IoCall color="#fff" />
                  </button>
                </a>
                <a href={`sms:${MockData.HUSBAND.MOTHER.contact}`}>
                  <button className="message">
                    <MdOutlineMessage color="#fff" />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div>
            <h1>신부 측 혼주</h1>
            <div>
              <span>
                <span>아버지 </span>
                <span>{MockData.WIFE.FATHER.name}</span>
              </span>
              <div>
                <a href={`tel:${MockData.WIFE.FATHER.contact}`}>
                  <button className="call">
                    <IoCall color="#fff" />
                  </button>
                </a>
                <a href={`sms:${MockData.WIFE.FATHER.contact}`}>
                  <button className="message">
                    <MdOutlineMessage color="#fff" />
                  </button>
                </a>
              </div>
            </div>
            <div>
              <span>
                <span>어머니 </span>
                <span>{MockData.WIFE.MOTHER.name}</span>
              </span>
              <div>
                <a href={`tel:${MockData.WIFE.MOTHER.contact}`}>
                  <button className="call">
                    <IoCall color="#fff" />
                  </button>
                </a>
                <a href={`sms:${MockData.WIFE.MOTHER.contact}`}>
                  <button className="message">
                    <MdOutlineMessage color="#fff" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </S.Page5Data>
      </S.Page5Div>

      <S.Page6CalendarWrapper ref={addItemRef} className="observer">
        <div className="date">
          <p className="yymmdd">{getDateWithDots(new Date(MockData.date))}</p>
          <p className="ddhhmm">{getDayWithTime(new Date(MockData.date))}</p>
        </div>
        <div className="calendar">
          <Calendar
            value={new Date(MockData.date)}
            formatDay={formatDay}
            calendarType="gregory"
            tileClassName={tileClassName}
          />
        </div>
        <div className="d-day">
          <p>
            {MockData.HUSBAND.ME.name} <FcLike /> {MockData.WIFE.ME.name}의 결혼식이&nbsp;
            <span>{getDday(new Date(MockData.date))}일</span> 남았습니다.
          </p>
        </div>
      </S.Page6CalendarWrapper>
      <S.Page7Photo ref={addItemRef} className="observer">
        <S.SwiperTop>
          <p>갤러리</p>
          <Swiper
            className="swiper"
            modules={[Navigation, EffectFade]}
            slidesPerView={1}
            effect={"fade"}
            onSlideChange={handleSlideChange}
            onSwiper={setTopSwiper}
          >
            {galleryImages.GalleryImages.map((data, index) => (
              <SwiperSlide key={index} className="swiper-slide" onClick={() => clickOpenImageModal(index + 1)}>
                <img src={data} alt="image" />
              </SwiperSlide>
            ))}
          </Swiper>
        </S.SwiperTop>
        <S.SwiperBottom>
          <Swiper
            className="swiper-bottom"
            modules={[Navigation]}
            watchSlidesProgress={false}
            slidesPerView={5}
            allowTouchMove={false}
            spaceBetween={5}
            onSwiper={setBottomSwiper}
          >
            {galleryImages.GalleryImages.map((data, index) => (
              <S.SwiperSlideComponent
                $opacity={swiperIndex === index}
                key={index}
                className="swiper-bottom-slide"
                onClick={() => clickBottomImage(index)}
              >
                <img src={data} alt="image" />
              </S.SwiperSlideComponent>
            ))}
          </Swiper>
        </S.SwiperBottom>
      </S.Page7Photo>
      {curSwiperImageIndex !== 0 && (
        <SwiperModal
          curSwiperImageIndex={curSwiperImageIndex}
          images={galleryImages.GalleryImages}
          setCurSwiperImageIndex={setCurSwiperImageIndex}
        />
      )}
      <S.Page8YouTube ref={addItemRef} className="observer">
        <p>영상보기</p>
        <YouTube
          videoId={MockData.contents.video_id}
          className="youtube"
          opts={{
            width: "100%",
            height: "300px",
            playerVars: {
              autoplay: false,
            },
          }}
        />
        <span>예쁘게 잘 살겠습니다</span>
        <span className="spantext">wedding day</span>
      </S.Page8YouTube>
      <S.Page9Live ref={addItemRef} className="observer">
        <p className="title">라이브 웨딩 안내</p>
        <p>참석이 어려운 분들께서는</p>
        <p>온라인 중계로 시청하실 수 있습니다.</p>
        <p className="wedding-date">{getFullDate(new Date(MockData.date))}</p>
        <button>라이브 웨딩 보러가기</button>
      </S.Page9Live>
      <S.Page10Map ref={addItemRef} className="observer">
        <p className="title">오시는 길</p>
        <div className="address">
          <h1>{MockData.location.wedding_hall}</h1>
          <p>{MockData.location.address}</p>
        </div>
        <div className="roadmap">
          <LocationCard latitude={MockData.location.latitude} longitude={MockData.location.longitude} />
        </div>
        <div className="roadmap-nav" onClick={clickRoadMap}>
          <div id="naver">
            <img src="/Template/icon_navermap.png" />
            <span>네이버 지도</span>
          </div>
          <div id="kakao">
            <img src="/Template/icon_kakaonavi.png" />
            <span>카카오 내비</span>
          </div>
          <div id="tmap">
            <img src="/Template/icon_tmap.png" />
            <span>티맵</span>
          </div>
        </div>
      </S.Page10Map>
      <S.Page11Way ref={addItemRef} className="observer">
        <div>
          <p className="title">지하철안내</p>
          {MockData.subway.map(({ text, inline_style }, index) => (
            <p className="info" key={index}>
              {applyStyles(text, inline_style)}
            </p>
          ))}
        </div>
        <div>
          <p className="title">버스안내</p>
          {MockData.bus.map(({ text, inline_style }, index) => (
            <p className="info" key={index}>
              {applyStyles(text, inline_style)}
            </p>
          ))}
        </div>
        <div>
          <p className="title">주차안내</p>
          {MockData.car.map(({ text, inline_style }, index) => (
            <p className="info" key={index}>
              {applyStyles(text, inline_style)}
            </p>
          ))}
        </div>
        <div>
          <p className="title">전세버스안내</p>
          {MockData.etc.info.map(({ text, inline_style }, index) => (
            <p className="info" key={index}>
              {applyStyles(text, inline_style)}
            </p>
          ))}
        </div>
      </S.Page11Way>
      <S.Page12Account ref={addItemRef} className="observer">
        <p className="title">신랑신부에게 마음 전하기</p>
        <p className="text">축하의 마음을 담아 축의금을 전달해보세요.</p>
        <div>
          <p>신랑측 마음</p>
          <button onClick={() => clickAccountModal(true)}>계좌번호 보기</button>
        </div>
        <div>
          <p>신부측 마음</p>
          <button onClick={() => clickAccountModal(false)}>계좌번호 보기</button>
        </div>
      </S.Page12Account>
      {accountModal ? (
        <S.AccountModal>
          <div>
            {accountInfo ? <p>신랑측 계좌정보</p> : <p>신부측 계좌정보</p>}
            <div className="close" onClick={clickCloseModal}>
              <IoIosClose size={50} />
            </div>
            <div>
              <div>
                {accountInfo ? (
                  <>
                    <p>{MockData.HUSBAND.FATHER.bank}은행</p>
                    <p>예금주 : {MockData.HUSBAND.FATHER.name}</p>
                  </>
                ) : (
                  <>
                    <p>{MockData.WIFE.FATHER.bank}은행</p>
                    <p>예금주 : {MockData.WIFE.FATHER.name}</p>
                  </>
                )}
              </div>
              <div>
                {accountInfo ? (
                  <input type="text" value={MockData.HUSBAND.FATHER.account} readOnly />
                ) : (
                  <input type="text" value={MockData.WIFE.FATHER.account} readOnly />
                )}
                <button
                  onClick={() =>
                    handleClickCopyAccount(accountInfo ? MockData.HUSBAND.FATHER.account : MockData.WIFE.FATHER.account)
                  }
                >
                  복사
                </button>
              </div>
            </div>
            <div>
              <div>
                {accountInfo ? (
                  <>
                    <p>{MockData.HUSBAND.MOTHER.bank}은행</p>
                    <p>예금주 : {MockData.HUSBAND.MOTHER.name}</p>
                  </>
                ) : (
                  <>
                    <p>{MockData.WIFE.MOTHER.bank}은행</p>
                    <p>예금주 : {MockData.WIFE.MOTHER.name}</p>
                  </>
                )}
              </div>
              <div>
                {accountInfo ? (
                  <input type="text" value={MockData.HUSBAND.MOTHER.account} readOnly />
                ) : (
                  <input type="text" value={MockData.WIFE.MOTHER.account} readOnly />
                )}
                <button
                  onClick={() =>
                    handleClickCopyAccount(accountInfo ? MockData.HUSBAND.MOTHER.account : MockData.WIFE.MOTHER.account)
                  }
                >
                  복사
                </button>
              </div>
            </div>
          </div>
        </S.AccountModal>
      ) : null}
      <S.Page13Message ref={addItemRef} className="observer">
        <p className="title">메세지</p>
        <p>축하 메세지를 남겨주세요.</p>
        <div className="write">
          <div>
            <input type="text" placeholder="이름" />
            <input type="password" placeholder="비밀번호" />
          </div>
          <textarea name="message" id="messages" placeholder="축하 메세지"></textarea>
        </div>
        <button onClick={clickPostMessage}>등록하기</button>

        {currentItems.map(item => (
          <div key={item.id} className="guestbook-wrapper">
            <div>
              <h2>{item.name}</h2>
              <span>{getDateWithDots(new Date(item.date))}</span>
            </div>
            <p>{item.content}</p>
            <div className="close" onClick={clickRemoveWrite}>
              <IoIosClose />
            </div>
          </div>
        ))}
        <div className="pagination">
          {new Array(Math.floor(guestBook.guestbook.length / 5) + 1).fill(0).map((_, index) => (
            <S.GuestBookPaginationSpan
              $isActiveIndex={currentGuestBookPage === index + 1}
              key={index}
              onClick={() => handleClickGuestBookPagination(index + 1)}
              id={index.toString()}
            >
              {index + 1}
            </S.GuestBookPaginationSpan>
          ))}
        </div>
      </S.Page13Message>
      <S.Page14Share ref={addItemRef} className="observer">
        <p className="title">공유하기</p>
        <div>
          <div className="wrapper" onClick={handleClickShareKakao}>
            <RiKakaoTalkFill size={24} />
            <span>
              카카오톡
              <br />
              공유하기
            </span>
          </div>
          <div className="wrapper" onClick={() => copyLink(window.location.href)}>
            <HiOutlineLink size={24} />
            <span>
              링크주소
              <br />
              복사하기
            </span>
          </div>
        </div>
        <p className="copyright">
          Copyright {new Date().getFullYear()}.<span>WECA&nbsp;</span>All rights reserved
        </p>
      </S.Page14Share>
    </S.Container>
  );
};

export default Modern;
