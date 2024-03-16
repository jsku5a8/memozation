import './App.css';
import { useState } from 'react';
import Count from './components/count/Count';
import IsSeven from './components/isSeven/IsSeven';
import MyComponent from './components/myComponent/MyComponent';

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <div className="App">
      <p>Первый коунтер</p>
      <button
        onClick={() => {
          setCount1(count1 + 1);
        }}
      >
        +
      </button>
      <Count id={1} value={count1} />

      <p>Второй коунтер</p>
      <button
        onClick={() => {
          setCount2(count2 + 1);
        }}
      >
        +
      </button>
      <Count id={2} value={count2} />
      <IsSeven value={count2} />
      <MyComponent value={count1} />
    </div>
  );
}

export default App;
