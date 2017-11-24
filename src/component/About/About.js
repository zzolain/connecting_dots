import React, { Component } from "react";
import "./About.css";

class About extends Component {
  state = {
    scenes: [
      {
        title: '"Tada! Hello the World!"',
        date: 'Jan 31. 1987',
        dots: [
          'My father taught me Korean chess.',
          "Eveyday I played it with him, which is the most delightful memory.",
          "He gave me a present. It was a PC!!",
          "Internet access available in Korea.",
          "Pocket Monsters hit Korean kids.(<- me)"
        ]
      },
      {
        title: "My first web page released!",
        date: '1999',
        dots: [
          "Pikachu.HTML",
          "Friends enjoyed my website and left messages. I was really happy with them.",
          "Learned Adobe Photoshop & Illustrator to edit website images.",
          "My high school teacher looked for an assistant who can deal with Photoshop and I was in.",
          "Thanks to it, I won a prize for the computer youngster in early rising."
        ]
      },
      {
        title: 'To become a member of a high school art group.',
        date: '2003',
        dots: [
          'I beleived I needed to study design in order to become "someone" who builds web pages.',
          "Ki-tae, my best class mate, was in an art group.",
          "He let me see Taehong Park, the best art teacher ever.",
          "Became a huge fan of him and joined his art group.",
          "Entered Visual Design department of Incheon National University. 2005"
        ]
      },
      {
        title: "Dropped the school. From Art to Psychology.",
        date: '2009 - 2011',
        dots: [
          "It was not as I expected how life was going as a designer.",
          "Made a journey to Rome to have some break for a month.",
          "I totally forgot what I wanted to become and decided to have more time to know who I am and really want to be.",
          "Entered Pusan National University Psychology dep. Feb 2011.",
          "Hooked on Congnitive psychology, Human Factors(Ergonomics) and UI/UX."
        ]
      },
      {
        title: "Having been Connecting the dots.",
        date: 'June 2017 ~ Present',
        dots: [
          '"How to Live" - Simin Yoo, "Lazy Hitchhikers Tour De Europe" - Surplus',
          'Opentutorials.org Night Coding season 1 with Google Korea.',
          "Study Group with Back-end developers and designers.",
          'NomadCoders.co React/React Native On-line course.',
          'StudioMeal.com Interaction web Workshop season 1 in Jeju.'
        ]
      }
    ]
  };

  render() {
    return (
      <div className="about">
        <div className="character" />
        <section className="scenes">
          <div className="prologue">
            <span>About Dots</span>
          </div>

          <Scenes scenes={this.state.scenes} />

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

function Scenes({ scenes }) {
  return scenes.map((scene, index) => {
    return (
      <div className="scene" key={index}>
        <div className="arrow" />
        <div className="scene__content">
          <div className="dot-main">
            <div className="dot-main__text">
            <p>{scene.date}</p>
            <p>{scene.title}</p>
            </div>
          </div>
          <div className="dots">
            {scene.dots.map((dot, index) => {
              return (
                <span className="dot__text" key={index}>
                  {dot}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    );
  });
}
