import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../reducer/index";

class Menu extends Component {
  state = {
    links: [
      {linkName: "Home"},
      {linkName: "About"},
      {linkName: "Study"}
    ],
    menu: false
  };

// DOM
  menuBtn = () => {
    if (this.state.menu) {
      this.inactivateMenu();
    } else {
      this.activateMenu();
    }
  };

  activateMenu() {
    document.body.classList.add("global-menu--on");
    this.setState({ menu: true });
  }

  inactivateMenu() {
    document.body.classList.remove("global-menu--on");
    this.setState({ menu: false });
  }
// DOM

  linkList() {
    return this.state.links.map((link, index) => {
      return (
        <li 
          key={index}
          onClick={ () => this.props.selectMenu(link.linkName) }
          className="global-menu__link">
            {link.linkName}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <button className="global-menu__btn" onClick={this.menuBtn}>
          <span className="global-menu__label">Menu</span>
        </button>
        <nav className="global-menu">
          <ul>{this.linkList()}</ul>
        </nav>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectMenu : bindActionCreators(actionCreators.selectMenu, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Menu);