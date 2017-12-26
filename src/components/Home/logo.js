import React from 'react'

export default function Logo() {
  return (
    <div>
      <div className="home__container">
        <div className="home__connectingLine--left">
          <div className="home__connectingLine" />
          <div className="home__connectingLine__mask--inner" />
        </div>
        <div className="home__connectingLine--right">
          <div className="home__connectingLine" />
          <div className="home__connectingLine__mask--inner" />
        </div>
        <div className="home__dot--left" />
        <div className="home__dot--center" />
        <div className="home__dot--right" />
        <div className="home__connectingLine__mask--bottom">
          <div className="home__title">
            <p>Jinsol.Kim</p>
            <span>Front-end Developer</span>
          </div>
        </div>
        <div className="home__connectingLine--outer" />
        <div className="home__connectingLine__mask--outer" />
      </div>
      <div className="home__subtitle">
        <span className="home__url">https://jinsol.kim</span>
        <span className="home__url-title">Connecting the dots</span>

      </div>
    </div>
  )
}
