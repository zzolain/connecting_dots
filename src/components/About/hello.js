import React, { Component } from 'react'
import './style.css'
import Dots from '../Dots'
import Introduction from './introduction'


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
        <div className="greeting">JINSOL KIM</div>
        <Introduction introductionList={this.props.introductionList} index={0} />
        <Introduction introductionList={this.props.introductionList} index={1} />
        <div className="hello__wrapper">
          <div className="hello__quote">
            <p>"YOU CAN'T CONNECT THE DOTS<br />LOOKING FORWARD;</p>
            <p>YOU CAN ONLY CONNECT THEM<br />LOOKING BACKWARDS.</p>
            <p>SO YOU HAVE TO TRUST<br/>THAT THE DOTS WILL SOMEHOW</p>
            <p>CONNECT IN YOUR FUTURE.</p>
            <p> Steve Jobs</p>
          </div>
        </div>
        <Introduction introductionList={this.props.introductionList} index={2} />
        <Introduction introductionList={this.props.introductionList} index={3} />
        <Dots />
      </div>
    )
  }
}
