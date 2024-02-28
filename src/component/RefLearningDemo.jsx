import { useState, useRef } from 'react'
import './App.css'

function RefLearningDemo() {

  const [myNum, setMyNum] = useState(0);

  const inputOne = useRef();
  const inputTwo = useRef();

  const getNumBox = () => {
    console.log("Hello");
    console.log(inputOne.current);
  }

  const getTextBox = () => {
    console.log("World");
    console.log(inputTwo.current);
  }

  return (
    <>
      <h2>useRef Hook in React Js</h2>
      <input
      ref={inputOne}
      value={myNum}
      type='number' 
      style={{width: "100px"}}
      onChange={e => setMyNum(e.target.value)}
      />

      <input
      ref={inputTwo}
      value={myNum}
      type='text' 
      onChange={e => setMyNum(e.target.value)}
      />

      <h3>Value is : {myNum}</h3>

      <button onClick={() => getNumBox()}>Rupees</button>
      <button onClick={() => getTextBox()}>Dollar</button>
    </>
  )
}

export default RefLearningDemo
