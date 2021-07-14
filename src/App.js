import React, {useState, useRef, useEffect} from 'react';
import './App.css';

function App() {
  
  const canvas = useRef(null)
  
  class Magic{
    constructor(x, y){
      this.x = x
      this.y = y
    }
    draw(){
      const c = canvas.current.getContext("2d");
      c.arc(this.x, this.y, 50, 0, Math.PI*2, false)
      c.fill()
    }
  }
  const magic = new Magic(200, 200)

  useEffect(()=>{
    animate()
  })

  const animate = ()=>{
    magic.draw()
  }




  return (
    
    <div className="App">
      <canvas width={400} height={400} style={{background:"red"}} ref={canvas} ></canvas>
    </div>
  );
}

export default App;
