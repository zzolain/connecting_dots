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

  renderIntroduction(index) {
    return (
      <div className="hello__wrapper">
        <div className="hello__text__title">
          <span>{this.props.introductionList[index].title}</span>
        </div>
        <div className="hello__text__wrapper">
          <div className="hello__text--korean">
            <p>{this.props.introductionList[index].korean}</p>
          </div>
          <div className="hello__text--english">
            <p>{this.props.introductionList[index].english}</p>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="hello">
        <div className="greeting">JINSOL KIM</div>
        {this.renderIntroduction(0)}
        {this.renderIntroduction(1)}
        <div className="hello__wrapper">
          <div className="hello__quote">
            <p>"YOU CAN'T CONNECT THE DOTS LOOKING FORWARD;</p>
            <p>YOU CAN ONLY CONNECT THEM LOOKING BACKWARDS.</p>
            <p>SO YOU HAVE TO TRUST THAT THE DOTS WILL SOMEHOW</p>
            <p>CONNECT IN YOUR FUTURE.</p>
            <p> Steve Jobs</p>
          </div>
        </div>
        {this.renderIntroduction(2)}
        {this.renderIntroduction(3)}
        <Dots />
      </div>
    )
  }
}
