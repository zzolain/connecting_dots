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
    const leftMenu = this.props.menuState.leftMenu
    const rightMenu = this.props.menuState.rightMenu
    return (
      <div className={`menu${this.props.windowMenuState ? ' menu__window--on' : ''}`}>
        <button className="menu__btn" onClick={ () => this.menuBtn()}>
          <span className="menu__label">Menu</span>
        </button>

        <nav className="menu__window">
          <ul>
            <MenuLink linkName={'home'} menuBtn={()=>this.menuBtn()} />
            <MenuLink linkName={'about'} menuBtn={()=>this.menuBtn()} />
            <MenuLink linkName={'project'} menuBtn={()=>this.menuBtn()} />
          </ul>
        </nav>
        <div
          className="menu__side menu__side--left"
          onClick={ () => {
            this.props.selectMenu(this.props.menuState.leftMenu)
            this.props.navigateDirection('left')
          }}
        >
          <MenuLink linkName={leftMenu} />
        </div>
        <div
          className="menu__side menu__side--right"
          onClick={ () => {
            this.props.selectMenu(this.props.menuState.rightMenu)
            this.props.navigateDirection('right')
          }}
        >
          <MenuLink linkName={rightMenu} />
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
