import React, { Component } from 'react'
import './style.css'

export default class ProjectDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedProject: this.props.selectedProject,
      animate: false,
      direction: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    const { selectedProject, direction } = nextProps

    if (this.props.selectedProject.title !== selectedProject.title) {
      this.setState({
        direction: direction,
        animate: true
      })

      setTimeout(() => {
        this.setState({
          selectedProject: selectedProject,
          animate: false
        })
      }, 1000)
      return
    }
  }

  render() {
    const { title, description, url, img } = this.state.selectedProject
    const { animate, direction } = this.state
    let animation
    if (animate && direction === 'left') {
      animation = 'projectOutLeft'
    } else if (animate && direction === 'right') {
      animation = 'projectOutRight'
    } else if (!animate && direction === 'left') {
      animation = 'projectInRight'
    } else if (!animate && direction === 'right') {
      animation = 'projectInLeft'
    }

    const bgImageStyle = {
      backgroundImage: `url(${img})`
    }

    return (
      <div className="project__container">
        <div className={`project__wrapper ${animation}`}>
          <div className="project__content-wrapper">
            <div className="project__thumnail--wrapper">
              <div className="project__thumnail--title">{title}</div>
              <div className="project__thumnail--image" style={bgImageStyle} />
            </div>
            <div className="project__thumnail__text">
              {description.split('\n').map( line => {
                return (<span>{line}<br /></span>)
              })}
              <a href={url} target="_blank">
                <p>{url}</p>
              </a>
            </div>
          </div>
          <div
            className="project__arrow--left"
            onClick={ () => this.props.selectAnotherProject('left')}
          >
            &lt;
          </div>
          <div
            className="project__arrow--right"
            onClick={ () => this.props.selectAnotherProject('right')}
          >
            &gt;
          </div>
        </div>
      </div>
    )
  }
}
