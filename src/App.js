import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import './App.css'

import Menu from './components/Menu'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'

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
      <div className="container">
        <header className="global-header">
          <Menu />
        </header>
        <article className="content">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/project' component={Project} />
          </Switch>
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

export default connect(mapStateToProps, null)(App)
