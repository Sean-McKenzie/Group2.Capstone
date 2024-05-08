import { useDispatch, useSelector } from "react-redux";
import { searchArtist, fetchArtist } from "../api";
import { fetchArtistInfo } from "../../server/api/spotify";


import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Artist({ artistId }) {
  const dispatch = useDispatch();
  const artists = useSelector((state) => state.artists.artists);
  const status = useSelector((state) => state.artists.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchArtistInfo(artistId.join(",")));
    }
  }, [dispatch, status]);
  
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error loading artists</div>;
  }

  return (
    <>
      <div>
        <Container>
          <InputGroup className="mb-3" size="lg">
            <FormControl
              placeholder="Search for an Artist"
              type="input"
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  console.log("pressed enter");
                  
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
      </div>
      {/* <Link to={`/artist/${artist.id}`}> */}
        <Container>
          <Row className="mx-2 row row-cols-4">
            {artists &&
              artists.map((artist) => (
                <Card key={artist.id}>
                  <Card.Img
                    style={{ borderRadius: "50%", justifyContent: "center" }}
                    src={artist.images[0]?.url}
                    alt={artist.name}
                  />
                  <Card.Title>{artist.name}</Card.Title>
                </Card>
              ))}
          </Row>
        </Container>
      {/* </Link> */}
    </>
  );
}
