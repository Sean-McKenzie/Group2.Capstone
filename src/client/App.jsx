import { useState } from "react";
// import Artist from "./components/Artist";
// import Playlist from "./components/Playlist";
import { Route, Routes } from "react-router-dom";
import Navigations from "./components/Navbar";
import Menubuttons from "./components/MenuButtons";
import Reviewslist from "./components/ReviewsList";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import AllArtists from "./components/AllArtists";
import AllGenres from "./components/AllGenres";
import Homepage from "./components/Home";
// import Artist from "./components/Artist";
import Playlist from "./components/Playlist";

function App() {
  const [count, setCount] = useState(0);
  const [token, setToken] = useState(null);
  return (
    <>
      <Navigations />
      <Menubuttons />
      {/* <Recentreleasesbanner /> */}
      {/* <Reviewslist/> */}

      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route
          path="/artist"
          element={
            <Artist
              artistId={
                "0b1sIQumIAsNbqAoIClSpy?si=kvrKBmbRS-C_Wj1hyTGoSQ&nd=1&dlsi=4cc7315815d74941"
              }
            />
          }
        /> */}
       <Route path="/artist" element={<Playlist playlistId={"37i9dQZEVXbMDoHDwVN2tF"} />} />
        <Route path="/genres" element={<AllGenres />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
