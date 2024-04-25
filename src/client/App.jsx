import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Login from './components/Login';
import Artist from './components/Artist';

function App() {
  const [count, setCount] = useState(0);
  const[token, setToken] = useState(null);
  return (
       <div className="App">
            <h1>Boilerplate</h1>
            <img id="comp-img" src="./computer.png"></img>
            <p>Replace the starter code in this template with something cool</p>
            <Artist artistId={"0OdUWJ0sBjDrqHygGUXeCF"} />
       </div>
  );
}

export default App;
