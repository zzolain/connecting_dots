import React, { Component } from "react";
import "./App.css";
import Menu from "./component/Menu/Menu";
import About from "./component/About/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <article className="contents">
            <header className="global-header">
              <MenuBtn />
            </header>
              <Menu />
            <section className="content">
            <About />
            </section>
            <footer className="global-footer" />
          </article>
        </div>
      </div>
    );
  }
}

export default App;

class MenuBtn extends Component {
  render(){
    return (
      <button className="global-menu__btn"><span className="global-menu__label">Menu</span></button>

    )
  }
}