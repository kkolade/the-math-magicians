import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';
import './calculator.css';

function Calculator() {
  const [result, setResult] = useState(0);
  const handleClick = (e) => {
    setResult((prevState) => calculate(prevState, e.target.innerText));
  };

  return (
    <div className="calc-container">
      <div className="display">{result.next || result.total || 0}</div>
      <Button type="submit" className="calc-key" onClick={handleClick}>
        AC
      </Button>
      <Button type="submit" className="calc-key" onClick={handleClick}>
        +/-
      </Button>
      <Button type="submit" className="calc-key" onClick={handleClick}>
        %
      </Button>
      <Button type="submit" className="operator" onClick={handleClick}>
        ÷
      </Button>
      <Button type="submit" className="calc-key" onClick={handleClick}>
        7
      </Button>
      <Button type="submit" className="calc-key" onClick={handleClick}>
        8
      </Button>
      <Button type="submit" className="calc-key" onClick={handleClick}>
        9
      </Button>
      <Button type="submit" className="operator" onClick={handleClick}>
        x
      </Button>
      <Button type="submit" className="calc-key" onClick={handleClick}>
        4
      </Button>
      <Button type="submit" className="calc-key" onClick={handleClick}>
        5
      </Button>
      <Button type="submit" className="calc-key" onClick={handleClick}>
        6
      </Button>
      <Button type="submit" className="operator" onClick={handleClick}>
        -
      </Button>
      <Button type="submit" className="calc-key" onClick={handleClick}>
        1
      </Button>
      <Button type="submit" className="calc-key" onClick={handleClick}>
        2
      </Button>
      <Button type="submit" className="calc-key" onClick={handleClick}>
        3
      </Button>
      <Button type="submit" className="operator" onClick={handleClick}>
        +
      </Button>
      <Button type="submit" className="zero" onClick={handleClick}>
        0
      </Button>
      <Button type="submit" className="calc-key" onClick={handleClick}>
        .
      </Button>
      <Button type="submit" className="operator" onClick={handleClick}>
        =
      </Button>
    </div>
  );
}

export default Calculator;
