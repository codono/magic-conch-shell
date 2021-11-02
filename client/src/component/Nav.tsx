import { useState } from "react";
import styled from "styled-components";

const Navbody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  background-color: aliceblue;
`;

export const Nav = () => {
  return (
    <>
      <Navbody>
        <button onClick={() => (window.location.href = "/")}>home</button>
        <button onClick={() => (window.location.href = "/singleImgInput")}>
          single img input
        </button>
        <button onClick={() => (window.location.href = "/dragAndDrop")}>
          drag and drop
        </button>
        <button onClick={() => (window.location.href = "/carousel")}>
          carousel
        </button>
      </Navbody>
    </>
  );
};
