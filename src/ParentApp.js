import React, { useState } from "react";
import DisplayApplication from "./DisplayApplication";
import Application from "./Application";

export default function ParentApp(props) {
  const [ map, setMap ] = useState(new Map());
  
  const changeMap = (id, val) => {
    setMap(new Map(map.set(id, val)));
  }

  return (
    <div id="root2">
        <Application changeMap = { changeMap }/>
        <DisplayApplication map = { map } />
    </div>
  )
}