import React from "react";
import "./style.css";

const Logo = () => {
  return (
    <div className="logo">
      <div className="logo__container">
        <div className="logo__connectingLine--left">
          <div className="logo__connectingLine" />
          <div className="logo__connectingLine__mask--inner" />
        </div>
        <div className="logo__connectingLine--right">
          <div className="logo__connectingLine" />
          <div className="logo__connectingLine__mask--inner" />
        </div>
        <div className="logo__dot--left" />
        <div className="logo__dot--center" />
        <div className="logo__dot--right" />
        <div className="logo__connectingLine__mask--bottom">
          <div className="logo__title">
            <p>ZZOLAIN</p>
            <span>Front-end Developer</span>
          </div>
        </div>
        <div className="logo__connectingLine--outer" />
        <div className="logo__connectingLine__mask--outer" />
      </div>
    </div>
  );
};

export default Logo;

window.onload = function activateLogo() {
  document
    .querySelector(".logo__container")
    .classList.add("logo__container--activate");
};