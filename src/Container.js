import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Container.css'

import Menu from './components/Menu'
import Home from './components/Home'
import About from './components/About'
import Study from './components/Study'

class Container extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuSelected: this.props.menuSelected,
      startAnimation: false,
      navigateDirection: this.props.navigateDirection
    }
  }
  components = {
    Home: Home,
    About: About,
    Study: Study
  };

  componentWillReceiveProps(nextProps) {
    const { menuSelected, navigateDirection } = nextProps
    if (this.props.menuSelected !== menuSelected) {
      this.setState({
        navigateDirection: navigateDirection,
        startAnimation: true
      })

      setTimeout(() => {
        this.setState({
          menuSelected: menuSelected,
          startAnimation: false
        })
      }, 1000)
      return
    }
  }

  render() {
    const RenderComponent = this.components[this.state.menuSelected]
    const { startAnimation, navigateDirection } = this.state
    let animation = ''
    if (startAnimation && navigateDirection === 'right') {
      animation = 'bounceOutLeft'
    } else if (startAnimation && navigateDirection !== 'right') {
      animation = 'bounceOutRight'
    } else if (!startAnimation && navigateDirection === 'right') {
      animation = 'bounceInRight'
    } else if (!startAnimation && navigateDirection !== 'right') {
      animation = 'bounceInLeft'
    }

    return (
      <div className="container">
        <header className="global-header">
          <Menu />
        </header>
        <article className={`content ${animation}`}>
          <RenderComponent />


        </article>
        <footer className="global-footer" />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    menuSelected: state.menuState.menuSelected,
    navigateDirection: state.navigateDirection
  }
}

export default connect(mapStateToProps, null)(Container)
