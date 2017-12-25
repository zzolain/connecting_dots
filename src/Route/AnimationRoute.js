import React from 'react'
import { Route } from 'react-router-dom'
import Animation from './Animation'

type Props = {
	component: ReactClass<*>
};

const AnimationRoute = ({ component: Component, ...rest }: Props) =>
  <Route
    {...rest}
    children={({ match, ...childProps }) =>
      <Animation visible={!!match}>
        <Component {...childProps} />
      </Animation>}
  />

export default AnimationRoute
