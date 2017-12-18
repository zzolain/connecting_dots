import React from 'react'

export default function Introduction({ introductionList, index }) {
  return (
    <div className="hello__wrapper">
      <div className="hello__text__title">
        <span>{introductionList[index].title}</span>
      </div>
      <div className="hello__text__wrapper">
        <div className="hello__text--korean">
          <p>{introductionList[index].korean}</p>
        </div>
        <div className="hello__text--english">
          <p>{introductionList[index].english}</p>
        </div>
      </div>
    </div>
  )
}
