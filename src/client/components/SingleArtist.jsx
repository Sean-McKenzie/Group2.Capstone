import { useDispatch, useSelector } from "react-redux";
import { fetchSingleArtist } from "../api";
import { useParams } from "react-router-dom";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
} from "react-bootstrap";
import { useEffect } from "react";

export default function SingleArtist() {
  const dispatch = useDispatch();
  const artist = useSelector((state) => state.artists.artists);
  const status = useSelector((state) => state.artists.status);
  const { artistId } = useParams();

  // const artistImage = artist?.images[0]?.url;

  console.log("artist is:", artist);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchSingleArtist(artistId));
    }
  }, [dispatch, status, artistId]);

  console.log(status);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error loading artist</div>;
  }

  return (
    <>
      <Container>
        {artist && (
          <Card key={artist.id}>
            <Card.Img
              style={{ borderRadius: "50%", justifyContent: "center" }}
              key={artist.images[0]?.url}
              src={artist.images[0]?.url}
              alt={artist.name}
              // onClick={(event) => console.log(artist.images.length)}
            />
            <Card.Body>
              <Card.Title>{artist.name}</Card.Title>

              {/* <Card.Text>{artistId.description}</Card.Text> */}
            </Card.Body>
          </Card>
        )}
      </Container>
    </>
  );
}
