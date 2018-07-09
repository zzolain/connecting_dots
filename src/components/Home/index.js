import React, { Component } from 'react'
import './style.css'
import Logo from './logo'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from 'redux/modules/menu'
import Post from '../Post';

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
        <Post/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { menu } = state
  return {
    logoPlayed: menu.logoPlayed
  }
}

function mapDispatchToProps(dispatch) {
  return {
    applyLogoPlayed: bindActionCreators(actionCreators.logoPlayed, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
