import useCounter from '../Hooks/useCounter';

const CounterOne = () => {
  const [count, incrementCounter, decrementCounter, clearCounter] = useCounter(
    0,
    1
  );

  return (
    <div className='counter'>
      <h2>{count}</h2>
      <div className='button-container'>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
        <button onClick={clearCounter}>Clear</button>
      </div>
    </div>
  );
};

export default CounterOne;
