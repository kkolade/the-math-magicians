import React from 'react';
import './calculator.css';

function Calculator() {
  return (
    <div className="calc-container">
      <div className="display">0</div>
      <button type="submit" className="calc-key">
        AC
      </button>
      <button type="submit" className="calc-key">
        +/-
      </button>
      <button type="submit" className="calc-key">
        %
      </button>
      <button type="submit" className="operator">
        ÷
      </button>
      <button type="submit" className="calc-key">
        7
      </button>
      <button type="submit" className="calc-key">
        8
      </button>
      <button type="submit" className="calc-key">
        9
      </button>
      <button type="submit" className="operator">
        x
      </button>
      <button type="submit" className="calc-key">
        4
      </button>
      <button type="submit" className="calc-key">
        5
      </button>
      <button type="submit" className="calc-key">
        6
      </button>
      <button type="submit" className="operator">
        -
      </button>
      <button type="submit" className="calc-key">
        1
      </button>
      <button type="submit" className="calc-key">
        2
      </button>
      <button type="submit" className="calc-key">
        3
      </button>
      <button type="submit" className="operator">
        +
      </button>
      <button type="submit" className="zero">
        0
      </button>
      <button type="submit" className="calc-key">
        .
      </button>
      <button type="submit" className="operator">
        =
      </button>
    </div>
  );
}

export default Calculator;
