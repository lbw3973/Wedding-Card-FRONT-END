import { LoginState } from "@/stores/LoginStateStore";
import { setCookie } from "@/utils/cookie";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

let isMount = false;

const Auth = () => {
  const navigate = useNavigate();
  const setIsLogined = useSetRecoilState(LoginState);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const error = urlParams.get("error");

    if (!isMount) {
      isMount = true;
      if (code) {
        getAccessToken(code);
      } else if (error) {
        navigate("/");
      }
    }
  }, []);

  const getAccessToken = async (code: string) => {
    const grantType = "authorization_code";
    const response = await axios.post(
      `https://kauth.kakao.com/oauth/token?grant_type=${grantType}&client_id=${import.meta.env.VITE_KAKAO_REST_API_KEY}&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URL}&code=${code}`,
      {},
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      },
    );
    const { data } = response;
    const { access_token } = data;
    setCookie("WECA_access_token", access_token);
    setIsLogined(true);
    navigate("/mypage");
  };

  return <></>;
};

export default Auth;
