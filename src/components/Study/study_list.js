import React, { Component } from 'react'
import './style.css'


export default class StudyList extends Component {
  renderList() {
    const style = {
      color: 'tomato'
    }
    return this.props.studies.map(study => {
      return (
        <li
          key={study.url}
          onClick={ () => this.props.selectStudy(study)}
          className="study__list--item"
          style={ this.props.selectedStudy === study ? style : null }
        >
          {study.title}
        </li>
      )
    })
  }
  render() {
    return <ul>{this.renderList()}</ul>
  }
}
