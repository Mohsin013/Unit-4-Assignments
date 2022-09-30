import React from "react";
import Styledbtn from "./Button.styled.js";

const Button = () => {
  return (
    <>
      <Styledbtn
        color={"#fff"}
        bgColor={"#2490FE"}
        radius={"4px"}
        padding={"4px 8px"}
        border={"none"}
        margin={"10px 4px"}
      >
        Primary Button
      </Styledbtn>
      <Styledbtn
        color={"black"}
        bgColor={"#fff"}
        radius={"4px"}
        padding={"4px 8px"}
        border={"solid"}
        margin={"10px 4px"}
      >
        Default Button
      </Styledbtn>
      <Styledbtn
        color={"#111"}
        bgColor={"#fff"}
        radius={"4px"}
        padding={"4px 8px"}
        border={"dashed"}
        margin={"10px 4px"}
      >
        Dashed Button
      </Styledbtn>
      <Styledbtn
        color={"#111"}
        bgColor={"#fff"}
        radius={"4px"}
        padding={"4px 8px"}
        border={"none"}
        margin={"10px 4px"}
      >
        Text Button
      </Styledbtn>
      <Styledbtn
        color={"#2490FE"}
        bgColor={"#fff"}
        radius={"4px"}
        padding={"4px 8px"}
        border={"none"}
        margin={"10px 4px"}
      >
        Link Button
      </Styledbtn>
    </>
  );
};

export default Button;