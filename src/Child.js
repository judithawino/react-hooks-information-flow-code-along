import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";
// onChangeColor is a prop passed down from the parent component and it references the handleChangeColor function in this case the callback function.
function Child({ onChangeColor, color }) {
  function handleClick(){
    const newColor = getRandomColor();
    onChangeColor(newColor);
  }
  
  console.log(onChangeColor);
  return (
  <div 
  className="child" 
  style={{ backgroundColor: color }} 
  onClick={handleClick}/>);
}

export default Child;
