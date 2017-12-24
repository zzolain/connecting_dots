import React, { Component } from 'react'
import './style.css'


export default class ProjectList extends Component {
  renderList() {
    const style = {
      color: 'tomato'
    }
    return this.props.projects.map(project => {
      return (
        <li
          key={project.url}
          onClick={ () => this.props.selectProject(project)}
          className="project__list--item"
          style={ this.props.selectedProject === project ? style : null }
        >
          {project.title}
        </li>
      )
    })
  }
  render() {
    return <ul>{this.renderList()}</ul>
  }
}
