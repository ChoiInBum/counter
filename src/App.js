import {useState} from 'react';

import './App.css';
import Viewer from './Viewer';
import Control from './Control';

function App() {
  const [count, setCount] = useState(0);
  const onSetCount = (value) => {
    setCount(count+value);

    if(value===0) {
      setCount(0);
    }
  }  

  return (
    <div className="App">
      <Viewer count={count}/>
      <Control onSetCount={onSetCount}/>
    </div>
  );
}

export default App;