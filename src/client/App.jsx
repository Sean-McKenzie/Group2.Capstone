import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Login from './components/Login';
import Artist from './components/Artist';
import Playlist from './components/Playlist';

function App() {
  const [count, setCount] = useState(0);
  const[token, setToken] = useState(null);
  return (
       <div className="App">
            <h1>Boilerplate</h1>
            <img id="comp-img" src="./computer.png"></img>
            <p>Replace the starter code in this template with something cool</p>
            <Artist artistId={"4Z8W4fKeB5YxbusRsdQVPb"} />
            {/* <Playlist
                 playlistId={"37i9dQZEVXbMDoHDwVN2tF?si=d11f2970b48e4f8a"}
            /> */}
       </div>
  );
}

export default App;
