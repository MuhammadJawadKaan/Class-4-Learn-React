import React, {useState} from 'react';
import './App.css';
import {Component} from './Component.js'

function App() {

  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(true)
  return (
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>
      <h1>Have A Good {isMorning ? 'Morning' : 'Night'}</h1>
      <Component counter={count}/>
      <br />
      <button onClick={
        ()=> setCount(++count)
        }>
          Update Counter
      </button>

      <button onClick={()=>setMorning(!isMorning)}>
        Update Day
      </button>
    </div>
  );
}

export default App;
