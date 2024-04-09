import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  position: relative;

  background-color: #fff;
  overflow: hidden;
  .observer {
    &.visible {
      animation: fadeIn 1.5s ease-out forwards;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(60px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;

export const MainWrapper = styled.div`
  font-family: "GowunDodum", serif;

  .date {
    color: #d97d83;
    display: flex;
    padding: 48px 16px;
    .husband,
    .wife {
      flex: 1;
      text-align: center;
      display: flex;
      justify-content: center;
      flex-direction: column;
      font-size: 20px;
      line-height: 32px;
    }

    .wedding-date {
      font-family: "GyeonggiBatang";
      flex: 1;
      height: 72px;
      font-size: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4px;

      .divider {
        text-align: center;
        width: 60px;
        height: 1px;
        background-color: #d97d83;
      }
    }
  }

  .main-image {
    margin: 20px 0;
    position: relative;
    overflow: hidden;
    line-height: 0;

    mask-image: linear-gradient(
      180deg,
      transparent,
      rgba(0, 0, 0, 0.013) 1.1%,
      rgba(0, 0, 0, 0.049) 2.3%,
      rgba(0, 0, 0, 0.104) 3.58%,
      rgba(0, 0, 0, 0.175) 4.94%,
      rgba(0, 0, 0, 0.259) 6.34%,
      rgba(0, 0, 0, 0.352) 7.78%,
      rgba(0, 0, 0, 0.45) 9.26%,
      rgba(0, 0, 0, 0.55) 10.74%,
      rgba(0, 0, 0, 0.648) 12.22%,
      rgba(0, 0, 0, 0.741) 13.66%,
      rgba(0, 0, 0, 0.825) 15.06%,
      rgba(0, 0, 0, 0.896) 16.42%,
      rgba(0, 0, 0, 0.951) 17.7%,
      rgba(0, 0, 0, 0.987) 18.9%,
      #000 20%,
      #000 80%,
      rgba(0, 0, 0, 0.987) 81.1%,
      rgba(0, 0, 0, 0.951) 82.3%,
      rgba(0, 0, 0, 0.896) 83.58%,
      rgba(0, 0, 0, 0.825) 84.94%,
      rgba(0, 0, 0, 0.741) 86.34%,
      rgba(0, 0, 0, 0.648) 87.78%,
      rgba(0, 0, 0, 0.55) 89.26%,
      rgba(0, 0, 0, 0.45) 90.74%,
      rgba(0, 0, 0, 0.352) 92.22%,
      rgba(0, 0, 0, 0.259) 93.66%,
      rgba(0, 0, 0, 0.175) 95.06%,
      rgba(0, 0, 0, 0.104) 96.42%,
      rgba(0, 0, 0, 0.049) 97.7%,
      rgba(0, 0, 0, 0.013) 98.9%,
      transparent
    );

    img {
      position: relative;
      width: 100%;
      height: fit-content;
    }

    .background-video {
      position: absolute;
      mix-blend-mode: screen;
      left: 20px;
      top: 0px;
      width: calc(100% - 40px);
      video {
        width: 100%;
        opacity: 1;
        visibility: initial;
      }
    }
  }

  .wedding-info {
    margin-bottom: 2px;
    padding: 50px 0;
    color: #544f4f;

    .wedding-info-date {
      margin-bottom: 16px;
    }
    .wedding-info-hall {
      margin-bottom: 10px;
    }
  }
`;

export const PhraseWrapper = styled.div`
  padding: 80px 0 40px;

  img {
    width: 28px;
    height: 28px;
  }

  .text {
    width: 65%;
    margin: 60px auto 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    font-family: "GowunDodum", serif;
    color: #544f4f;
  }
`;

export const GreetingWrapper = styled.div<{ $textAlign: string }>`
  padding: 40px 0;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 20px 0;
    margin-bottom: 30px;

    span {
      font-family: "GowunDodum", serif;
      letter-spacing: 2px;
      font-size: 20px;
      color: #a96b6c;
    }
    .eng {
      font-size: 12px;
      color: #e9c0c3;
      letter-spacing: 5px;
      padding-bottom: 20px;
    }
  }

  .text {
    width: 65%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: ${({ $textAlign }) => $textAlign};
    justify-content: center;
    gap: 24px;
    font-family: "GowunDodum", serif;
    color: #544f4f;
  }
`;

export const HumanWrapper = styled.div`
  padding: 40px 0;
  font-family: "GowunDodum", serif;

  .humanInfo {
    font-size: 18px;
    margin-bottom: 20px;
    color: #242424;

    p {
      .dot {
        display: inline-block;
        width: 20px;
      }
      .relation {
        font-size: 16px;
        margin: 0 6px;
        color: #8a857f;
      }
    }
  }
`;

export const CalendarWrapper = styled.div`
  padding: 80px 0;

  .title {
    font-family: "GowunDodum", serif;
    padding: 20px 0;
    h2 {
      font-size: 12px;
      color: #e9c0c3;
      letter-spacing: 5px;
    }
  }

  .date {
    color: #d97d83;

    .yymmdd {
      font-family: "GowunDodum", serif;
      font-size: 20px;
      letter-spacing: 3px;
      margin-bottom: 14px;
    }
    .ddhhmm {
      font-family: "GowunDodum", serif;
      font-size: 16px;
    }
  }
  .calendar {
    .react-calendar {
      margin: 30px auto;
      padding: 20px;
      border: 1px solid #e8dfdf;
      border-left: none;
      border-right: none;
      background-color: transparent;
      abbr {
        font-weight: 400;
        font-size: 16px;
        font-family: "GowunDodum", serif;
        text-decoration: none;
      }

      .react-calendar__navigation {
        display: none;
      }
      .react-calendar__tile {
        pointer-events: none;
        padding: 10px;
        color: #242424;
      }
      .saturday,
      .sunday {
        color: #d97d83;
      }
      .react-calendar__tile--active {
        background-color: #f4dbdc;
        border-radius: 100%;
        color: #d97d83;
      }
      .react-calendar__month-view__weekdays {
        abbr[title="토요일"],
        abbr[title="일요일"] {
          color: #d97d83;
        }
      }
      .react-calendar__month-view__days__day--neighboringMonth {
        visibility: hidden;
      }
      .react-calendar__tile--now {
        background-color: transparent;
        abbr {
          color: blue;
        }
      }
    }
  }

  .d-day {
    font-size: 16px;
    font-family: "GowunDodum", serif;

    span {
      color: #ea7664;
    }
  }
`;

export const LocationContainer = styled.div`
  margin: 20px 0 0;
  padding: 40px 0;
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    padding-bottom: 20px;

    .eng {
      width: 92px;
    }
    .flower {
      width: 20px;
    }
  }
  .subtitle {
    font-family: "GowunDodum", serif;
    margin: 20px 0 40px;
    .wedding-hall {
      margin-bottom: 16px;
    }
    .address {
      color: #797979;
    }
  }

  .roadmap {
    width: 90%;
    margin: 0 auto;
    border: 1px solid #ececec;
    .map-container {
      width: 100%;
      border-radius: 0;
      border: none;
      #__react-kakao-maps-sdk___Map {
        border-radius: 0 !important;
      }
    }
    .roadmap-nav {
      background-color: #f9f1f2;
      font-family: "GowunDodum", serif;

      height: 42px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      div {
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        cursor: pointer;
        border-right: 1px solid rgba(97, 80, 67, 0.2);

        &:last-child {
          border: none;
        }

        img {
          width: 16px;
        }
      }
    }
  }
`;

export const WayToComeContainer = styled.div`
  margin-bottom: 40px;
  .traffic {
    margin: 8px 32px;
    padding: 20px 0;
    border-bottom: 1px solid #e9e5e5;

    font-family: "GowunDodum", serif;

    .title {
      display: flex;
      align-items: center;
      gap: 20px;
      font-size: 18px;
      color: #89757a;
      .icon {
        background-color: #f2eeee;
        padding: 10px;
        border-radius: 100%;
      }
    }

    .description {
      padding-left: 70px;
      text-align: left;
      color: #544f4f;

      p {
        margin-bottom: 10px;
        font-size: 14px;
        word-break: keep-all;
        line-height: 1.1;
      }
    }
  }
`;

export const GalleryContainer = styled.div`
  padding: 40px 0;
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    padding-bottom: 20px;

    .eng {
      width: 72px;
    }
    .flower {
      width: 24px;
    }
  }

  .slides {
    width: 100%;
    margin-top: 40px;
    .swiper {
      .swiper-wrapper {
        align-items: center;
        .swiper-slide {
          padding: 0 40px;
          width: calc(100% - 80px) !important;
          img {
            width: 100%;
          }
        }
      }

      .swiper-pagination {
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
        }

        .swiper-pagination-bullet-active {
          background-color: #a96b6c;
        }
      }
    }
  }
`;

export const WeddingVideoContainer = styled.div`
  padding: 0 20px;
  margin: 60px 0;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 20px 0;
    margin-bottom: 20px;

    span {
      font-family: "GowunDodum", serif;
      letter-spacing: 2px;
      font-size: 20px;
      color: #a96b6c;
    }
    .eng {
      font-size: 12px;
      color: #e9c0c3;
      letter-spacing: 5px;
      padding-bottom: 10px;
    }
  }
  .youtube {
    padding: 40px 0;
  }
`;

export const LiveWeddingContainer = styled.div`
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 20px 0;
    .kor {
      font-family: "GowunDodum", serif;
      letter-spacing: 2px;
      font-size: 20px;
      color: #a96b6c;
    }
    .eng {
      font-family: "CrimsonPro";
      font-size: 10px;
      letter-spacing: 3px;
      color: #a96b6c;
    }
  }
  .inner {
    text-align: center;
    font-family: "GowunDodum", serif;
    span {
      display: inline-block;
      margin-bottom: 10px;
    }
    .view-button {
      font-family: "GowunDodum", serif;
      padding: 20px 60px;
      background-color: #f2eeee;
      color: #89757a;
      border-radius: 32px;
      margin: 20px 0 40px;
    }
  }
`;

export const GuestBookContainer = styled.div`
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 20px 0;
    margin-bottom: 20px;

    span {
      font-family: "GowunDodum", serif;
      letter-spacing: 2px;
      font-size: 20px;
      color: #a96b6c;
    }
    .eng {
      font-size: 12px;
      color: #e9c0c3;
      letter-spacing: 5px;
      padding-bottom: 10px;
    }
  }
  .guestbook-container {
    padding: 0 40px;

    .guestbook-wrapper {
      position: relative;
      text-align: left;
      box-shadow: 1px 1px 2px rgb(0 0 0/5%);
      border-radius: 8px;
      background: hsla(0, 0%, 100%, 0.75);
      padding: 20px;
      margin-bottom: 10px;

      h2 {
        font-weight: 600;
        margin-bottom: 16px;
      }

      .close {
        position: absolute;
        top: 20px;
        right: 20px;
        display: flex;
        align-items: center;
        color: #aaa;

        font-size: 12px;

        svg {
          cursor: pointer;
          margin-left: 6px;
        }
      }
    }
  }
  .tools {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 40px;
    .pagination {
      padding: 0 10px;
    }

    .write-button {
      background-color: #f1bfc0;
      color: #fff;
      padding: 10px 20px;
      border-radius: 25px;
    }
  }
`;

export const GuestBookPaginationSpan = styled.span<{ $isActiveIndex: boolean }>`
  display: inline-block;
  width: 30px;
  cursor: pointer;
  color: #89757a;
  opacity: ${({ $isActiveIndex }) => ($isActiveIndex ? 1 : 0.35)};
  font-weight: ${({ $isActiveIndex }) => ($isActiveIndex ? "600" : "400")};
`;

export const AccountContainer = styled.div`
  padding: 40px;
  margin: 20px 0;

  img {
    width: 25px;
    margin-bottom: 40px;
  }
  .title {
    font-family: "GowunDodum", serif;
    font-size: 18px;
    line-height: 1.5;
    color: #595757;
  }

  .wrapper {
    margin: 20px;
    border: 1px solid #f2eeee;
    border-radius: 6px;

    .title {
      position: relative;
      h3 {
        font-family: "GowunDodum", serif;
        background-color: #f7f0f0;
        color: #d97d83;
        font-size: 18px;
        height: 45px;
        line-height: 45px;
        border-radius: 6px 6px 0 0;
      }

      .open-button {
        position: absolute;
        top: 50%;
        right: 5%;
        transform: translateY(-50%);
        cursor: pointer;

        display: flex;
        align-items: center;
        gap: 4px;
        span {
          font-size: 12px;
        }
      }
    }
  }
`;

export const ContactWrapper = styled.div`
  padding: 40px;
  font-family: "GowunDodum", serif;
  .main {
    width: auto;
    display: flex;
    font-size: 18px;
    .husband,
    .wife {
      border: 1px solid #f1bfc0;
      flex-grow: 1;
      padding: 40px 0;
    }
    .husband {
      border-radius: 12px 0 0 12px;
    }
    .wife {
      border-radius: 0 12px 12px 0;
      border-left: none;
    }
  }

  .parent {
    display: flex;
    padding: 60px 0 40px;

    h2 {
      color: #d97d83;
      margin-bottom: 12px;
    }

    .husband,
    .wife {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;
    }
  }

  .icon {
    margin-top: 16px;
    display: flex;
    justify-content: center;
    gap: 8px;

    .tel,
    .sms {
      border-radius: 25px;
      padding: 12px;
    }

    .tel {
      background-color: #f2bfc0;
    }
    .sms {
      background-color: #f4dbdc;
    }
  }
`;

export const FooterContainer = styled.div`
  padding: 40px;
  background-color: #f7f0f0;
  font-family: "GowunDodum", serif;

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    margin-bottom: 14px;
  }

  p {
    margin-top: 20px;
    font-family: "CrimsonPro";
    letter-spacing: 1.5px;
    color: rgba(0, 0, 0, 0.4);
    font-size: 12px;
    span {
      color: rgba(0, 0, 0, 0.8);
    }
  }
`;

export const AccountModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;

  background-color: rgba(0, 0, 0, 0.7);
  animation: fadeIn 300ms ease-out forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    background-color: white;
    border-radius: 6px;

    .title {
      h2 {
        font-family: "GowunDodum", serif;
        background-color: #f8f0f1;

        color: #d97d83;
        font-size: 18px;
        height: 50px;
        line-height: 50px;
        border-radius: 6px 6px 0 0;
      }
    }

    .inner {
      position: relative;
      padding: 16px 20px;
      border-top: 1px solid rgba(0, 0, 0, 0.05);
      .bank-account {
        text-align: left;
        margin-bottom: 10px;
        .bank {
          &::after {
            content: "";
            display: inline-block;
            width: 1px;
            height: 10px;
            margin: 0 6px;
            background-color: #e5e5e5;
          }
        }
      }

      .copy-button {
        position: absolute;
        top: 16px;
        right: 20px;

        padding: 6px 12px;
        border: 1px solid #e1e1e1;
        color: #333;
        font-size: 12px;
        border-radius: 4px;

        display: flex;
        align-items: center;

        svg {
          margin-right: 4px;
        }
      }
    }
    .name {
      text-align: left;
    }
  }
`;

export const WriteModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;

  background-color: rgba(0, 0, 0, 0.7);
  animation: fadeIn 300ms ease-out forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    background-color: white;
    border-radius: 6px;

    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      font-size: 18px;
      border-bottom: 1px solid #eee;
    }

    .inner {
      .name,
      .password {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        border-bottom: 1px solid #eee;

        span {
          color: #989898;
        }
        input {
          border: none;
          font-size: 18px;
          &:focus {
            outline: none;
          }
        }
      }
      .content {
        padding: 20px;
        textarea {
          padding: 12px 16px;
          width: calc(100% - 40px);
          height: 150px;
          resize: none;
          background-color: #fcfcfc;
          border-radius: 6px;
          border: 1px solid #eee;
          outline: none;
          font-size: 18px;
          &::placeholder {
            color: #d1d1d1;
          }
        }
      }
    }

    .write-button {
      padding: 20px 0;
      background-color: #f1bfc0;
      width: 100%;
      border-radius: 0 0 6px 6px;
      color: #fff;
      font-size: 18px;
    }
  }
`;

export const DeleteModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;

  background-color: rgba(0, 0, 0, 0.7);
  animation: fadeIn 300ms ease-out forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    background-color: white;
    border-radius: 6px;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      font-size: 18px;
      border-bottom: 1px solid #eee;
    }
    .password {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      border-bottom: 1px solid #eee;

      span {
        color: #989898;
      }
      input {
        border: none;
        font-size: 18px;
        &:focus {
          outline: none;
        }
      }
    }
    .delete-button {
      padding: 20px 0;
      background-color: #f1bfc0;
      width: 100%;
      border-radius: 0 0 6px 6px;
      color: #fff;
      font-size: 18px;
    }
  }
`;
