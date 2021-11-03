import { useState } from "react";
import styled from "styled-components";
import { Nav } from "./Nav";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  width: 100%;
  height: 937px;
`;

const UploadLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  .styledButton,
  .styledButton:after {
    width: 150px;
    height: 76px;
    line-height: 78px;
    font-size: 20px;
    font-family: "Bebas Neue", sans-serif;
    background: linear-gradient(45deg, transparent 5%, #ff013c 5%);
    border: 0;
    color: #fff;
    letter-spacing: 3px;
    box-shadow: 6px 0px 0px #00e6f6;
    outline: transparent;
    position: relative;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    cursor: pointer;
    overflow: hidden;
  }

  .styledButton:after {
    --slice-0: inset(50% 50% 50% 50%);
    --slice-1: inset(80% -6px 0 0);
    --slice-2: inset(50% -6px 30% 0);
    --slice-3: inset(10% -6px 85% 0);
    --slice-4: inset(40% -6px 43% 0);
    --slice-5: inset(80% -6px 5% 0);

    content: "이미지 업로드";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 3%,
      #00e6f6 3%,
      #00e6f6 5%,
      #ff013c 5%
    );
    text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px #00e6f6;
    clip-path: var(--slice-0);
  }

  .styledButton:hover:after {
    animation: 1s glitch;
    animation-timing-function: steps(2, end);
  }

  @keyframes glitch {
    0% {
      clip-path: var(--slice-1);
      transform: translate(-20px, -10px);
    }
    10% {
      clip-path: var(--slice-3);
      transform: translate(10px, 10px);
    }
    20% {
      clip-path: var(--slice-1);
      transform: translate(-10px, 10px);
    }
    30% {
      clip-path: var(--slice-3);
      transform: translate(0px, 5px);
    }
    40% {
      clip-path: var(--slice-2);
      transform: translate(-5px, 0px);
    }
    50% {
      clip-path: var(--slice-3);
      transform: translate(5px, 0px);
    }
    60% {
      clip-path: var(--slice-4);
      transform: translate(5px, 10px);
    }
    70% {
      clip-path: var(--slice-2);
      transform: translate(-10px, 10px);
    }
    80% {
      clip-path: var(--slice-5);
      transform: translate(20px, -10px);
    }
    90% {
      clip-path: var(--slice-1);
      transform: translate(-10px, 0px);
    }
    100% {
      clip-path: var(--slice-1);
      transform: translate(0);
    }
  }

  @media (min-width: 768px) {
    .styledButton,
    .styledButton:after {
      width: 300px;
      height: 86px;
      line-height: 88px;
    }
  }
`;

const UploadInput = styled.input`
  display: none;
`;

const PreviewBox = styled.div`
  background-color: White;
  margin-top: 20px;
`;

export const SingleImgInput = () => {
  const [url, setUrl] = useState<string>("");
  const uploadFileChange = (event: any) => {
    const result = URL.createObjectURL(event.target.files[0]);
    setUrl(result);
    const imgTag = document.getElementById("myImg");
    if (imgTag !== null) {
      imgTag.onload = () => {
        window.URL.revokeObjectURL(result);
      };
    }
    console.log("dd", url);
  };

  return (
    <Body>
      <Nav />
      <UploadLabel htmlFor="imgInput">
        <div className="styledButton">upload single img</div>
      </UploadLabel>
      <UploadInput
        id="imgInput"
        type="file"
        accept="image/*"
        onChange={(e) => uploadFileChange(e)}
      />
      <PreviewBox>
        <img id="myImg" src={url} />
      </PreviewBox>
    </Body>
  );
};
