import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
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
      <Router>
        <div>
        <header className="global-header">
          <Menu />
        </header>
        <article className={`content ${animation}`}>
            <div>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/study' component={Study} />
            </div>
        </article>
        <footer className="global-footer" />
        </div>
        </Router>
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
