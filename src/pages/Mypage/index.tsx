import MyInvitation from "@/components/Mypage/MyInvitation";
import * as S from "./style";
import Favorite from "@/components/Mypage/Favorite";
import FavoriteData from "@/mock/Favorite.json";

const Mypage = () => {
  return (
    <S.Section>
      <MyInvitation />
      <Favorite data={FavoriteData} />
    </S.Section>
  );
};

export default Mypage;
