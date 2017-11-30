import React from "react";

const SceneListItem = ({scene}) => {
  return (
    <div className="scene">
      <div className="arrow" />
      <div className="scene__content">
        <div className="dot-main">
          <div className="dot-main__text">
            <p>{scene.date}</p>
            <p>{scene.title}</p>
          </div>
        </div>
      <div className="dots">
        {scene.dots.map((dot, index) => {
          return (
            <span className="dot__text" key={index}>
              {dot}
            </span>
          );
        })}
      </div>
    </div>
  </div>
  )
}


export default SceneListItem;