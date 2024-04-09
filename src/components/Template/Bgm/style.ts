import styled from "styled-components";

export const AudioWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  max-width: 450px;
  display: flex;
  justify-content: end;

  .audio-image {
    padding: 20px;
    cursor: pointer;
  }
`;
