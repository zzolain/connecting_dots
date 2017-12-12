import React, { Component } from "react";
import "./style.css";
import SceneList from "./scene_list";
import Epilogue from "./epilogue";

export default class About extends Component {
  scenes = [
    {
      title: '"Tada! Hello the World!"',
      date: "Jan 31. 1987",
      dots: [
        "My father taught me Korean chess.",
        "Eveyday I played it with him, which is the most delightful memory.",
        "He gave me a present. It was a PC!!",
        "Internet access available in Korea.",
        "Pocket Monsters hit Korean kids.(<- me)"
      ]
    },
    {
      title: "My first web page released!",
      date: "1999",
      dots: [
        "Pikachu.HTML",
        "Friends enjoyed my website and left messages. I was really happy with them.",
        "Learned Adobe Photoshop & Illustrator to edit website images.",
        "My high school teacher looked for an assistant who can deal with Photoshop and I was the very student.",
        "Thanks to it, I won a prize for the computer youngster in early rising."
      ]
    },
    {
      title: "To become a member of a high school art group.",
      date: "2003",
      dots: [
        'I beleived I needed to study design in order to become "someone" who builds web pages.',
        "Ki-tae, my best class mate, was in an art group of the school.",
        "He let me see Taehong Park, the art group teacher and the best art teacher ever.",
        "Became a huge fan of him and joined his art group.",
        "Entered Visual Design department of Incheon National University. 2005"
      ]
    },
    {
      title: "Dropped the school. From Art to Psychology.",
      date: "2009 - 2011",
      dots: [
        "It was not as I expected how life was going as a designer.",
        "Made a journey to Rome in Italy to have some break for a month.",
        "I totally forgot what I wanted to become and decided to have more time to know who I am and really want to be.",
        "Entered Pusan National University Psychology dep. Feb 2011.",
        "Hooked on Congnitive psychology, Human Factors(Ergonomics) and UI/UX."
      ]
    },
    {
      title: "Having been Connecting the dots.",
      date: "June 2017 ~ Present",
      dots: [
        '"How to Live" - Simin Yoo, "Lazy Hitchhikers Tour De Europe" - Surplus',
        "Opentutorials.org Night Coding season 1 with Google Korea.",
        "Study Group with Back-end developers and designers.",
        "NomadCoders.co React/React Native On-line course.",
        "StudioMeal.com Interaction web Workshop season 1 in Jeju.",
        "Nov 24. A certificate of Engineer Information Processing.",
        "Udemy.com Modern React with Redux",
        "Dec 10. My lovely First Portfolio Web Application"
      ]
    }
  ];

  scrollYAnimation() {
    const elemPrologue = document.querySelector(".prologue");
    const elemScenes = document.querySelectorAll(".scene");
    const elemMainDots = document.querySelectorAll(".scene__content");
    const elemArrows = document.querySelectorAll(".arrow");

    const characterY = document.querySelector(".character").offsetTop;
    let yVal = 0;

    if (elemPrologue.getBoundingClientRect().y > window.innerHeight * 0.7) {
      
      elemPrologue.classList.remove("prologue--active");
    } else {
      elemPrologue.classList.add("prologue--active");
    }


    for (let i = 0; i < elemMainDots.length; i++) {
      yVal = elemMainDots[i].getBoundingClientRect().y;

      if (yVal < window.innerHeight * 0.08 || yVal > window.innerHeight * 0.8) {
        elemScenes[i].classList.remove("scene--active");
        elemScenes[i].lastElementChild.lastElementChild.classList.remove(
          "dots--active"
        );
      } else {
        elemScenes[i].classList.add("scene--active");
        elemScenes[i].lastElementChild.lastElementChild.classList.add(
          "dots--active"
        );
      }

      if (Math.abs(characterY - yVal) < 300) {
        elemArrows[i].classList.add("arrow--active");
      }
    }

    const elemSceneLast = elemScenes[elemScenes.length - 1];
    if (!elemSceneLast.classList.contains("scene--active")) {
      document.querySelector(".epilogue").classList.add("epilogue--active");
    } else {
      document.querySelector(".epilogue").classList.remove("epilogue--active");
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollYAnimation);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollYAnimation);
  }

  render() {
    return (
      <div className="about">
        <div className="character" />
        <section className="scenes">
          <div className="prologue">
            <span className="prologue__title">BIOGRAPHY</span>
            <span className="prologue__subtitle">
              ABOUT<br /> DOTS
            </span>
          </div>

          <SceneList scenes={this.scenes} />

          <Epilogue />
        </section>
      </div>
    );
  }
}
