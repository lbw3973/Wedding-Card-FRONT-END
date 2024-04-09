import { useState } from "react";
import * as S from "./style";
import { IoOpenOutline } from "react-icons/io5";
import LoadingUI from "@/components/Common/LoadingUI";
import { Link } from "react-router-dom";

const MyInvitation = () => {
  const [isIframeLoading, setIsIframeLoading] = useState(false);

  return (
    <S.Container>
      <S.Header>
        <h1>모바일 청첩장</h1>
        <p>
          ·&nbsp;제작일과 관계없이 예식일 <strong>+30일 후</strong> 청첩장이 삭제됩니다.
        </p>
      </S.Header>
      <S.InvitationWrapper>
        <div className="inform-container">
          <div className="theme">
            <span>더 심플</span>
            <button>테마 변경</button>
          </div>
        </div>
        <div className="iframe-container">
          <img src="/Template/iphone_frame.png" />
          <iframe id="preview" src="http://localhost:5173/u/sample-modern/2" onLoad={() => setIsIframeLoading(true)}></iframe>
          {!isIframeLoading && <LoadingUI />}
        </div>
        <div className="button-container">
          <Link className="edit" to="/modify/information">
            <span>정보 수정하기</span>
          </Link>
          <div className="url">
            <span>모바일 청첩장 바로가기</span>
            <IoOpenOutline />
          </div>
        </div>
      </S.InvitationWrapper>
    </S.Container>
  );
};

export default MyInvitation;
