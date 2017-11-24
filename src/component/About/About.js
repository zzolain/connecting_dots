import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="character">
          <div className="feet">
            <div className="foot-left" />
            <div className="foot-right" />
          </div>
        </div>
        <section className="scenes">
        <div className="prologue">
        <span>About Dots</span>
        </div>
          <div className="scene">
            <div className="arrow" />
            <div className="scene__content">
              <div className="dot-main">
                <div className="dot-main__text">
                  Jan 31. 1987
                  <br /> "Tada! Hello the World!"
                </div>
              </div>
              <div className="dots" />
            </div>
          </div>
          <div className="scene">
            <div className="arrow" />
            <div className="scene__content">
              <div className="dot-main" data-index="1" />
              <div className="dot-main__text">
                1999
                <br />My first web page released!
              </div>
              <div className="dots" />
            </div>
          </div>
          <div className="scene">
            <div className="arrow" />
            <div className="scene__content">
              <div className="dot-main" data-index="2" />
              <div className="dot-main__text">
                2003
                <br />To become a member of
                <br />a high school art group.
              </div>
              <div className="dots" />
            </div>
          </div>
          <div className="scene">
            <div className="arrow" />
            <div className="scene__content">
              <div className="dot-main" data-index="4" />
              <div className="dot-main__text">
                2009 - 2011
                <br />Dropped the school
                <br />from Art to Psychology
              </div>
              <div className="dots" />
            </div>
          </div>
          <div className="scene scene--last">
            <div className="arrow" />
            <div className="scene__content">
              <div className="dot-main" data-index="5" />
              <div className="dot-main__text">
                June 2017 ~
                <br />Having been Connecting
                <br />the dots
              </div>
              <div className="dots" />
            </div>
          </div>
          <div className="epilogue">
            <div className="about">
              <span>Front-end Developer</span>
              <span>zzolain</span>
              <a href="mailto:zzolain@gmail.com">zzolain@gmail.com</a>
            </div>
            <div className="about__contacts">
              <p>
                <a href="https://github.com/zzolain" target="_blank">
                  Github
                </a>
              </p>
              <p>
                <a href="https://www.facebook.com/zzolain" target="_blank">
                  Facebook
                </a>
              </p>
            </div>
            <div className="quote">
              <p>
                You can’t connect the dots looking forward;
                <br /> you can only connect them looking backwards.
                <br /> So you have to trust that the dots will somehow
                <br /> connect in your future.
              </p>
              <span>- Steve Jobs -</span>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;