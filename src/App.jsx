import { useState } from 'react'
import './assets/style.scss'


function App() {

  let [resultWindow, setResultWindow] = useState('')

  function createExpression(event) {
     setResultWindow(resultWindow + event.target.innerHTML)
  }
  function calculate() {
    setResultWindow(eval(resultWindow))
}

  function clear() {
    setResultWindow('')
  }

  return (
    <>
      <div className="container">
        <div className="calc-body">
          <div className="result">
            <h1>{resultWindow}</h1>
          </div>
          <div className="buttons">
            <div className="number-buttons">
              <button onClick={createExpression}>7</button>
              <button onClick={createExpression}>8</button>
              <button onClick={createExpression}>9</button>
              <button onClick={createExpression}>4</button>
              <button onClick={createExpression}>5</button>
              <button onClick={createExpression}>6</button>
              <button onClick={createExpression}>1</button>
              <button onClick={createExpression}>2</button>
              <button onClick={createExpression}>3</button>
              <button onClick={createExpression}>.</button>
              <button onClick={createExpression}>0</button>
              <button onClick={calculate}>=</button>
            </div>
            <div className="operation-buttons">
              <button onClick={createExpression}>/</button>
              <button onClick={createExpression}>*</button>
              <button onClick={createExpression}>+</button>
              <button onClick={createExpression}>-</button>
            </div>
          </div>
          <div className="clear">
            <button onClick={clear}>Clear</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
