import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount((prevState) => prevState + 1);
  };

  const decrementCounter = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    <div className='counter-container'>
      <h1>Counter Demo</h1>
      <div className='counter'>
        <h2>{count}</h2>
        <div className='button-container'>
          <button onClick={incrementCounter}>Increment</button>
          <button onClick={decrementCounter}>Decrement</button>
          <button>Clear</button>
        </div>
      </div>
    </div>
  );
};

export default App;
