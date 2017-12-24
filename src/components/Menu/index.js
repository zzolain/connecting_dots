import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../reducer/index'
import MenuLink from './menu_link'

class Menu extends Component {
  menuBtn() {
    this.props.toggleWindowMenu(!this.props.windowMenuState)
  }
  render() {
    return (
      <div className={`menu ${this.props.windowMenuState? 'global-menu--on' : ''}`}>
        <button className="global-menu__btn" onClick={ () => this.menuBtn()}>
          <span className="global-menu__label">Menu</span>
        </button>

        <nav className="global-menu">
          <ul className="global-menu__background">
            <MenuLink linkName={'home'} />
            <MenuLink linkName={'about'} />
            <MenuLink linkName={'study'} />
          </ul>
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
