import React, { Component } from 'react'
import './style.css'
import Logo from './logo'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../reducer'

class Home extends Component {
  componentDidMount() {
    if (!this.props.logoPlayed) {
      setTimeout(() => {
        document.querySelector('.home').classList.add('home--active')
      }, 1000)
    }
  }
  componentWillUnmount() {
    this.props.applyLogoPlayed(true)
  }

  render() {
    return (
      <div className={`home ${ this.props.logoPlayed ? 'home--played' : ''}`}>
        <Logo />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    logoPlayed: state.logoPlayed
  }
}

function mapDispatchToProps(dispatch) {
  return {
    applyLogoPlayed: bindActionCreators(actionCreators.logoPlayed, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
