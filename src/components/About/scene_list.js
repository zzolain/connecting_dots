import React from "react";
import SceneListItem from "./scene_list_item";

function SceneList({ scenes }) {
  const sceneListItems = scenes.map(scene => {
    return <SceneListItem scene={scene} />;
  });

  return <ul className="scene__list">{sceneListItems}</ul>;
}

export default SceneList;
