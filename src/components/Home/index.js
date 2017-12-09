import React, { Component } from "react";
import "./style.css";

export default class Home extends Component {
  componentDidMount() {
    const elemHome = document.querySelector(".home");
    setTimeout(() => {
      elemHome.classList.add("home--active");
    }, 1000);
  }

  render() {
    return (
      <div className="home">
        <div className="home__container">
          <div className="home__connectingLine--left">
            <div className="home__connectingLine" />
            <div className="home__connectingLine__mask--inner" />
          </div>
          <div className="home__connectingLine--right">
            <div className="home__connectingLine" />
            <div className="home__connectingLine__mask--inner" />
          </div>
          <div className="home__dot--left" />
          <div className="home__dot--center" />
          <div className="home__dot--right" />
          <div className="home__connectingLine__mask--bottom">
            <div className="home__title">
              <p>Jinsol.Kim</p>
              <span>Front-end Developer</span>
            </div>
          </div>
          <div className="home__connectingLine--outer" />
          <div className="home__connectingLine__mask--outer" />
        </div>
        <div className="home__skills">
          <div className="home__skill">
            <span>HTML</span>
          </div>
          <div className="home__skill">
            <span>CSS</span>
          </div>
          <div className="home__skill">
            <span>JavaScript</span>
          </div>
          <div className="home__skill">
            <span>&&</span>
            <p> React</p>
          </div>
        </div>
      </div>
    );
  }
}
