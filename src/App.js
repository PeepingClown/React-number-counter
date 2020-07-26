import React from 'react';

import './App.css';

function App() {

  const [number, setNumber] = React.useState(0);
  function increaseHandler()
  {
    setNumber(number+1);
  }
  function resetHandler()
  {
    setNumber(0);
  }
  function decreaseHandler()
  {
    setNumber(number-1);
  }
  return (
    <div className="container cont">
    <div className="num">
      <h1>{number}</h1>
    </div>
    <div className="button-cnt">
      <button onClick={increaseHandler} className="buttons side plus"><i class="fas fa-plus fa-2x"></i></button>
      <button onClick={resetHandler} className="buttons middle"><i class="fas fa-redo-alt fa-2x"></i></button>
      <button onClick={decreaseHandler} className="buttons side minus"><i class="fas fa-minus fa-2x"></i></button>
    </div>
    </div>
  );
}

export default App;
