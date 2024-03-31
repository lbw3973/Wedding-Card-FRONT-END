import * as S from "./style";
import MainPhoto from "@/components/Information/MainPhoto";
import HumanInfo from "@/components/Information/HumanInfo";
import Greeting from "@/components/Information/Greeting";
import ProgressBar from "@/components/Information/ProgressBar";
import Contact from "@/components/Information/Contact";
import Account from "@/components/Information/Account";
import SlidePhotos from "@/components/Information/SlidePhotos";
import WeddingSchedule from "@/components/Information/WeddingSchedule";
import MasterPassword from "@/components/Information/MasterPassword";
import BackGroundMusic from "@/components/Information/BackGroundMusic";
import YoutubeVideo from "@/components/Information/YoutubeVideo";
import LiveWedding from "@/components/Information/LiveWedding";
import ShareKakao from "@/components/Information/ShareKakao";
import { useSetRecoilState } from "recoil";
import { invitationJSONState } from "@/stores/createInvitationJSONStore";
import { useEffect } from "react";
import { JSONData } from "@/mock/JSONdata";

const ModifyInformation = () => {
  const invitationData = useSetRecoilState(invitationJSONState);

  useEffect(() => {
    invitationData(JSONData);
  }, []);

  return (
    <S.Container>
      <ProgressBar />
      <MainPhoto />
      <Greeting />
      <HumanInfo />
      <Contact />
      <Account />
      <SlidePhotos />
      <WeddingSchedule />
      <MasterPassword />
      <BackGroundMusic />
      <YoutubeVideo />
      <LiveWedding />
      <ShareKakao />
    </S.Container>
  );
};

export default ModifyInformation;
