import * as S from "./style";
import { useParams } from "react-router";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import TheSimple from "@/Templates/TheSimple";
import Modern from "@/Templates/Modern";
import { useGetInvitationData } from "@/hooks/useGetInvitationData";
import Start from "@/Templates/Start";

type temp_template = "modern" | "thesimple" | "start";

const templates = {
  modern: {
    component: Modern,
    id: 0,
  },
  thesimple: {
    component: TheSimple,
    id: 1,
  },
  start: {
    component: Start,
    id: 2,
  },
};

const Letter = () => {
  const { id } = useParams();
  const { invitationData, isLoading } = useGetInvitationData(id as string);

  useEffect(() => {
    const body = document.querySelector("body");
    const root = document.getElementById("root");

    if (body) {
      body.style.backgroundColor = "#333";
    }

    if (root) {
      root.style.maxWidth = "450px";
      root.style.minWidth = "320px";
    }
  }, []);

  const renderTheme = () => {
    if (isLoading) {
      // 로딩 UI도 하나 뽑자
      return <div>Loading...</div>;
    }

    if (invitationData) {
      invitationData.template_id = 2;
      const templateKey = Object.keys(templates).find(
        key => templates[key as temp_template].id === invitationData.template_id,
      );

      if (templateKey) {
        const TemplateComponent = templates[templateKey as temp_template].component;
        return <TemplateComponent {...invitationData} />;
      }
    } else {
      // Uid가 없는경우.. 나중에 만들자
      return <div>Not Found</div>;
    }
  };

  return (
    <S.Main>
      <HelmetProvider>{renderTheme()}</HelmetProvider>
    </S.Main>
  );
};

export default Letter;
