import * as S from "./style";

import { useParams } from "react-router";
import { useEffect } from "react";

import { HelmetProvider } from "react-helmet-async";
import TheSimple from "@/Templates/TheSimple";
import Modern from "@/Templates/Modern";

type temp_template = "modern" | "thesimple";

const temp_param = {
  modern: <Modern />,
  thesimple: <TheSimple />,
};

const Letter = () => {
  const { id } = useParams();

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

  return (
    <S.Main>
      <HelmetProvider>{temp_param[id as temp_template]}</HelmetProvider>
    </S.Main>
  );
};

export default Letter;
