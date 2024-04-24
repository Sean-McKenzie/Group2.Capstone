import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
} from "react-bootstrap";
import { useState, useEffect } from "react";

// const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
// const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

const AllArtists = () => {
  const [searchInput, setSearchInput] = useState("");

  // useEffect(() => {
  //   //API access token 
  //   const authParamenters ={
  //     method: "POST"
  //   }
  //   fetch('https://accounts.spotify.com/api/token')

  // },[]);

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
