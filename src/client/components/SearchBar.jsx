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
            placeholder="Search"
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
            <Link to={`/artist/${artist.id}`}>
              <Card key={artist.id}>
                <Card.Img src={artist.images[0]?.url} />
                <Card.Body>
                  <Card.Title>{artist.name}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          ))}
        </Row>
      </Container>
    </div>
  );
}
