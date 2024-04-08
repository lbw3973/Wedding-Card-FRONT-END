import { useEffect, useRef, useState } from "react";
import * as S from "./style";
import { BsTelephoneFill, BsChatText } from "react-icons/bs";
import {
  IoBusOutline,
  IoSubwayOutline,
  IoCarOutline,
  IoBalloonOutline,
  IoCloseOutline,
  IoCopyOutline,
} from "react-icons/io5";
import { TbMailHeart } from "react-icons/tb";
import { RiKakaoTalkFill } from "react-icons/ri";
import { HiOutlineLink } from "react-icons/hi";
import guestBook from "@/mock/GuestBook.json";
import { FcLike } from "react-icons/fc";
import {
  formatDay,
  getDate,
  getDateWithDots,
  getDateWithKor,
  getDayWithTime,
  getDday,
  getFullDate,
  getMonthWithZero,
  tileClassName,
} from "@/utils/parseDate";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import LocationCard from "@/components/Common/LocationCard";
import { Helmet } from "react-helmet-async";
import Bgm from "@/components/Template/Bgm";
import { applyStyles } from "@/utils/parseInlineStyle";
import { shareKakao } from "@/utils/shareKakao";
import { copyLink } from "@/utils/copyLink";
import YouTube from "react-youtube";
import { Effects } from "@/constants/ContentsData";
import { IResInvitation } from "@/types/invitation";
import Phrase from "@/constants/Phrase.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Pagination } from "swiper/modules";

window.YTConfig = {
  host: "https://www.youtube.com",
};

const TheSimple = (data: IResInvitation) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [currentGuestBookPage, setCurrentGuestBookPage] = useState(1);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isOpenAccountWho, setIsOpenAccountWho] = useState("");
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const containerRef = useRef<HTMLInputElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);
  const fieldsRef = useRef<{
    name: HTMLInputElement | null;
    password: HTMLInputElement | null;
    content: HTMLTextAreaElement | null;
    delete: HTMLInputElement | null;
  }>({
    name: null,
    password: null,
    content: null,
    delete: null,
  });

  const itemsPerPage = 5;
  const indexOfLastItem = currentGuestBookPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = guestBook.guestbook.slice(indexOfFirstItem, indexOfLastItem);

  const addItemRef = (el: HTMLDivElement) => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current.push(el);
    }
  };

  const handleClickContantModal = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.target as HTMLDivElement;
    if (element.classList.contains("container")) {
      setIsContactModalOpen(false);
      setIsAccountModalOpen(false);
      setIsWriteModalOpen(false);
    }
  };

  const handleClickRoadMap = (e: React.MouseEvent<HTMLDivElement>) => {
    let target = e.target as HTMLElement;
    while (target !== null && target.id === "") {
      target = target.parentNode as HTMLElement;
    }
    let url = "";
    switch (target.id) {
      case "naver":
        url = `https://map.naver.com/v5/search/${encodeURIComponent(data.location.address)}`;
        break;
      case "kakao":
        url = `https://map.kakao.com/?q=${encodeURIComponent(data.location.address)}`;
        break;
      case "tmap":
        url = `https://apis.openapi.sk.com/tmap/app/routes?appKey=${import.meta.env.VITE_TMAP_APP_KEY}&name=${data.location.address}&lon=${data.location.longitude}&lat=${data.location.latitude}`;
        break;
      default:
        return;
    }
    window.open(url, "_blank");
  };

  const handleClickGuestBookPagination = (index: number) => {
    setCurrentGuestBookPage(index);
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

  const handleClickOpenAccount = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsOpenAccountWho(e.currentTarget.id);
    setIsAccountModalOpen(true);
  };

  const handleClickShareKakao = () => {
    shareKakao({
      title: data.open_graph.title,
      description: data.open_graph.subtitle,
      imageUrl: `${import.meta.env.VITE_AWS_S3_URL}/${data.images.thumbnail}`,
      link: window.location.href,
    });
  };

  const handleClickOpenWrite = () => {
    setIsWriteModalOpen(true);
  };

  const handleClickWriteComplete = () => {
    const { name, password, content } = fieldsRef.current;

    if (!name?.value || !password?.value || !content?.value) {
      alert("내용을 채워주세요.");
      return;
    } else {
      console.log(name.value);
      console.log(password.value);
      console.log(content.value);
    }
  };

  const handleClickDelete = () => {
    if (fieldsRef.current.delete) {
      if (!fieldsRef.current.delete.value) {
        alert("비밀번호를 입력해주세요.");
        return;
      } else {
        console.log(fieldsRef.current.delete.value);
      }
    }
  };

  const handleClickLiveWedding = () => {
    window.open(data.contents.live_url);
  };

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

  return (
    <S.Container ref={containerRef}>
      <Helmet>
        <title>{data.open_graph.title}</title>
        <meta name="description" content={data.open_graph.subtitle} />
        <meta property="og:title" content={data.open_graph.title} />
        <meta property="og:description" content={data.open_graph.subtitle} />
        <meta
          property="og:image"
          content="https://images.velog.io/images/anjoy/post/7886527b-8b11-4ccc-a90f-012aeb196297/image.png"
        />
        <meta property="og:url" content="페이지 URL" />
      </Helmet>
      <Bgm audioNumber={data.contents.bgm} />
      <S.MainWrapper ref={addItemRef} className="observer">
        <div className="date">
          <div className="husband">{data.HUSBAND.ME.name}</div>
          <div className="wedding-date">
            <div className="month">{getMonthWithZero(new Date(data.date))}</div>
            <div className="divider">
              <div className="divider2"></div>
            </div>
            <div className="day">{getDate(new Date(data.date))}</div>
          </div>
          <div className="wife">{data.WIFE.ME.name}</div>
        </div>
        <div className="main-image">
          <img src={`${import.meta.env.VITE_AWS_S3_URL}/${data.images.main}`} />
          <div className="background-video">
            <video muted autoPlay loop playsInline>
              <source src={Effects[data.contents.effect - 1]} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="wedding-info">
          <div className="wedding-info-date">
            <span>{getFullDate(new Date(data.date))}</span>
          </div>
          <div className="wedding-info-hall">
            <span>{data.location.wedding_hall}</span>
          </div>
        </div>
      </S.MainWrapper>
      <S.PhraseWrapper ref={addItemRef} className="observer">
        <img src="/Template/icon_leaf.svg" />
        <div className="text">
          {Phrase.phrase.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </S.PhraseWrapper>
      <S.GreetingWrapper ref={addItemRef} className="observer" $textAlign={data.welcome_align}>
        <div className="title">
          <span className="date">{getDateWithDots(new Date(data.date))}</span>
          <span className="kor">초대합니다</span>
        </div>
        <div className="text">
          {data.welcome.map(({ text, inline_style }, index) => (
            <p key={index}>{applyStyles(text, inline_style)}</p>
          ))}
        </div>
      </S.GreetingWrapper>
      <S.HumanWrapper ref={addItemRef} className="observer">
        <div className="humanInfo">
          <p>
            {data.HUSBAND.FATHER.name}
            <span className="dot">·</span>
            {data.HUSBAND.MOTHER.name}
            <span className="relation">의 {data.HUSBAND.relationship}</span>
            {data.HUSBAND.ME.name}
            <a href={`tel:${data.HUSBAND.ME.contact}`}>
              <BsTelephoneFill color="#a96b6c" size={12} />
            </a>
          </p>
        </div>
        <div className="humanInfo">
          <p>
            {data.WIFE.FATHER.name}
            <span className="dot">·</span>
            {data.WIFE.MOTHER.name}
            <span className="relation">의 {data.WIFE.relationship}</span>
            {data.WIFE.ME.name}
            <a href={`tel:${data.WIFE.ME.contact}`}>
              <BsTelephoneFill color="#a96b6c" size={12} />
            </a>
          </p>
        </div>
        <button className="contact-button" onClick={handleClickContantModal}>
          혼주에게 연락하기
        </button>
      </S.HumanWrapper>
      <S.CalendarWrapper ref={addItemRef} className="observer">
        <div className="date">
          <p className="yymmdd">{getDateWithKor(new Date(data.date))}</p>
          <p className="ddhhmm">{getDayWithTime(new Date(data.date))}</p>
        </div>
        <div className="calendar">
          <Calendar
            value={new Date(data.date)}
            formatDay={formatDay}
            calendarType="gregory"
            tileClassName={tileClassName}
          />
        </div>
        <div className="d-day">
          <p>
            {data.HUSBAND.ME.name} <FcLike /> {data.WIFE.ME.name}의 결혼식이{" "}
            {getDday(new Date(data.date)) === 0 ? (
              <>
                <span>오늘</span>입니다.
              </>
            ) : (
              <>
                <span>{getDday(new Date(data.date))}일</span> 남았습니다.
              </>
            )}
          </p>
        </div>
      </S.CalendarWrapper>
      <S.GalleryContainer ref={addItemRef} className="observer">
        <div className="title">
          <span className="kor">갤러리</span>
          <span className="eng">GALLERY</span>
        </div>
        <div className="slides">
          <Swiper autoHeight pagination modules={[Pagination]}>
            {data.images.slides.map((src, index) => (
              <SwiperSlide key={index}>
                <img src={`${import.meta.env.VITE_AWS_S3_URL}/${src}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </S.GalleryContainer>
      <S.LocationContainer ref={addItemRef} className="observer">
        <div className="title">
          <span className="kor">오시는 길</span>
          <span className="eng">LOCATION</span>
        </div>
        <div className="subtitle">
          <p className="wedding-hall">{data.location.wedding_hall}</p>
          <p className="address">{data.location.address}</p>
        </div>
        <div className="roadmap">
          {<LocationCard latitude={data.location.latitude} longitude={data.location.longitude} />}
          <div className="roadmap-nav" onClick={handleClickRoadMap}>
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
        </div>
      </S.LocationContainer>
      <S.WayToComeContainer>
        <div ref={addItemRef} className="traffic bus observer">
          <div className="title">
            <div className="icon">
              <IoBusOutline size={25} color="#ab9da1" />
            </div>
            <span>버스로 오시는길</span>
          </div>
          <div className="description">
            {data.bus.map(({ text, inline_style }, index) => (
              <p key={index}>{applyStyles(text, inline_style)}</p>
            ))}
          </div>
        </div>
        <div ref={addItemRef} className="traffic subway observer">
          <div className="title">
            <div className="icon">
              <IoSubwayOutline size={25} color="#ab9da1" />
            </div>
            <span>지하철로 오시는길</span>
          </div>
          <div className="description">
            {data.subway.map(({ text, inline_style }, index) => (
              <p key={index}>{applyStyles(text, inline_style)}</p>
            ))}
          </div>
        </div>
        <div ref={addItemRef} className="traffic car observer">
          <div className="title">
            <div className="icon">
              <IoCarOutline size={25} color="#ab9da1" />
            </div>
            <span>자가용으로 오시는길</span>
          </div>
          <div className="description">
            {data.car.map(({ text, inline_style }, index) => (
              <p key={index}>{applyStyles(text, inline_style)}</p>
            ))}
          </div>
        </div>
        <div ref={addItemRef} className="traffic etc observer">
          <div className="title">
            <div className="icon">
              <IoBalloonOutline size={25} color="#ab9da1" />
            </div>
            <span>{data.etc.transport_type}</span>
          </div>
          <div className="description">
            {data.etc.info.map(({ text, inline_style }, index) => (
              <p key={index}>{applyStyles(text, inline_style)}</p>
            ))}
          </div>
        </div>
      </S.WayToComeContainer>
      {data.contents.video_id && (
        <S.WeddingVideoContainer ref={addItemRef} className="observer">
          <div className="title">
            <span className="kor">웨딩 영상</span>
            <span className="eng">WEDDING VIDEO</span>
          </div>
          <YouTube
            videoId={data.contents.video_id}
            className="youtube"
            opts={{
              width: "100%",
              height: "300px",
              playerVars: {
                autoplay: false,
              },
            }}
          />
        </S.WeddingVideoContainer>
      )}
      {data.contents.live_url && (
        <S.LiveWeddingContainer ref={addItemRef} className="observer">
          <div className="title">
            <span className="kor">라이브 웨딩</span>
            <span className="eng">LIVE WEDDING</span>
          </div>
          <div className="inner">
            <div>
              <span>참석이 어려운 분들께서는</span>
              <br />
              <span> 온라인 중계로 시청하실 수 있습니다.</span>
            </div>
            <button className="view-button" onClick={handleClickLiveWedding}>
              라이브 웨딩 보러가기
            </button>
          </div>
        </S.LiveWeddingContainer>
      )}
      <S.AccountContainer ref={addItemRef} className="observer">
        <img src="/Template/icon_flower_account.png" />
        <h2 className="title">마음 전하실 곳</h2>
        <div className="wrapper">
          <div className="title">
            <h3>신랑측 계좌번호</h3>
            <div className="open-button" id="husband" onClick={handleClickOpenAccount}>
              <TbMailHeart color="#ab9da1" />
              <span>보기</span>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="title">
            <h3>신부측 계좌번호</h3>
            <div className="open-button" id="wife" onClick={handleClickOpenAccount}>
              <TbMailHeart color="#ab9da1" />
              <span>보기</span>
            </div>
          </div>
        </div>
      </S.AccountContainer>
      <S.GuestBookContainer ref={addItemRef} className="observer">
        <div className="title">
          <span className="kor">방명록</span>
          <span className="eng">GUESTBOOK</span>
        </div>
        <div className="guestbook-container">
          {currentItems.map(item => (
            <div key={item.id} className="guestbook-wrapper">
              <h2>{item.name}</h2>
              <p>{item.content}</p>
              <div className="close">
                <span>{getDateWithDots(new Date(item.date))}</span>
                <IoCloseOutline color="#aaa" size={15} onClick={() => setIsDeleteModalOpen(true)} />
              </div>
            </div>
          ))}
        </div>
        <div className="tools">
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
          <button className="write-button" onClick={handleClickOpenWrite}>
            작성하기
          </button>
        </div>
      </S.GuestBookContainer>
      <S.FooterContainer ref={addItemRef} className="observer">
        <div className="wrapper" onClick={handleClickShareKakao}>
          <RiKakaoTalkFill size={24} />
          <span>카카오톡 공유하기</span>
        </div>
        <div className="wrapper" onClick={() => copyLink(window.location.href)}>
          <HiOutlineLink size={24} />
          <span>링크주소 복사하기</span>
        </div>
        <p>
          Copyright {new Date().getFullYear()}.<span>WECA&nbsp;</span>All rights reserved
        </p>
      </S.FooterContainer>
      {isContactModalOpen && (
        <S.ContactModalContainer onClick={handleCloseModal} className="container">
          <div className="wrapper">
            <div className="title">
              <span>혼주에게 연락하기</span>
            </div>
            <div className="info">
              <div className="human husband">
                {data.HUSBAND.FATHER.contact && (
                  <div className="grid">
                    <span className="who">신랑 아버지</span>
                    <span>{data.HUSBAND.FATHER.name}</span>
                    <div className="icons">
                      <a href={`tel:${data.HUSBAND.FATHER.contact}`}>
                        <BsTelephoneFill color="#8194d8" size={14} />
                      </a>
                      <a href={`sms:${data.HUSBAND.FATHER.contact}`}>
                        <BsChatText color="#8194d8" size={14} />
                      </a>
                    </div>
                  </div>
                )}
                {data.HUSBAND.MOTHER.contact && (
                  <div className="grid">
                    <span className="who">신랑 어머니</span>
                    <span>{data.HUSBAND.MOTHER.name}</span>
                    <div className="icons">
                      <a href={`tel:${data.HUSBAND.MOTHER.contact}`}>
                        <BsTelephoneFill color="#8194d8" size={14} />
                      </a>
                      <a href={`sms:${data.HUSBAND.MOTHER.contact}`}>
                        <BsChatText color="#8194d8" size={14} />
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <div className="human wife">
                {data.WIFE.FATHER.contact && (
                  <div className="grid">
                    <span className="who">신부 아버지</span>
                    <span>{data.WIFE.FATHER.name}</span>
                    <div className="icons">
                      <a href={`tel:${data.WIFE.FATHER.contact}`}>
                        <BsTelephoneFill color="#ce7373" size={14} />
                      </a>
                      <a href={`sms:${data.WIFE.FATHER.contact}`}>
                        <BsChatText color="#ce7373" size={14} />
                      </a>
                    </div>
                  </div>
                )}
                {data.WIFE.MOTHER.contact && (
                  <div className="grid">
                    <span className="who">신부 어머니</span>
                    <span>{data.WIFE.MOTHER.name}</span>
                    <div className="icons">
                      <a href={`tel:${data.WIFE.MOTHER.contact}`}>
                        <BsTelephoneFill color="#ce7373" size={14} />
                      </a>
                      <a href={`sms:${data.WIFE.MOTHER.contact}`}>
                        <BsChatText color="#ce7373" size={14} />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </S.ContactModalContainer>
      )}
      {isAccountModalOpen && (
        <S.AccountModalContainer onClick={handleCloseModal} className="container">
          {isOpenAccountWho === "husband" ? (
            <div className="wrapper">
              <div className="title">
                <h2>신랑측 계좌번호</h2>
              </div>
              {data.HUSBAND.FATHER.account && (
                <div className="inner">
                  <div className="bank-account">
                    <span className="bank">{data.HUSBAND.FATHER.bank}</span>
                    <span>{data.HUSBAND.FATHER.account}</span>
                  </div>
                  <div className="name">(부) {data.HUSBAND.FATHER.name}</div>
                  <button className="copy-button" onClick={() => handleClickCopyAccount(data.HUSBAND.FATHER.account)}>
                    <IoCopyOutline size={12} />
                    복사
                  </button>
                </div>
              )}
              {data.HUSBAND.MOTHER.account && (
                <div className="inner">
                  <div className="bank-account">
                    <span className="bank">{data.HUSBAND.MOTHER.bank}</span>
                    <span>{data.HUSBAND.MOTHER.account}</span>
                  </div>
                  <div className="name">(모) {data.HUSBAND.MOTHER.name}</div>
                  <button className="copy-button" onClick={() => handleClickCopyAccount(data.HUSBAND.MOTHER.account)}>
                    <IoCopyOutline size={12} />
                    복사
                  </button>
                </div>
              )}
              {data.HUSBAND.ME.account && (
                <div className="inner">
                  <div className="bank-account">
                    <span className="bank">{data.HUSBAND.ME.bank}</span>
                    <span>{data.HUSBAND.ME.account}</span>
                  </div>
                  <div className="name">{data.HUSBAND.ME.name}</div>
                  <button className="copy-button" onClick={() => handleClickCopyAccount(data.HUSBAND.ME.account)}>
                    <IoCopyOutline size={12} />
                    복사
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="wrapper">
              <div className="title">
                <h2>신부측 계좌번호</h2>
              </div>
              {data.WIFE.FATHER.account && (
                <div className="inner">
                  <div className="bank-account">
                    <span className="bank">{data.WIFE.FATHER.bank}</span>
                    <span>{data.WIFE.FATHER.account}</span>
                  </div>
                  <div className="name">(부) {data.WIFE.FATHER.name}</div>
                  <button className="copy-button" onClick={() => handleClickCopyAccount(data.WIFE.FATHER.account)}>
                    <IoCopyOutline size={12} />
                    복사
                  </button>
                </div>
              )}
              {data.WIFE.MOTHER.account && (
                <div className="inner">
                  <div className="bank-account">
                    <span className="bank">{data.WIFE.MOTHER.bank}</span>
                    <span>{data.WIFE.MOTHER.account}</span>
                  </div>
                  <div className="name">(모) {data.WIFE.MOTHER.name}</div>
                  <button className="copy-button" onClick={() => handleClickCopyAccount(data.WIFE.MOTHER.account)}>
                    <IoCopyOutline size={12} />
                    복사
                  </button>
                </div>
              )}
              {data.WIFE.ME.account && (
                <div className="inner">
                  <div className="bank-account">
                    <span className="bank">{data.WIFE.ME.bank}</span>
                    <span>{data.WIFE.ME.account}</span>
                  </div>
                  <div className="name">{data.WIFE.ME.name}</div>
                  <button className="copy-button" onClick={() => handleClickCopyAccount(data.WIFE.ME.account)}>
                    <IoCopyOutline size={12} />
                    복사
                  </button>
                </div>
              )}
            </div>
          )}
        </S.AccountModalContainer>
      )}
      {isWriteModalOpen && (
        <S.WriteModalContainer>
          <div className="wrapper">
            <div className="title">
              <span>방명록</span>
              <button onClick={() => setIsWriteModalOpen(false)}>
                <IoCloseOutline size={25} />
              </button>
            </div>
            <div className="inner">
              <div className="name">
                <span>이름</span>
                <input ref={el => (fieldsRef.current.name = el)} />
              </div>
              <div className="password">
                <span>비밀번호</span>
                <input ref={el => (fieldsRef.current.password = el)} />
              </div>
              <div className="content">
                <textarea placeholder="100자 이내로 작성해주세요" ref={el => (fieldsRef.current.content = el)} />
              </div>
            </div>
            <button className="write-button" onClick={handleClickWriteComplete}>
              작성하기
            </button>
          </div>
        </S.WriteModalContainer>
      )}
      {isDeleteModalOpen && (
        <S.DeleteModalContainer>
          <div className="wrapper">
            <div className="title">
              <span>방명록 삭제</span>
              <button onClick={() => setIsDeleteModalOpen(false)}>
                <IoCloseOutline size={25} />
              </button>
            </div>
            <div className="inner">
              <div className="password">
                <span>비밀번호</span>
                <input ref={el => (fieldsRef.current.delete = el)} />
              </div>
            </div>
            <button className="delete-button" onClick={handleClickDelete}>
              삭제하기
            </button>
          </div>
        </S.DeleteModalContainer>
      )}
    </S.Container>
  );
};

export default TheSimple;
