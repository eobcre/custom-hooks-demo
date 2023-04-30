// Components
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';

const App = () => {
  return (
    <div className='counter-container'>
      <h1>Counter Demo</h1>
      <CounterOne />
      <CounterTwo />
    </div>
  );
};

export default App;
