import React from "react";
import ZAP from "../assets/zap.svg";
import "./buttonzap.css";

function ButtonZap() {
  return (
    <a href="https://contate.me/tavares-teck">
      <img src={ZAP} alt="icone do whatsapp" className="zap" />
    </a>
  );
}

export default ButtonZap;
