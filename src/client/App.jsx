import { useState } from "react";
import { Route, Routes } from "react-router-dom";
// import reactLogo from './assets/react.svg';
// // import Login from './components/Login';
import Navigations from "./components/Navbar";
import Menubuttons from "./components/MenuButtons";
import Reviewslist from "./components/ReviewsList";
import "bootstrap/dist/css/bootstrap.min.css";
// import Recentreleasesbanner from "./components/Recentreleases";
// import "style.css"
import Footer from "./components/Footer";
import AllArtists from "./components/AllArtists";
import AllGenres from "./components/AllGenres";
import Homepage from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigations />
      <Menubuttons />
      {/* <Recentreleasesbanner /> */}
      {/* <Reviewslist/> */}

      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/artist" element={<AllArtists />} />
        <Route path="/genres" element={<AllGenres />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
