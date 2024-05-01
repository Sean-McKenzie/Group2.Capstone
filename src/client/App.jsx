import { useState } from "react";
// import Artist from "./components/Artist";
// import Playlist from "./components/Playlist";
import { Route, Routes } from "react-router-dom";
import Navigations from "./components/Navbar";
import Menubuttons from "./components/MenuButtons";
import Reviewslist from "./components/ReviewsList";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
// import AllArtists from "./components/AllArtists";
import AllGenres from "./components/AllGenres";
import Homepage from "./components/Home";
import Artist from "./components/Artist";
import Playlist from "./components/Playlist";
import SingleArtist from "./components/SingleArtist";

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
        <Route
          path="/artist"
          element={
            <Artist
              artistId={[
                "06HL4z0CvFAxyc27GXpf02",
                "4q3ewBCX7sLwd24euuV69X",
                "1Xyo4u8uXC1ZmMpatF05PJ",
                "3TVXtAsR1Inumwj472S9r4",
                "12GqGscKJx3aE4t07u7eVZ",
                "2LRoIwlKmHjgvigdNGBHNo",
                "790FomKkXshlbRYZFtlgla",
                "7tYKF4w9nC0nq9CsPZTHyP",
                "5K4W6rqBFWDnAN6FQUkS6x",
                "00FQb4jTyendYWaN8pK0wa",
                "7dGJo4pcD2V6oG8kP0tJRR",
                "0iEtIxbK0KxaSlF7G42ZOp",
                "7Gi6gjaWy3DxyilpF1a8Is",
                "6eUKZXaKkcviH0Ku9w2n3V",
                "4YRxDV8wJFPHPTeXepOstw",
                "66CXWjxzNUsdJxJ2JdwvnR",
                "0Y5tJX1MQlPlqiwlOH1tJY",
                "4oUHIQIBe0LHzYfvXNW4QM",
                "6qqNVTkY8uBg9cP3Jd7DAH",
                "5pKCCKE2ajJHZ9KAiaK11H",
                "3Nrfpe0tUJi4K4DXYWgMUX",
                "1uNFoZAHBGtllmzznpCI3s",
                "246dkjvS1zLTtiykXe5h60",
                "4gzpq5DPGxSnKTe4SA8HAU",
                "6vWDO969PvNqNYHIOW5v0m",
                "0EmeFodog0BfCgMzAIvKQp",
                "6KImCVD70vtIoJWnq6nGn3",
                "5YGY8feqx7naU7z4HrwZM6",
              ]}
            />
          }
        />
        <Route
          path="/topsongs"
          element={<Playlist playlistId={"37i9dQZEVXbMDoHDwVN2tF"} />}
        />
        <Route path="/genres" element={<AllGenres />} />
        <Route path="/artist/:artistId" element={<SingleArtist />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
