import React, { Component } from "react";
import "./style.css";
import MenuItems from "./menu_item";

class Menu extends Component {
  state = {
    links: [
      {
        url: "https://zzolain.github.io",
        linkName: "Home"
      },
      {
        url: "#",
        linkName: "About"
      },
      {
        url: "#",
        linkName: "Study"
      },
      {
        url: "#",
        linkName: "Dev-logs"
      },
      {
        url: "#",
        linkName: "Contact"
      }
    ],
    menu: false
  };

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

  render() {
    return (
      <div>
        <button className="global-menu__btn" onClick={this.menuBtn}>
          <span className="global-menu__label">Menu</span>
        </button>
        <nav className="global-menu">
        <ul>
          <MenuItems links={this.state.links} />
        </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;


