import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url("/loading.gif");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 20%;
  height: 100%;
`;

const LoadingUI = () => {
  return <Container />;
};

export default LoadingUI;
