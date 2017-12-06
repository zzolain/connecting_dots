import React from "react";
import SceneListItem from "./scene_list_item";

function SceneList({ scenes }) {
  const sceneListItems = scenes.map( (scene, index) => {
    return <SceneListItem scene={scene} key={index} />;
  });

  return <ul className="scene__list">{sceneListItems}</ul>;
}

export default SceneList;
