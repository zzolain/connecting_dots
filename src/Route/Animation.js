import React, { Component, Element } from 'react'
import * as Animated from 'animated/lib/targets/react-dom'
import { connect } from 'react-redux'
import './Animation.css'

type SpringConfig = {
  friction: number,
  tension: number
};

type Props = {
  visible: boolean,
  enterSpringConfig: SpringConfig,
  leaveSpringConfig: SpringConfig,
  children: Element<any>
};

type State = {
  isRendering: boolean,
  animation: Animated.Value
};

class Animation extends Component {
  props: Props;
  state: State;

  static defaultProps = {
    enterSpringConfig: {
      friction: 6,
      tension: 16
    },
    leaveSpringConfig: {
      friction: 7,
      tension: 80
    }
  };

  constructor(props: Props) {
    super(props)
    this.state = {
      isRendering: props.visible,
      animation: new Animated.Value(props.visible ? 1 : 0)
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    const { enterSpringConfig, leaveSpringConfig } = this.props
    if (!this.props.visible && nextProps.visible) {
      setTimeout(() => {
        this.setState({ isRendering: true })
        Animated.spring(this.state.animation, {
          ...enterSpringConfig,
          toValue: 1
        }).start()
      }, 50)
    } else if (this.props.visible && !nextProps.visible) {
      Animated.spring(this.state.animation, {
        ...leaveSpringConfig,
        toValue: 0
      }).start(() => {
        if (!this.props.visible) {
          this.setState({ isRendering: false })
        }
      })
    }
  }

  render() {
    const { children } = this.props
    const { animation, isRendering } = this.state

    if (!isRendering) return null

    const style = {
      opacity: animation,
      transform: Animated.template`
        translate3d(
        ${this.props.navigateDirection === 'right' ?
          animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['150px', '0px'] }) :
          animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['-150px', '0px'] })
        }, 0, 0)
      `
    }

    return (
      <Animated.div className="Animation" style={style}>
        {children}
      </Animated.div>
    )
  }
}

function mapStateToProps(state) {
  return {
    navigateDirection: state.navigateDirection
  }
}

export default connect(mapStateToProps, null)(Animation)
