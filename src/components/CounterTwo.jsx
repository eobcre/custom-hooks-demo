import { useState } from 'react';

const CounterTwo = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount((prevState) => prevState + 1);
  };

  const decrementCounter = () => {
    setCount((prevState) => prevState - 1);
  };

  const clearCounter = () => {
    setCount(0);
  };

  return (
    <div className='counter'>
      <h2>{count}</h2>
      <div className='button-container'>
        <button className='increment-button' onClick={incrementCounter}>
          Increment
        </button>
        <button className='decrement-button' onClick={decrementCounter}>
          Decrement
        </button>
        <button className='clear-button' onClick={clearCounter}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default CounterTwo;
