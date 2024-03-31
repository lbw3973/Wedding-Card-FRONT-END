import MainSwiper from "@/components/Home/MainSwiper";
import * as S from "./style";
import { userLogout } from "@/apis/kakao";
import { useGetUserInfo } from "@/hooks/useGetUserInfo";
import { removeCookie } from "@/utils/cookie";
import Description from "@/components/Home/Description";
import { useSetRecoilState } from "recoil";
import { LoginState } from "@/stores/LoginStateStore";

const Home = () => {
  const { userInfo } = useGetUserInfo();
  const setIsLogined = useSetRecoilState(LoginState);

  const clickLogout = async () => {
    if (userInfo) {
      const res = await userLogout(userInfo?.id);
      if (res.status === 200) {
        removeCookie("WECA_access_token");
        setIsLogined(false);
      }
    }
  };
  return (
    <div>
      <MainSwiper />
      <Description />
      <S.Logo src="/logo.png" alt="logo" onClick={clickLogout} />
    </div>
  );
};

export default Home;
