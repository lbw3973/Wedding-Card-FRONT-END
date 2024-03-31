import { atom } from "recoil";
import { getCookie } from "@/utils/cookie";

export const LoginState = atom<boolean>({
  key: "LoginState",
  default: getCookie("WECA_access_token") !== undefined,
});
