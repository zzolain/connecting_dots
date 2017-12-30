import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from 'redux/modules/menu'

class MenuLink extends Component {
    menuList = {
      home: { title: 'Home', url: '/', description: 'CONNECTING DOTS' },
      about: { title: 'About', url: '/about', description: 'WHO I AM' },
      project: { title: 'Project', url: '/project', description: 'WHAT I\'ve DONE' }
    }

    render() {
      return (
        <li
          key={this.menuList[this.props.linkName].title}
          onClick={()=>{
            this.props.selectMenu(this.props.linkName)
            this.props.menuBtn && this.props.menuBtn()
          }}
          className="menu__link"
        >
          <Link to={this.menuList[this.props.linkName].url}>
            <p>{this.menuList[this.props.linkName].title}</p>
            <p>{this.menuList[this.props.linkName].description}</p>
          </Link>
        </li>
      )
    }
}

function mapStateToProps(state) {
  const { menu } = state
  return {
    windowMenuState: menu.windowMenuState,
    menuState: menu.menuState }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleWindowMenu: bindActionCreators(actionCreators.toggleWindowMenu, dispatch),
    selectMenu: bindActionCreators(actionCreators.selectMenu, dispatch),
    navigateDirection: bindActionCreators(actionCreators.navigateDirection, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuLink)
