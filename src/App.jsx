import { useEffect, useState } from 'react';
import './App.css';
function App() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setCounter(5);
  }, []);
  return (
    <div>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        -
      </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        +
      </button>
    </div>
  );
}

export default App;
