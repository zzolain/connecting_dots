import React, { Component } from "react";
import "./style.css";
import StudyList from "./study_list";
import StudyListItem from "./study_list_item";


export default class Project extends Component {
  studies = [
    {
      title: "Connecting dots",
      img: "https://preview.ibb.co/gnAxhw/connecting_dots.png",
      description:
        "포트폴리오를 담은 웹어플리케이션. 사실 이 앱 자체가 그간 공부한 기술들을 총 동원하여 만든 포트폴리오이다. 사용한 기술은 React, Redux. Animation은 CSS와 vanilla script로 구현했다. 최선을 다하여 만들었기에 넘나 사랑스러운 앱. 하루에 300번씩 접속해서 바라본다.",
      url: "https://zzolain.github.io/"
    },
    {
      title: "5 days Weather",
      img: "https://preview.ibb.co/cVDHhw/5days_weather.png",
      description:
        "향후 5일의 날씨 정보(온도, 기압, 습도)를 그래프로 표시하는 앱. fetchReact와 Redux를 공부하기 위한 예제이며 Udemy를 통해 학습. 날씨 API를 Redux로 fetch할 때 Promise를 관리하는 middle ware에 대한 개념을 접할 수 있었음.",
      url: "https://zzolain.gitgub.io/study-react-middleware/"
    },
    {
      title: "Kakao Destop Clone",
      img: "https://preview.ibb.co/mQx4Ub/kakao_clone.png",
      description: "카카오 데스크탑 앱 클론. CSS, 특히 Flex 개념을 익히기 좋았음",
      url: "https://zzolain.github.io/Kakao-Clone-App/"
    }
  ]

  state = {
    selectedStudy: this.studies[0]
  }

  render() {
    console.log(this.state.selectedStudy);
    return (
      <div className="study">
        <div className="study--title">
          PlayGround:
          <p>what I've done</p>
        </div>
        <div className="study__list">
        <ul>
          <StudyList studies={this.studies} selectStudy={selectedStudy => this.setState({selectedStudy})} />
          </ul>
        </div>
        <StudyListItem selectedStudy={this.state.selectedStudy} />
      </div>
    );
  }
}
