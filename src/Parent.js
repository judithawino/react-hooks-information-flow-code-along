import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrendColor, setChildrendColor] = useState("#FFF");

  function handleChangeColor(newChildColor){
    const newRandomColor = getRandomColor();
    // update color state to a new value
    setColor(newRandomColor);
    setChildrendColor(newChildColor);
  }
  
  return (
    <div className="parent" style={{ backgroundColor: color }}>
      {/* create a prop called onChangeColor and assign it the callback function called handleChangeColor  */}
      <Child color={childrendColor} onChangeColor={handleChangeColor}/>
      <Child color={childrendColor} onChangeColor={handleChangeColor}/>
    </div>
  );
}

export default Parent;
