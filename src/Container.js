import React, { Component } from "react";
import "./Container.css";

import Menu from "./components/Menu";
import Logo from "./components/Logo";
import About from "./components/About";
import Hello from "./components/Hello";

class Container extends Component {
  render() {
    return (
      <div className="container">
        <header className="global-header">
          <Menu />
        </header>
        <article className="contents">
          <Logo />

          <Hello />

          <About />
        </article>
        <footer className="global-footer" />
      </div>
    );
  }
}

export default Container;
