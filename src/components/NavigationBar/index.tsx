import * as S from "./style";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { LoginState } from "@/stores/LoginStateStore";
import { IoSearchOutline, IoPersonOutline, IoGridOutline } from "react-icons/io5";

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_KAKAO_REST_API_KEY}&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URL}&response_type=code`;

const NavigationBar = () => {
  const [searchState, setSearchState] = useState(false);
  const isLogined = useRecoilValue(LoginState);

  const clickSearch = () => {
    setSearchState(!searchState);
  };

  return (
    <S.NavContainer>
      <div>
        <S.NavLinkEl to={"/"}>
          <img src="/logo.png" alt="logo" />
        </S.NavLinkEl>
      </div>
      <div onClick={clickSearch}>
        <S.NavLinkEl to={"/search"}>
          <IoSearchOutline size={30} color="#3e4034" />
          <span>검색</span>
        </S.NavLinkEl>
      </div>
      <div>
        <S.NavLinkEl to={"/preview"}>
          <IoGridOutline size={30} color="#3e4034" />
          <span>템플릿</span>
        </S.NavLinkEl>
      </div>
      <div>
        <S.NavLinkEl to={isLogined ? "/mypage" : KAKAO_AUTH_URL}>
          <IoPersonOutline size={30} color="#3e4034" />
          <span>MY</span>
        </S.NavLinkEl>
      </div>
    </S.NavContainer>
  );
};

export default NavigationBar;
