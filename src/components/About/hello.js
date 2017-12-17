import React, { Component } from 'react'
import './style.css'
import Dots from '../Dots'


export default class Hello extends Component {
  scrollYAnimation() {
    const elemHelloWrapper = document.querySelectorAll('.hello__wrapper')
    let yPosition = 0

    for (let i = 1; i < elemHelloWrapper.length; i++) {
      yPosition = elemHelloWrapper[i].getBoundingClientRect().y

      if (yPosition > window.innerHeight * 0.01) {
        elemHelloWrapper[i].classList.remove('hello__wrapper--active')
      } else {
        elemHelloWrapper[i].classList.add('hello__wrapper--active')
      }
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    const elemHome = document.querySelector('.hello__wrapper')
    setTimeout(() => {
      elemHome.classList.add('hello__wrapper--active')
    }, 1000)

    window.addEventListener('scroll', this.scrollYAnimation)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollYAnimation)
  }

  render() {
    return (
      <div className="hello">
        <div className="hello__wrapper">
          <div className="greeting">JINSOL KIM</div>
          <div className="hello__text__wrapper">
            <div className="hello__text--korean">
              <p>안녕하세요</p>
              <p> 저는 멋진 프론트엔드 개발자를 꿈꾸는 김진솔입니다.</p>
              <p>얼마 전까지 코딩에 '코'자도 모르던 저였지만,</p>
              <p>
              지금은 개발 덕후가 되어 개발자로서의 삶을 꿈꾸고, 최신 맥북에
              군침을 흘리고 있습니다.
              </p>
            </div>
            <div className="hello__text--english">
              <p>
              Hello, I'm Jinsol Kim dreaming to become an awesome Front-end
              developer.
              </p>
              <p>Until just a few months ago I knew nothing about development,</p>
              <p>
              but now I've become such a coding geek who desires a brand new
              MacBook.
              </p>
            </div>
          </div>
        </div>
        <div className="hello__wrapper">
          <div className="hello__text__title"><span>Trust that the dots will connect</span></div>
          <div className="hello__text__wrapper">
            <div className="hello__text--korean">
              <p>저는 대학에서 디자인을 배우다 중간에 그만두고 최종적으로 심리학을 전공하였습니다.</p>
              <p>개발과는 크게 접점이 없어 보이는 과정들을 거쳤지요.</p>
              <p>하지만 저는 제가 지나온 과정들, 즉 이 '점'들을 하나의 선으로 이어나가고 있습니다.</p>
              <p>故 Steve Jobs가 그랬듯이 말이죠.</p>
            </div>
            <div className="hello__text--english">
              <p>I droped out design school in the middle of junior and ended up to major in psychology.</p>
              <p>I have lived a life that seems to have nothing to do with development.</p>
              <p>However, I've connected them one by one, the dots I have gone through.</p>
              <p>Like Steve Jobs did before.</p>
            </div>
          </div>
          <div className="hello__quote">
            <p>"YOU CAN'T CONNECT THE DOTS LOOKING FORWARD;</p>
            <p>YOU CAN ONLY CONNECT THEM LOOKING BACKWARDS.</p>
            <p>SO YOU HAVE TO TRUST THAT THE DOTS WILL SOMEHOW</p>
            <p>CONNECT IN YOUR FUTURE.</p>
            <p> Steve Jobs</p>
          </div>
        </div>
        <div className="hello__wrapper">
          <div className="hello__text__title">
            <span>How To Live?<br />Do What I want to do</span>
          </div>
          <div className="hello__text__wrapper">
            <div className="hello__text--korean">
              <p>어떻게 살아야 할까?라는 물음을 가졌고, '내'가 좋아하는 일을 하며 살기로 결심 했습니다.</p>
              <p>물론 그게 코딩이었구요.</p>
              <p>훌륭한 글귀들이 선생이 되었고, 인생 역전 다큐멘터리 영화들은 희망이 되어주었습니다. </p>
            </div>
            <div className="hello__text--english">
              <p>I had a question to myself about how to live and I decided to live by doing what I want to do.</p>
              <p>Yep, of course It was coding.</p>
              <p>Great sentences of wise books guided me and drama films based on true story got me hopeful spirit.</p>
            </div>
          </div>
        </div>
        <div className="hello__wrapper">
          <div className="hello__text__title">
            <span>It was All <br />Thanks To you</span>
          </div>
          <div className="hello__text__wrapper">
            <div className="hello__text--korean">
              <p>개발을 시작할 수 있도록 용기와 힘을 주신 분들이 많습니다.</p>
              <p>이 글을 빌어 감사한 마음을 전합니다.</p>
              <p>고맙습니다.</p>
            </div>
            <div className="hello__text--english">
              <p>Thankfully, I have a lot of people who gave me courage and power to be able to start development.</p>
              <p>I want to express my gratitude to them with this page.</p>
              <p>Thank you.</p>
            </div>
          </div>
        </div>
        <Dots />
      </div>
    )
  }
}
