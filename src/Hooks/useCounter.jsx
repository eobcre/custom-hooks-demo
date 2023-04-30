import { useState } from 'react';

const useCounter = () => {
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

  return <div></div>;
};

export default useCounter;
