import React, { Component } from 'react'
import './style.css'
import ProjectList from './project_list'
import ProjectDetail from './project_detail'

export default class Project extends Component {
  projects = [
    {
      title: '꽃다발 카드 제작 웹앱',
      img: 'https://i.imgur.com/57d0rxm.png',
      description: '제주 코딩 캠프에서 우연히 만난 디자이너, 개발자분을 모시고 시작한 팀프로젝트입니다. \n "일러스트를 이용한 DIY 꽃다발 및 카드 제작 웹어플리케이션" \n 사용자가 원하는 꽃을 선택하고 직접 꽃 일러스트를 조작하여 원하는 꽃다발 이미지를 완성할 수 있도록 하는 것이 핵심! Canvas Library인 Konva를 이용하여 이를 구현했습니다. \n 디자이너와 Back - end 개발자의 중간에 위치하여, 양쪽 모두와 교류하고, git organization, git branch 기능, Slack 등의 협업 도구들을 경험할 수 있었습니다. \n 약 4주간 쉬지 않고 오프라인 모임, Slack을 통해 개발해 왔으며, 더욱 발전시키기 위해 계속해서 진행 중입니다.\n #React, Firebase, Konva, Sass, HTML5',
      url: 'https://fit-flower.firebaseapp.com/'
    },
    {
      title: '포트폴리오 웹사이트',
      img: 'https://i.imgur.com/jiKyhSd.png',
      description: '포트폴리오를 담은 웹사이트. \n 사실 이 앱 자체가 그간 공부한 기술들을 총 동원하여 만든 포트폴리오입니다. \n 대단한 코드를 짠 것은 아니지만 React, Redux를 적극 활용하여 보았고, Animation은 CSS와 vanilla script로 구현했습니다. 차후엔 React-motion도 적용해 볼 예정입니다. \n 최선을 다하여 만들었기에 넘나 사랑스러운 나머지 하루에 300번씩 접속해서 가만히 바라보고 있습니다(...)',
      url: 'https://jinsol.kim/'
    },
    {
      title: '개발 블로그',
      img: 'https://i.imgur.com/h11aZUj.png',
      description: 'Markdown의 깔끔한 매력에 푹 빠졌었지요. Markdown 형식으로 작성한 글을 바로 포스팅할 수 있다기에 시작한 Github page. Hexo라는 정적 페이지 생성기를 이용하여 배포했습니다. 직접 테마를 만들어보겠다고 주구장창 마크업을 했더랬지요. Git 또한 익숙치 않아 별 의미 없는 Commit 수가 100개를 넘어가는 쑥쓰부끄 페이지입니다. 페이지의 목적은 개발 기록을 남기기 위한 것이었는데, 어느 순간부터 본래 취지를 벗어나 포스팅을 위한 글을 적고 있는 자신을 발견하고 잠시 멈춘 상태입니다. ',
      url: 'https://zzolain-blog.herokuapp.com/'
    },
  ];

  constructor(props) {
    super(props)
    this.state = {
      selectedProject: this.projects[0],
      direction: ''
    }
  }

  // selectProject와 selectAnotherProject 중복되는 코드가 많음 => 하나로 합쳐보자(direction 인자가 없으면 index 크기 비교로, 인자가 있을 경우 direction에 맞춰 selectAnotherProject가 동작하게 만들면 어떨까)
  selectProject(selectedProject) {
    let indexOfCurrentProject = this.projects.indexOf(this.state.selectedProject)
    let indexOfSelectedProject = this.projects.indexOf(selectedProject)

    if (indexOfCurrentProject < indexOfSelectedProject) {
      this.setState({ selectedProject: selectedProject, direction: 'right' })
    } else if (indexOfCurrentProject > indexOfSelectedProject) {
      this.setState({ selectedProject: selectedProject, direction: 'left' })
    }
  }

  selectAnotherProject(direction) {
    this.setState({ direction: direction })
    let indexOfSelectedProject = this.projects.indexOf(this.state.selectedProject)

    if (direction === 'left' && indexOfSelectedProject > 0) {
      this.setState({ selectedProject: this.projects[indexOfSelectedProject - 1] })
    } else if (direction === 'left' && indexOfSelectedProject === 0) {
      this.setState({ selectedProject: this.projects[this.projects.length - 1] })
    } else if (
      direction === 'right' &&
      indexOfSelectedProject < this.projects.length - 1
    ) {
      this.setState({ selectedProject: this.projects[indexOfSelectedProject + 1] })
    } else if (
      direction === 'right' &&
      indexOfSelectedProject === this.projects.length - 1
    ) {
      this.setState({ selectedProject: this.projects[0] })
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className='project'>
        <div className='project--title'>
          PlayGround:
          <p>what I&#39;ve done</p>
        </div>
        <div className='project__list'>
          <ProjectList
            projects={this.projects}
            selectProject={selectedProject => this.selectProject(selectedProject)}
            selectedProject={this.state.selectedProject}
          />
        </div>
        <ProjectDetail
          selectedProject={this.state.selectedProject}
          selectAnotherProject={direction => this.selectAnotherProject(direction)}
          direction={this.state.direction}
        />
      </div>
    )
  }
}

