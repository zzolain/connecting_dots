import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'
import Menu from './components/Menu'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'

import AnimationRoute from './Route/AnimationRoute'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuSelected: this.props.menuSelected,
      startAnimation: false,
      navigateDirection: this.props.navigateDirection
    }
  }


  render() {
    return (
      <Router>
        <div className="container">
          <header className="global-header">
            <Menu />
          </header>
          <article className="content">
            <AnimationRoute exact path='/' component={Home} />
            <AnimationRoute exact path='/about' component={About} />
            <AnimationRoute exact path='/project' component={Project} />
          </article>
          <footer className="global-footer" />
        </div>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return {
    menuSelected: state.menuState.menuSelected,
    navigateDirection: state.navigateDirection
  }
}

export default connect(mapStateToProps, null)(App)
