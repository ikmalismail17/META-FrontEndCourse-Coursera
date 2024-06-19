//This one ungraded lab from coursera
import {
    useState,
    useRef
} from "react";
import '../assets/styles/simplecalculator.css';
import PropChildDiv from "./PropChildDiv";
import HOCMousePosition from "./HOCMousePosition";
import MousePositionRenderProps from "./MousePositionRenderProps";

const SimpleCalculator = () => { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };
 
  function times(e) { 
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }; 
 
  function divide(e) { 
    e.preventDefault();
    setResult((resutl) => result / Number(inputRef.current.value));
  };
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = 0;
  }; 
 
  function resetResult(e) { 
  	e.preventDefault();
    setResult(0);
  }; 
 
  return (
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <PropChildDiv>
      <form> 
        <PropChildDiv>
            <p ref={resultRef}> 
            {result} 
            </p> 
        </PropChildDiv>
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
          style={{ textAlign: "center", marginLeft: 'auto', marginRight: 'auto', marginTop: '10px'}}
        /> 
        <button className="calcbtn" onClick={plus}>+</button> 
        <button className="calcbtn" onClick={minus}>-</button> 
        <button className="calcbtn" onClick={times}>x</button> 
        <button className="calcbtn" onClick={divide}>/</button> 
        <button className="calcbtn" onClick={resetInput}>Reset Input</button> 
        <button className="calcbtn" onClick={resetResult}>Reset Result</button>
      </form> 
      </PropChildDiv>
      <PropChildDiv>
        <HOCMousePosition/>
      </PropChildDiv>
      <PropChildDiv>
        <MousePositionRenderProps/>
      </PropChildDiv>
    </div>
  ); 
}

export default SimpleCalculator;