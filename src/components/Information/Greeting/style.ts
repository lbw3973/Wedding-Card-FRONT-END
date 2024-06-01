import styled from "styled-components";

export const Container = styled.div<{ $textAlign: string }>`
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

  .textarea {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;

    textarea {
      font-family: "Pretendard";
      resize: none;
      width: 80%;
      height: 150px;
      padding: 10px;
      font-size: 18px;
      border: 1px solid #acacac;
      border-radius: 0px 0px 4px 4px !important;
      text-align: ${({ $textAlign }) => $textAlign};

      b {
        font-weight: 600;
      }

      @media ${({ theme }) => theme.windowSize.md} {
        font-size: 14px;
        margin-bottom: 32px;
      }

      &:focus {
        outline: none;
      }
    }
    #content-edit-area {
      font-family: "Pretendard";
      width: 80%;
      height: 150px;
      padding: 10px;
      font-size: 18px;
      border: 1px solid #acacac;
      border-radius: 0px 0px 4px 4px !important;
      text-align: ${({ $textAlign }) => $textAlign};

      &:focus {
        outline: none;
      }

      b {
        font-weight: 600;
      }
    }
  }
`;

export const TextEditor = styled.div`
  background-color: #ececec;
  width: 80%;
  padding: 10px;
  height: 30px;
  border-radius: 4px 4px 0 0;
  border: 1px solid #acacac;
  border-bottom: none;
  text-align: left;

  display: flex;

  button {
    padding: 4px 6px;
    &:hover {
      background-color: #dcdcdc;
    }

    svg {
      height: 22px;
    }
  }

  #BOLD {
    font-weight: 600;
  }

  #UNDERLINE {
    span {
      padding-bottom: 1px;
      box-shadow: inset 0 -1px 0 #000;
    }
  }
  #ITALIC {
    span {
      font-style: italic;
    }
  }

  #divider {
    width: 1px;
    background-color: #cccccc;
    height: 70%;
    margin: auto 6px;
  }
`;

export const EditorContainer = styled.div`
  font-family: "Pretendard";
  width: 80%;
  height: 150px;
  padding: 10px;
  font-size: 18px;
  border: 1px solid #acacac;
  border-radius: 0px 0px 4px 4px !important;
  overflow-y: scroll;
  line-height: 1.3;
`;
