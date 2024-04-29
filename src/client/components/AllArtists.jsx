// require("dotenv").config();

import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
} from "react-bootstrap";
import { useState, useEffect } from "react";

const SPOTIFY_CLIENT_ID = "b7761f1c69bc4566a3d74ef7e2053026";
const SPOTIFY_CLIENT_SECRET = "2a86dc7650994bf289b5cbcca3a6e6c7";

const AllArtists = () => {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    //API access token
    const authParamenters = {
      method: "POST",
      Headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id" +
        SPOTIFY_CLIENT_ID +
        "client_secret=" +
        SPOTIFY_CLIENT_SECRET,
    };
    fetch("https://accounts.spotify.com/api/token", authParamenters)
      .then((result) => result.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <Container>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="Search for an Artist"
            type="input"
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                console.log("pressed enter");
                // console.log(event.target.value)
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <Button
            onClick={(event) => {
              console.log("clickedButton");
            }}
          >
            Search
          </Button>
        </InputGroup>
      </Container>
      <Container>
        <Row className="mx-2 row row-cols-4">
          <Card>
            <Card.Img src="#" />
            <Card.Body>
              <Card.Title>Artist Name</Card.Title>
              <Card.Text>Album Name</Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default AllArtists;

// async function getProfile(accessToken) {
//   let accessToken = localStorage.getItem("access_token");

//   const response = await fetch("https://api.spotify.com/v1/me", {
//     headers: {
//       Authorization: "Bearer " + accessToken,
//     },
//   });

//   const data = await response.json();
// }
