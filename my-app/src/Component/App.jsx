import React , { useState } from 'react';


function App() {
  const [heading,setheading] = useState("Hello");
  const [isMouseOver,setMouseOver] = useState (false);

  
function clicked(){
  setheading("Submitted");
  // console.log("I'm clicked");
}
function mouseover(){
  setMouseOver(true);
}
function mouseout(){
  setMouseOver(false);
}
  return (
  <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
      style={{backgroundColor:isMouseOver ? "black" : "white"}}
      onClick = {clicked}
      onMouseOver = {mouseover}
      onMouseOut = {mouseout}
       >Submit</button>
    </div>
  );
}

export default App;
