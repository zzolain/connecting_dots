import React, { Component } from 'react'
import './style.css'
import Logo from './logo'

export default class Home extends Component {
  componentDidMount() {
    const elemHome = document.querySelector('.home')
    setTimeout(() => {
      elemHome.classList.add('home--active')
    }, 1000)
  }

  render() {
    return (
      <div className="home">
        <Logo />
      </div>
    )
  }
}
