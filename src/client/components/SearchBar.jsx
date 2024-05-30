import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { searchArtist } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const artists = useSelector((state) => state.artists.artists);
  const status = useSelector((state) => state.artists.status);
  console.log(`artists are: ${artists}`);
  console.log(`status is: ${status}`);
  useEffect(() => {
    if (status === "idle") {
      dispatch(searchArtist(searchInput));
    }
  }, [dispatch, searchInput, status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error loading artists</div>;
  }

  return (
    <div>
      <Container>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="Search for an Artist..."
            type="input"
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                dispatch(searchArtist(searchInput));
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <Button onClick={() => dispatch(searchArtist(searchInput))}>
            Search
          </Button>
        </InputGroup>
      </Container>
      <Container>
        <Row className="mx-2 row row-cols-4">
          {artists.map((artist) => (
            <Link
              to={`/artist/${artist.id}`}
              style={{
                textDecoration: "none",
              }}
            >
              <Card
                className="cards"
                key={artist.id}
                style={{
                  background: "none",
                  stroke: "none",
                  padding: "15px",
                  transition: "1s",
                  justifyContent: "space-around",
                  margin: "8px",
                }}
              >
                <Card.Img
                  src={artist.images[0]?.url}
                  style={{ borderRadius: "50%", justifyContent: "center" }}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      fontFamily: "sans-serif",
                      fontWeight: "bolder",
                      fontSize: "18px",
                      textAlign: "center",
                      textDecoration: "none",
                      paddingTop: "10px",
                    }}
                  >
                    {artist.name}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Link>
          ))}
        </Row>
      </Container>
    </div>
  );
}
