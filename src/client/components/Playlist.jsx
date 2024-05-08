import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylist } from "../api";
import { useEffect } from "react";
import { fetchPlaylistInfo } from "../../server/api/spotify";
import {
  Container,
  Row,
  Card,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

export default function Playlist({ playlistId }) {
  const dispatch = useDispatch();
  const playlist = useSelector((state) => state.playlist.playlist);
  const status = useSelector((state) => state.playlist.status);

  useEffect(() => {
    console.log(status);
    if (status === "idle") {
      dispatch(fetchPlaylistInfo(playlistId));
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
              placeholder="Search for an Song"
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
      </div>

      {playlist && (
        <Container>
          <Row className="mx-2 row row-cols-4">
            {playlist.tracks?.items.map((item) => (
              <Card key={item.track.id}>
                <Card.Img
                  style={{ borderRadius: "50%", justifyContent: "center" }}
                  src={item.track.album.images[0]?.url}
                />
                <Card.Body>
                  <Card.Title>{item.track.name}</Card.Title>
                  {item.track.artists?.map((artist) => (
                    <Card.Text key={artist.id}>{artist.name}</Card.Text>
                  ))}
                </Card.Body>
              </Card>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
}
