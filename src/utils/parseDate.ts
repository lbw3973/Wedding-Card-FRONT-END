export const getYear = (date: Date) => {
  return date.getFullYear();
};

export const getMonth = (date: Date) => {
  return date.getMonth() + 1;
};

export const getMonthWithZero = (date: Date) => {
  const month = date.getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

export const getDate = (date: Date) => {
  return date.getDate();
};

export const getDayEng = (date: Date) => {
  return ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"][date.getDay()];
};

export const getDayKor = (date: Date) => {
  return ["월", "화", "수", "목", "금", "토", "일"][date.getDay()];
};

export const getFullDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()];

  return `${year}년 ${month}월 ${day}일 ${dayOfWeek}요일 ${hour > 12 ? `오후 ${hour % 12}` : `오전 ${hour}`}시 ${minute ? `${minute}분` : ``}`;
};

export const getDateWithDots = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}.${month}.${day}`;
};

export const getDateWithKor = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}년 ${month}월 ${day}일`;
};

export const getDateMonthDay = (date: Date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${month < 10 ? "0" + month : month}${day < 10 ? "0" + day : day}`;
};

export const getDayWithTime = (date: Date) => {
  const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()];
  const hour = date.getHours();
  const minute = date.getMinutes();

  return `${dayOfWeek}요일 ${hour > 12 ? `오후 ${hour % 12}` : `오전 ${hour}`}시 ${minute ? `${minute}분` : ``}`;
};

export const getDday = (date: Date) => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const targetDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const dDayTime = targetDate.getTime() - today.getTime();
  const dDay = Math.ceil(dDayTime / (1000 * 60 * 60 * 24));

  return dDay;
};

export const tileClassName = ({ date, view }: { date: Date; view: string }) => {
  if (view === "month") {
    if (date.getDay() === 6) {
      return "saturday";
    } else if (date.getDay() === 0) {
      return "sunday";
    }
  }
};

export const formatDay = (_locale: string | undefined, date: Date) => {
  return date.getDate().toString();
};
