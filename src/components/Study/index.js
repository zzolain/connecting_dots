import React, { Component } from "react";
import "./style.css";
import StudyList from "./study_list";
import StudyDetail from "./study_detail";

export default class Project extends Component {
  studies = [
    {
      title: "Connecting dots",
      img: "https://i.imgur.com/jiKyhSd.png",
      description:
        "포트폴리오를 담은 웹어플리케이션. 사실 이 앱 자체가 그간 공부한 기술들을 총 동원하여 만든 포트폴리오입니다. 대단한 코드를 짠 것은 아니지만 React, Redux를 적극 활용하여 보았고, Animation은 CSS와 vanilla script로 구현했습니다. 차후엔 React-motion도 적용해 볼 예정입니다. 최선을 다하여 만들었기에 넘나 사랑스러운 나머지 하루에 300번씩 접속해서 가만히 바라보고 있습니다(...)",
      url: "https://jinsol.kim/"
    },
    {
      title: "Kakao Desktop Clone",
      img: "https://i.imgur.com/zlQLGNd.png",
      description:
        "HTML과 CSS 공부를 위해 카카오톡 앱 디자인을 따라해 본 Nomad Academy의 예제. 특히 CSS의 Flex 속성을 충분히 익히고 다룰 수 있어서 좋았습니다. 또한 CSS의 Display 속성 값 종류인 in-line과 block의 차이에 대해 익힐 수 있었고, 전체적으로 기본 페이지 구조를 구현하는데 큰 도움이 되었던 예제입니다.",
      url: "https://kakao-clone.herokuapp.com/"
    },
    {
      title: "Dev-log",
      img: "https://i.imgur.com/h11aZUj.png",
      description:
        "Markdown의 깔끔한 매력에 푹 빠졌었지요. Markdown 형식으로 작성한 글을 바로 포스팅할 수 있다기에 시작한 Github page. Hexo라는 정적 페이지 생성기를 이용하여 배포했습니다. 직접 테마를 만들어보겠다고 주구장창 마크업을 했더랬지요. Git 또한 익숙치 않아 별 의미 없는 Commit 수가 100개를 넘어가는 쑥쓰부끄 페이지입니다. 페이지의 목적은 개발 기록을 남기기 위한 것이었는데, 어느 순간부터 본래 취지를 벗어나 포스팅을 위한 글을 적고 있는 자신을 발견하고 잠시 멈춘 상태입니다. ",
      url: "https://zzolain-blog.herokuapp.com/"
    },
    {
      title: "Interacitve Web App",
      img: "https://i.imgur.com/1DB7xoQ.png",
      description:
        "페이스북 페이지 '1분 코딩'에서 주최한 인터랙티브 웹 코딩 워크샵에 참여하여 만든 결과물. Javascript 문법만 알았지, DOM을 'Get'하여 본 적도 없는 제가 큰 가르침을 받고 온 워크샵입니다. Event를 등록,  호출하는 방법, 브라우저의 상태 값들을 알아내어 값으로 이용하는 방법 등을 배웠습니다. 또한, 원하는 Animation을 순수 Javascript로 구현하기 위하여 알고리즘을 고민하고, 그것을 찾아가는 과정 등을 경험하면서 좀 더 수학적이고 효과적인 코드를 짤 수 있게 되었습니다. 이 때의 결과물은 About [BIOGRAPHY]에 담겨 있습니다. 아래 링크는 '1분 코딩' 워크샵 안내 페이지이며, 이 곳에서 저를 만나보실 수 있습니다 :)",
      url: "http://www.studiomeal.com/about/workshop"
    },
    {
      title: "Youtube Searcher",
      img: "https://i.imgur.com/ZDbxkVn.png",
      description:
        "첫 React 실습 예제. 검색어를 입력하면 검색 항목들이 결과로 나타나고 그 중 하나를 클릭하면 중앙 화면이 해당 비디오로 바뀝니다. 한 페이지 안에서 특정 부분만 정보가 실시간으로 바뀌는 것을 보고 기절초풍! 사실 사용자 입장에서는 당연하다는 듯이 여기고 사용했던 기능이지만, 개발을 시작한 뒤로 새삼 신기하고 경이롭게 다가오는 기능, 기술들이 많습니다. 세상에는 정말 천재들이 가득합니다...",
      url: "https://study-react-youtube-searcher.herokuapp.com/"
    },
    {
      title: "5 days Weather",
      img: "https://preview.ibb.co/cVDHhw/5days_weather.png",
      description:
        "향후 5일의 날씨 정보(온도, 기압, 습도)를 그래프로 표시하는 앱. fetchReact와 Redux를 공부하기 위한 예제이며 Udemy를 통해 학습 했습니다. 날씨 API를 Redux로 fetch할 때 Promise를 관리하는 middle ware에 대한 개념을 접할 수 있었습니다.",
      url: "https://study-react-5days-weather.herokuapp.com/"
    }



  ];
  constructor(props) {
    super(props);
    this.state = {
      selectedStudy: this.studies[0],
      direction : ""
     };
  }

  selectAnotherStudy(direction) {
    this.setState({ direction: direction });
    let indexOfSelectedStudy = this.studies.indexOf(this.state.selectedStudy);



    if (direction === "left" && indexOfSelectedStudy > 0) {
      this.setState({ selectedStudy: this.studies[indexOfSelectedStudy - 1] });
    } else if (direction === "left" && indexOfSelectedStudy === 0) {
      this.setState({ selectedStudy: this.studies[this.studies.length - 1] });
    } else if (
      direction === "right" &&
      indexOfSelectedStudy < this.studies.length - 1
    ) {
      this.setState({ selectedStudy: this.studies[indexOfSelectedStudy + 1] });
    } else if (
      direction === "right" &&
      indexOfSelectedStudy === this.studies.length - 1
    ) {
      this.setState({ selectedStudy: this.studies[0] });
    }
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

   render() {
    return (
      <div className="study">
        <div className="study--title">
          PlayGround:
          <p>what I've done</p>
        </div>
        <div className="study__list">
          <StudyList
            studies={this.studies}
            selectStudy={selectedStudy => this.setState({ selectedStudy })}
            selectedStudy={this.state.selectedStudy}
          />
        </div>
        <StudyDetail
          selectedStudy={this.state.selectedStudy}
          selectAnotherStudy={direction => this.selectAnotherStudy(direction)}
          direction={this.state.direction}
        />
      </div>
    );
  }
}
