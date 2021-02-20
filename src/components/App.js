import React, {Component, useState} from "react";
import '../styles/App.css';
import '../data';

const App = (props) => {
  const [selectedState, setSelectedState] = useState(0);

  const handleNextState = () => {
      setSelectedState(selectedState + 1);
  }

  const handlePrevState = () => {
    setSelectedState(selectedState - 1);
  }

  const handleRestartState = () => {
    setSelectedState(0);
  }

  return (
    <>
    <div id="main-container-text">
    <h1 data-testid="title">{props.slides[selectedState].title}</h1>    
    <p data-testid="text">{props.slides[selectedState].text}</p>
    </div>
    <div id="main-container-buttons">
    {selectedState < props.slides.length-1 ? <button data-testid="button-next" id="button-next"onClick={handleNextState}>Next</button> :
     <button data-testid="button-next" id="button-next" onClick={handleNextState} disabled>Next</button>}
    {props.slides.length - selectedState === 5 ? <button data-testid="button-prev" id="button-prev" onClick={handlePrevState} disabled>Previous</button> : 
    <button data-testid="button-prev" id="button-prev" onClick={handlePrevState}>Previous</button>}
    {props.slides.length - selectedState !== 5 ? <button data-testid="button-restart" id="button-restart" onClick={handleRestartState}>Restart</button> : 
    <button data-testid="button-restart" id="button-restart"onClick={handleRestartState} disabled>Restart</button>}
    </div>
    </>
  )
}


export default App;
