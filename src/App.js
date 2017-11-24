import React, { Component } from "react";
import "./App.css";
import Menu from "./component/Menu/Menu";
import About from "./component/About/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container />
      </div>
    );
  }
}

export default App;

class Container extends Component {
  render() {
    return (
      <div className="container">
        <article className="contents">
          <header className="global-header">
            <button className="global-menu__btn">
              <span className="global-menu__label">Menu</span>
            </button>
          </header>
          <Menu />
          <section className="content">
            <About />
          </section>
          <footer className="global-footer" />
        </article>
      </div>
    );
  }
}
