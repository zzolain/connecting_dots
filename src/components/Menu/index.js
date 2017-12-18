import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../reducer/index'


class Menu extends Component {
  menuList = [
    { linkName: 'Home' },
    { linkName: 'About' },
    { linkName: 'Study' }
  ];

  menuBtn = () => {
    if (this.props.windowMenuState) {
      this.inactivateMenu()
    } else {
      this.activateMenu()
    }
  };

  activateMenu() {
    this.props.toggleWindowMenu('on')
    document.body.classList.add('global-menu--on')
  }

  inactivateMenu() {
    this.props.toggleWindowMenu('off')
    document.body.classList.remove('global-menu--on')
  }

  linkList() {
    return this.menuList.map((link, index) => {
      return (
        <li
          key={index}
          onClick={() => {
            this.props.selectMenu(link.linkName)
            this.inactivateMenu()
          }}
          className="global-menu__link"
        >
          <span> {link.linkName}</span>
        </li>
      )
    })
  }

  renderMenuText(menu) {
    switch (menu) {
    default:
      return ''

    case 'Home':
      return 'CONNECTING DOTS'

    case 'About':
      return 'WHO I AM'

    case 'Study':
      return 'WHAT I\'ve DONE'
    }
  }

  render() {
    return (
      <div className="menu">
        <button className="global-menu__btn" onClick={this.menuBtn}>
          <span className="global-menu__label">Menu</span>
        </button>

        <nav className="global-menu">
          <ul className="global-menu__background">{this.linkList()}</ul>
        </nav>
        <div
          className="global-menu__side global-menu__side--left"
          onClick={ () => {
            this.props.selectMenu(this.props.menuState.leftMenu)
            this.props.navigateDirection('left')
          }}
        >
          <p>
            {this.renderMenuText(this.props.menuState.leftMenu)}
          </p>
          <span>
            {this.props.menuState.leftMenu}
          </span>
        </div>
        <div
          className="global-menu__side global-menu__side--right"
          onClick={ () => {
            this.props.selectMenu(this.props.menuState.rightMenu)
            this.props.navigateDirection('right')
          }}
        >
          <span>
            {this.props.menuState.rightMenu}
          </span>
          <p>
            {this.renderMenuText(this.props.menuState.rightMenu)}
          </p>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    windowMenuState: state.windowMenuState,
    menuState: state.menuState }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleWindowMenu: bindActionCreators(actionCreators.toggleWindowMenu, dispatch),
    selectMenu: bindActionCreators(actionCreators.selectMenu, dispatch),
    navigateDirection: bindActionCreators(actionCreators.navigateDirection, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
