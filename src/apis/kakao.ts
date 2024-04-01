import { IKakaoUserInfo } from "@/types/kakao";
import { kakaoInstance } from "./axios";

export const getUserInfo = async (): Promise<IKakaoUserInfo> => {
  const res = await kakaoInstance.get("/v2/user/me");
  return res.data;
};

export const userLogout = async (userId: number) => {
  const res = await kakaoInstance.post("/v1/user/logout", { target_id_type: "user_id", target_id: userId });
  return res;
};
