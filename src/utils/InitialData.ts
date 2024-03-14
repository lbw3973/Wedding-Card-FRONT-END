import { IReqCreateInvitation } from "@/types/invitation";

const InitialData_CreateInvitation: IReqCreateInvitation = {
  date: "",
  address: "",
  wedding_hall: "",
  welcome: [],
  welcome_align: "left",
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
  road: {
    subway: [],
    bus: [],
    car: [],
    etc: {
      type: "",
      info: [],
    },
  },
  management_password: "",
  video_id: "",
  bgm: 0,
};

export { InitialData_CreateInvitation };