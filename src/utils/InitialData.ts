import { IReqInvitationJSON, IReqInvitationPhotos } from "@/types/invitation";

const InitialData_CreateInvitationJSON: IReqInvitationJSON = {
  date: "",
  location: {
    wedding_hall: "",
    address: "",
    latitude: 37.2591458,
    longitude: 127.031397,
  },
  welcome: [],
  welcome_align: "center",
  contents: {
    video_id: "",
    bgm: 0,
    effect: 0,
    live_url: "",
  },
  management: {
    management_password: "",
  },
  HUSBAND: {
    ME: {
      name: "",
      bank: "",
      account: "",
      contact: "",
    },
    FATHER: {
      name: "",
      bank: "",
      account: "",
      contact: "",
    },
    MOTHER: {
      name: "",
      bank: "",
      account: "",
      contact: "",
    },
    relationship: "",
  },
  WIFE: {
    ME: {
      name: "",
      bank: "",
      account: "",
      contact: "",
    },
    FATHER: {
      name: "",
      bank: "",
      account: "",
      contact: "",
    },
    MOTHER: {
      name: "",
      bank: "",
      account: "",
      contact: "",
    },
    relationship: "",
  },
  subway: [],
  bus: [],
  car: [],
  etc: {
    transport_type: "",
    info: [],
  },
  open_graph: {
    title: "",
    subtitle: "",
  },
};

const InitialData_CreateInvitationPhotos: IReqInvitationPhotos = {
  main_photo: undefined,
  slide_photos: [],
  kakao_thumbnail: undefined,
};

const MAX_IMAGE_SIZE = 1024 * 1024 * 3;
const MAX_UPLOAD_IMAGE_NUMBER = 15;

export {
  InitialData_CreateInvitationJSON,
  InitialData_CreateInvitationPhotos,
  MAX_IMAGE_SIZE,
  MAX_UPLOAD_IMAGE_NUMBER,
};
