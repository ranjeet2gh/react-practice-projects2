import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [count, setcount] = useState(0);
  const [lhsValue, setLhsValue] = useState(0);
  const [rhsValue, setRhsValue] = useState(0);
  const [Operator, setOperator] = useState(null);

  const lhsChange = (e) => {
    setLhsValue(parseInt(e.target.value));
  };
  const rhsChange = (e) => {
    setRhsValue(parseInt(e.target.value));
  };

  const getOperator = (e) => {
    setOperator(e.target.value);
  };

  const doCalculation = () => {
    
    setcount(0)
    switch(Operator) {
      case '+':
        let sum = lhsValue + rhsValue
        setcount(sum)
        setLhsValue(0)
        setRhsValue(0)
        setOperator(null)
        return true;
      case '-':
          let minus = lhsValue - rhsValue
          setcount(minus)
          setLhsValue(0)
          setRhsValue(0)
          setOperator(null)
          return true;  
      case '*':
        let multi = lhsValue * rhsValue
        setcount(multi)
        setLhsValue(0)
        setRhsValue(0)
        setOperator(null)
        return true;  
      case '/':
        let divide = lhsValue / rhsValue
        setcount(divide)
        setLhsValue(0)
        setRhsValue(0)
        setOperator(null)
        return true;
      default:
        return 'Error';
    }
  };
  return (
    <div className="App">
      <div>
        <h1><u>Digital Calculator</u></h1>
        <div className="first">
          <input
            type="number"
            onChange={(e) => lhsChange(e)}
            value={lhsValue}
            style={{textAlign:"center",width:70, height:50,margin:20}}
          />
          <select
            onChange={(e) => getOperator(e)}
            class="form-select"
            aria-label="Default select example"
            value={Operator}
            
          >
            <option value={null}> Operator</option>
            <option value={"+"}style={{fontSize:20,textAlign:"center"}} >+</option>
            <option value={"-"} style={{fontSize:20,textAlign:"center"}}>-</option>
            <option value={"*"} style={{fontSize:20,textAlign:"center"}}>*</option>
            <option value={"/"} style={{fontSize:20,textAlign:"center"}}>/</option>
          </select>
          <input
            type="number"
            onChange={(e) => rhsChange(e)}
            value={rhsValue}
            style={{textAlign:"center",width:70, height:50,margin:20}}
          />
        </div>

        <div className="second">
          <button style={{textAlign:"center",width:50, height:50}} onClick={() => doCalculation()}>=</button>
          </div>
          <div className="output">
            <h2 style={{  marginBottom:20}} >Total = </h2>
          <input  type="text" style={{textAlign:"center",width:50, height:50, marginRight:70}} value={count} />
        </div>
      </div>
    </div>
  );
}

export default App;
