import React, { Component } from "react";
import "./style.css";

export default class StudyDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStudy: this.props.selectedStudy,
      animate: false,
      direction: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    const { selectedStudy, direction } = nextProps;

    if (this.props.selectedStudy.title !== selectedStudy.title) {
      this.setState({
        direction: direction,
        animate: true
      });

      setTimeout(() => {
        this.setState({
          selectedStudy: selectedStudy,
          animate: false
        });
      }, 1000);
      return;
    }
  }

  render() {
    const { title, description, url, img } = this.state.selectedStudy;
    const { animate, direction } = this.state;
    const animation = animate
      ? direction === "left" ? "bounceOutLeft" : "bounceOutRight"
      : direction === "left" ? "bounceInRight" : "bounceInLeft";

    const bgImageStyle = {
      backgroundImage: `url(${img})`
    };

    return (
      <div className="study__container">
        <div className={`study__wrapper ${animation}`}>
          <div className="study__content-wrapper">
            <div className="study__thumnail--wrapper">
              <div className="study__thumnail--title">{title}</div>
              <div className="study__thumnail--image" style={bgImageStyle} />
            </div>
            <div className="study__thumnail__text">
              <span>{description}</span>
              <a href={url} target="_blank">
                <p>{url}</p>
              </a>
            </div>
          </div>
          <div
            className="study__arrow--left"
            onClick={() => this.props.selectAnotherStudy("left")}
          >
            &lt;
          </div>
          <div
            className="study__arrow--right"
            onClick={() => this.props.selectAnotherStudy("right")}
          >
            &gt;
          </div>
        </div>
      </div>
    );
  }
}
