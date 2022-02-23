import { useState } from "react";
import styled from "styled-components";
import { Nav } from "./Nav";

export const Home = () => {
  const Lotto = () => {
    const ILLHWAKCEONGEUM: number[] = [];

    for (let i = 0; i < 6; i++) {
      const num = Math.floor(Math.random() * (46 - 1)) + 1;
      if (ILLHWAKCEONGEUM.indexOf(num) !== -1) {
        i--;
        continue;
      } else {
        ILLHWAKCEONGEUM.push(num);
      }
    }

    alert(ILLHWAKCEONGEUM);
    return ILLHWAKCEONGEUM;
  };

  return (
    <>
      <Nav />
      <div>
        <img src="lucky.png" onClick={Lotto} />
      </div>
    </>
  );
};
