import { useState } from 'react';

const useCounter = (initialValue = 0, value) => {
  const [count, setCount] = useState(initialValue);

  const incrementCounter = () => {
    setCount((prevState) => prevState + value);
  };

  const decrementCounter = () => {
    setCount((prevState) => prevState - value);
  };

  const clearCounter = () => {
    setCount(initialValue);
  };

  return [count, incrementCounter, decrementCounter, clearCounter];
};

export default useCounter;
