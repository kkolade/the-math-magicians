import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './calculator.css';

function Calculator() {
  const [result, setResult] = useState(0);
  const handleClick = (e) => {
    setResult((prevState) => calculate(prevState, e.target.innerText));
  };

  return (
    <div className="calc-container">
      <div className="display">{result.next || result.total || 0}</div>
      <button type="submit" className="calc-key" onClick={handleClick}>
        AC
      </button>
      <button type="submit" className="calc-key" onClick={handleClick}>
        +/-
      </button>
      <button type="submit" className="calc-key" onClick={handleClick}>
        %
      </button>
      <button type="submit" className="operator" onClick={handleClick}>
        ÷
      </button>
      <button type="submit" className="calc-key" onClick={handleClick}>
        7
      </button>
      <button type="submit" className="calc-key" onClick={handleClick}>
        8
      </button>
      <button type="submit" className="calc-key" onClick={handleClick}>
        9
      </button>
      <button type="submit" className="operator" onClick={handleClick}>
        x
      </button>
      <button type="submit" className="calc-key" onClick={handleClick}>
        4
      </button>
      <button type="submit" className="calc-key" onClick={handleClick}>
        5
      </button>
      <button type="submit" className="calc-key" onClick={handleClick}>
        6
      </button>
      <button type="submit" className="operator" onClick={handleClick}>
        -
      </button>
      <button type="submit" className="calc-key" onClick={handleClick}>
        1
      </button>
      <button type="submit" className="calc-key" onClick={handleClick}>
        2
      </button>
      <button type="submit" className="calc-key" onClick={handleClick}>
        3
      </button>
      <button type="submit" className="operator" onClick={handleClick}>
        +
      </button>
      <button type="submit" className="zero" onClick={handleClick}>
        0
      </button>
      <button type="submit" className="calc-key" onClick={handleClick}>
        .
      </button>
      <button type="submit" className="operator" onClick={handleClick}>
        =
      </button>
    </div>
  );
}

export default Calculator;
