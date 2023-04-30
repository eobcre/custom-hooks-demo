import useCounter from '../Hooks/useCounter';

const CounterTwo = () => {
  const [count, incrementCounter, decrementCounter, clearCounter] = useCounter(
    10,
    10
  );

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
