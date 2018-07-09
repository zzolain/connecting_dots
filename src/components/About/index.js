import React, { Component } from 'react'
import './style.css'
import Hello from './hello'

export default class About extends Component {
// this should be stored in DB
  introductionList = [
    {
      title: '',
      korean: '안녕하세요.\n저는 멋진 프론트엔드 개발자를 꿈꾸는 김진솔입니다.\n얼마 전까지 코딩에 "코"자도 모르던 저였지만,\n지금은 개발 덕후가 되어 개발자로서의 삶을 꿈꾸고,\n최신 맥북에 군침을 흘리고 있습니다.',
      english: 'Hello, I\'m Jinsol Kim dreaming to become an awesome Front-end developer.\nUntil just a few months ago I knew nothing about development,\nBut now I\'ve become such a coding geek who desires a brand new MacBook.'
    },
    {
      title: 'Trust that the dots will connect',
      korean: '저는 대학에서 디자인을 배우다 중간에 그만두고 최종적으로 심리학을 전공하였습니다.\n개발과는 크게 접점이 없어 보이는 과정들을 거쳤지요.\n하지만 저는 제가 지나온 과정들,\n즉 이 "점"들을 하나의 선으로 이어 나가고 있습니다.\n故 Steve Jobs가 그랬듯이 말이죠.',
      english: 'I droped out design school in the middle of junior\nAnd ended up to major in psychology.\nI have lived a life of things that seem to have nothing to do with development.\nHowever,\nI\'ve connected them, the dots I have stepped on,\nOne by one.\nLike Steve Jobs did before.'
    },
    {
      title: 'How To Live?\nDo What I want to do',
      korean: '어떻게 살아야 할까?라는 물음을 가졌고,\n"내"가 좋아하는 일을 하며 살기로 결심 했습니다.\n물론 그게 코딩이었구요.\n훌륭한 글귀들이 선생이 되었고,\n인생 역전 다큐멘터리 영화들은\n희망이 되어 주었습니다.',
      english: 'I had a question to myself about how to live\nAnd I decided to live by doing what I want to do.\nYep, of course It was coding.\nGreat sentences of wise books guided me\nAnd drama films based on true story got me\nHopeful spirit.'
    },
    {
      title: 'It was All\nThanks To you',
      korean: '개발을 시작할 수 있도록\n용기와 힘을 주신 분들이 많습니다.\n이 글을 빌어 감사한 마음을 전합니다.\n\n고맙습니다.',
      english: 'Thankfully,\nI have a lot of people who gave me courage\nAnd power to be able to start development.\nI want to express my gratitude to them\nWith this page.\nThank you.'
    }
  ]
  render() {
    return (
      <Hello introductionList={this.introductionList}/>
    )
  }
}

