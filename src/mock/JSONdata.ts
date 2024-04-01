import { IReqInvitationJSON } from "@/types/invitation";

export const JSONData: IReqInvitationJSON = {
  date: "2025-04-26T14:30",
  location: {
    wedding_hall: "이비스호텔 15층 베르사유 홀",
    address: "경기 수원시 팔달구 권광로 132",
    latitude: 37.2591458,
    longitude: 127.03139,
  },
  welcome: [
    {
      text: "살랑이는 바람결에",
      inline_style: [],
    },
    {
      text: "사랑이 묻어나는 계절입니다.",
      inline_style: [],
    },
    {
      text: "여기 곱고 예쁜 두 사람이 사랑을 맺어",
      inline_style: [
        {
          offset: 15,
          length: 6,
          style: "ITALIC",
        },
        {
          offset: 3,
          length: 5,
          style: "BOLD",
        },
      ],
    },
    {
      text: "인생의 반려자가 되려 합니다.",
      inline_style: [
        {
          offset: 4,
          length: 3,
          style: "UNDERLINE",
        },
        {
          offset: 4,
          length: 3,
          style: "BOLD",
        },
      ],
    },
    {
      text: "새 인생을 시작하는 이 자리에 오셔서",
      inline_style: [],
    },
    {
      text: "축복해 주시면 감사하겠습니다.",
      inline_style: [
        {
          offset: 0,
          length: 2,
          style: "BOLD",
        },
      ],
    },
  ],
  welcome_align: "center",
  contents: {
    bgm: 2,
    effect: 1,
    video_id: "4nyYj0uL5rg",
    live_url: "https://www.google.co.kr",
  },
  management: {
    management_password: "",
  },
  HUSBAND: {
    ME: {
      name: "김신랑",
      bank: "신한",
      account: "110-123-456789",
      contact: "010-1111-2222",
    },
    FATHER: {
      name: "김장인",
      bank: "신한",
      account: "110-123-456789",
      contact: "010-2222-3333",
    },
    MOTHER: {
      name: "박장모",
      bank: "신한",
      account: "110-123-456789",
      contact: "010-3333-4444",
    },
    relationship: "장남",
  },
  WIFE: {
    ME: {
      name: "이신부",
      bank: "신한",
      account: "110-123-456789",
      contact: "010-4444-5555",
    },
    FATHER: {
      name: "이사돈",
      bank: "신한",
      account: "110-123-456789",
      contact: "010-5555-6666",
    },
    MOTHER: {
      name: "김사돈",
      bank: "신한",
      account: "110-123-456789",
      contact: "010-6666-7777",
    },
    relationship: "차녀",
  },
  subway: [
    {
      text: "[수인분당선] 수원시청역 2번출구 도보 3분",
      inline_style: [
        {
          offset: 8,
          length: 5,
          style: "BOLD",
        },
      ],
    },
  ],
  bus: [
    {
      text: "수원역 매산시장 정류장",
      inline_style: [
        {
          offset: 0,
          length: 12,
          style: "BOLD",
        },
      ],
    },
    {
      text: "92, 92-1",
      inline_style: [],
    },
  ],
  car: [
    {
      text: "이비스호텔 수원점 주차장 2시간 무료 이용가능",
      inline_style: [],
    },
    {
      text: "안내 데스크에서 주차권 수령",
      inline_style: [
        {
          offset: 9,
          length: 3,
          style: "BOLD",
        },
        {
          offset: 9,
          length: 3,
          style: "UNDERLINE",
        },
      ],
    },
  ],
  etc: {
    transport_type: "전세버스",
    info: [
      {
        text: "천안 버스터미널에서 오전 9시 30분",
        inline_style: [
          {
            offset: 11,
            length: 9,
            style: "BOLD",
          },
        ],
      },
      {
        text: "혼주에게 미리 연락해주셔야 합니다",
        inline_style: [],
      },
    ],
  },
  open_graph: {
    title: "김신랑 ♡ 김신부",
    subtitle: "우리 결혼합니다.",
  },
};
