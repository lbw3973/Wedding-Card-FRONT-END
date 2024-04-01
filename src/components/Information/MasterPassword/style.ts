import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  border-bottom: 1px solid #dcdcdc;
  padding: 40px 0 20px;

  h1 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 40px;

    @media ${({ theme }) => theme.windowSize.md} {
      font-size: 20px;
      margin-bottom: 32px;
    }

    @media ${({ theme }) => theme.windowSize.sm} {
      font-size: 16px;
      margin-bottom: 24px;
    }
  }

  h3 {
    font-size: 20px;
    color: #aaa;
    margin-bottom: 10px;

    @media ${({ theme }) => theme.windowSize.md} {
      font-size: 16px;
      margin-bottom: 7px;
    }

    @media ${({ theme }) => theme.windowSize.sm} {
      font-size: 14px;
      margin-bottom: 4px;
    }
  }
`;

export const Wrapper = styled.div<{ $isValid: boolean }>`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  max-width: 350px;

  div {
    position: relative;
    width: 100%;

    input {
      padding: 5px 10px;
      width: 100%;
    }
    button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: -15px;
      padding-top: 2px;
    }
  }
  p {
    color: red;
    visibility: ${({ $isValid }) => ($isValid ? "hidden" : "visible")};
  }
`;
