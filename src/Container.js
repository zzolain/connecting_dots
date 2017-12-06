import React, { Component } from "react";
import { connect } from "react-redux";
import "./Container.css";

import Menu from "./components/Menu/menu_list";
import Home from "./components/Home";
import About from "./components/About";


class Container extends Component {
  components = {
    Home : Home,
    About : About
  };
  render() {
    const RenderComponent = this.components[this.props.menuSelected];
    return (
      <div className="container">
        <header className="global-header">
          <Menu />
        </header>
        <article className="contents">
          <RenderComponent />


        </article>
        <footer className="global-footer" />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {menuSelected : state.menuSelected}
}
export default connect(mapStateToProps, null)(Container);
