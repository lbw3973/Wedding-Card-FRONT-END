import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  text-align: center;
  position: relative;

  background-color: #fbfbfb;
  overflow: hidden;
  .observer {
    &.visible {
      animation: ${fadeIn} 1.5s ease-out forwards;
    }
    opacity: 0;
  }
`;

export const MainWrapper = styled.div`
  font-family: "CrimsonPro";
  padding: 40px 0;

  .date {
    color: #242424;
    line-height: 20px;
    .date-yymmdd {
      font-size: 30px;
      margin-bottom: 10px;
      span {
        display: inline-block;
        padding: 0 8px 0.1rem;
        border-right: 1px solid;
        line-height: 20px;
        text-align: center;

        &:last-child {
          border: none;
        }
      }
    }
    .date-day {
      span {
        letter-spacing: 2px;
        font-size: 16px;
      }
    }
  }

  .main-image {
    padding: 0 20px;
    margin: 20px 0;
    position: relative;
    overflow: hidden;
    line-height: 0;

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
    font-family: "GowunDodum", serif;
    margin: 10px 0;
    color: #544f4f;

    .wedding-info-name {
      display: flex;
      justify-content: center;
      gap: 16px;
      font-size: 20px;
      margin-bottom: 30px;
      color: #242424;
      #divider {
        width: 1px;
        height: 20px;
        background-color: #242424;
      }
    }

    .wedding-info-date {
      font-size: 18px;
      margin-bottom: 16px;
    }
    .wedding-info-hall {
      font-size: 18px;
      margin-bottom: 10px;
    }
  }
`;

export const GreetingWrapper = styled.div`
  padding: 40px 0;

  img {
    width: 25px;
    margin-bottom: 20px;
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
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

  .contact-button {
    font-family: "GowunDodum", serif;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px auto 0;
    border: 1px solid #cec3c3;
    padding: 10px 80px;
    border-radius: 32px;
    color: #242424;

    svg {
      margin-right: 10px;
    }
  }
`;

export const CalendarWrapper = styled.div`
  padding: 80px 0;
  background-color: #f6f5f5;
  margin: 20px 0;

  .date {
    color: #524548;

    .yymmdd {
      font-family: "CrimsonPro", serif;
      font-size: 24px;
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
      .sunday {
        color: red;
      }
      .react-calendar__tile--active {
        background-color: #cec3c3;
        border-radius: 100%;

        abbr {
          color: white;
        }
      }
      .saturday {
        color: inherit;
      }
      .react-calendar__month-view__weekdays {
        abbr[title="일요일"] {
          color: red;
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
    gap: 8px;
    padding: 20px 0;
    .eng {
      font-family: "CrimsonPro";
      letter-spacing: 3px;
      color: #c2b2b2;
    }
    .kor {
      font-family: "GowunDodum", serif;
      font-size: 20px;
      color: #89757a;
    }
  }
  .subtitle {
    font-family: "GowunDodum", serif;
    margin: 20px 0 40px;
    .wedding-hall {
      font-size: 20px;
      margin-bottom: 16px;
    }
    .address {
      color: #797979;
      font-size: 18px;
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
      background-color: #f2eeee;

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
  padding: 40px 20px;
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 20px 0;
    .eng {
      font-family: "CrimsonPro";
      letter-spacing: 3px;
      color: #c2b2b2;
    }
    .kor {
      font-family: "GowunDodum", serif;
      font-size: 20px;
      color: #89757a;
    }
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-content: center;
    gap: 8px;
    padding: 20px 0;

    img {
      width: 100%;
      height: 100%;
      border-radius: 6px;
      cursor: pointer;
      object-fit: cover;
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
    margin: 20px 0;
    .eng {
      font-family: "CrimsonPro";
      letter-spacing: 3px;
      color: #c2b2b2;
    }
    .kor {
      font-family: "GowunDodum", serif;
      font-size: 20px;
      color: #89757a;
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
    gap: 8px;
    margin: 20px 0;
    .eng {
      font-family: "CrimsonPro";
      letter-spacing: 3px;
      color: #c2b2b2;
    }
    .kor {
      font-family: "GowunDodum", serif;
      font-size: 20px;
      color: #89757a;
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
    .eng {
      font-family: "CrimsonPro";
      letter-spacing: 3px;
      color: #c2b2b2;
    }
    .kor {
      font-family: "GowunDodum", serif;
      font-size: 20px;
      color: #89757a;
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
      background-color: #d0b9b9;
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
    margin-bottom: 20px;
  }
  .title {
    font-family: "GowunDodum", serif;
    font-size: 20px;
    color: #89757a;
  }

  .wrapper {
    margin: 20px;
    border: 1px solid #f2eeee;
    border-radius: 6px;

    .title {
      position: relative;
      h3 {
        font-family: "GowunDodum", serif;
        background-color: #f2eeee;
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

export const FooterContainer = styled.div`
  padding: 40px;
  background-color: #f2eeee;
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

export const ContactModalContainer = styled.div`
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

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      padding: 20px 0;
      background-color: #f6f5f5;
      .eng {
        font-family: "CrimsonPro";
        letter-spacing: 3px;
        color: #c2b2b2;
      }
      .kor {
        font-family: "GowunDodum", serif;
        font-size: 20px;
        color: #89757a;
      }
    }

    .info {
      font-size: 18px;
      .human {
        padding: 16px 0;
        color: #242424;
        .grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          grid-template-rows: 40px;
          align-items: center;
          .icons {
            display: flex;
            justify-content: space-evenly;
          }
        }
      }
      .husband {
        .who {
          color: #6473aa;
        }
      }
      .wife {
        .who {
          color: #ce7373;
        }
      }
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
        background-color: #f2eeee;

        color: #89757a;
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
      background-color: #d0b9b9;
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
      background-color: #d0b9b9;
      width: 100%;
      border-radius: 0 0 6px 6px;
      color: #fff;
      font-size: 18px;
    }
  }
`;
