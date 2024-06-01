import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.div`
  border-bottom: 1px solid #eee;
  border-radius: 4px;
  padding: 20px;
  margin: 20px 20px 40px 20px;
  text-align: left;
  word-break: keep-all;
  background-color: #e9e9e9;

  h1 {
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 16px;
  }
  p {
    font-size: 0.8rem;
  }
`;

export const InvitationWrapper = styled.div`
  .inform-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    .theme {
      font-size: 24px;
      display: flex;
      align-items: center;
      margin-bottom: 12px;
      position: relative;
      button {
        position: absolute;
        right: -120px;
        background-color: white;
        border: 1px solid #dcdcdc;
        border-radius: 8px;
        padding: 4px 8px;
        font-size: 20px;
      }
    }
  }
  .iframe-container {
    margin: 0 auto;
    padding: 10px;
    max-width: 400px;
    width: 100%;
    position: relative;

    @media ${({ theme }) => theme.windowSize.sm} {
      max-width: 338px;
    }

    img {
      width: 100%;
    }
    #preview {
      margin-top: -3px;
      width: 100%;
      height: 700px;
      border-radius: 0 0 0 24px;

      @media ${({ theme }) => theme.windowSize.sm} {
        height: 600px;
      }
    }
  }
  .button-container {
    display: flex;
    flex-direction: column;
    width: 350px;
    margin: 0 auto;
    font-size: 20px;
    white-space: nowrap;
    .edit {
      width: fit-content;
      margin: 10px auto;
      background-color: white;
      border: 1px solid #dcdcdc;
      border-radius: 8px;
      padding: 6px 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
    }
    .url {
      width: fit-content;
      margin: 10px auto;
      display: flex;
      align-items: center;
      background-color: white;
      border: 1px solid #e4e4e4;
      border-radius: 8px;
      padding: 8px 12px;
      cursor: pointer;

      span {
        margin-right: 8px;
      }
    }
  }
`;
