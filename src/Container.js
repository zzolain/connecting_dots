import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Container.css'

import Menu from './components/Menu/menu'
import Home from './components/Home'
import About from './components/About'
import Study from './components/Study'

class Container extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuSelected: this.props.menuSelected,
      animate: false,
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
        animate: true
      })

      setTimeout(() => {
        this.setState({
          menuSelected: menuSelected,
          animate: false
        })
      }, 1000)
      return
    }
  }

  render() {
    const RenderComponent = this.components[this.state.menuSelected]
    const { animate, navigateDirection } = this.state
    let animation = ''

    if (animate && navigateDirection === 'right') {
      animation = 'bounceOutLeft'
    } else if (animate && navigateDirection !== 'right') {
      animation = 'bountOutRight'
    } else if (!animate && navigateDirection === 'right') {
      animation = 'bounceInright'
    } else if (!animate && navigateDirection !== 'right') {
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
