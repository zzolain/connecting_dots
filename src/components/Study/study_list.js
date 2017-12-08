import React, { Component } from "react";
import "./style.css";


export default class StudyList extends Component {

  renderList() {
    return this.props.studies.map(study => {
      return (
        <li
          key={study.url}
          onClick={() => this.props.selectStudy(study)}
          className="study__list--item"
        >
          {study.title}
        </li>
      );
    });
  }
  render() {

    return <ul>{this.renderList()}</ul>;
  }
}






