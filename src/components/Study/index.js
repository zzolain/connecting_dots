import React, { Component } from "react";
import "./style.css";

export default class Study extends Component {
  render() {
    return (
      <div className="study">
        <div className="study--title">
          PlayGround:
          <p>what I've done</p>
        </div>
        <div className="study__container">
          <div className="study__wrapper">
            <div className="study__thumnail--wrapper">
              <div className="study__thumnail--image" />
              <div className="study__thumnail--title">TITLE PLACEHOLDER</div>
            </div>
            <div className="study__thumnail__text">
              <span>
                동해물과 백두산이 마르고 닳도록 대한민국 만세 종!소리가 내귀에
                종소리가 들리게 해애줘어어 이런 설레임의 시작을 알고 싶은데
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
