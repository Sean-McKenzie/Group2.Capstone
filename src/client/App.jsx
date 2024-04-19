import { useState } from 'react';
// import { Route, Routes } from "react-router-dom";
// import reactLogo from './assets/react.svg';
// // import Login from './components/Login';
import  Navigations from './components/Navbar';
import Menubuttons from "./components/NavButtons";
import Reviewslist from './components/ReviewsList';
import "bootstrap/dist/css/bootstrap.min.css";
import Recentreleasesbanner from './components/Recentreleases';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigations />
      <Menubuttons />
      <Recentreleasesbanner />
      <Reviewslist/>

    </>
  );
}

export default App;
