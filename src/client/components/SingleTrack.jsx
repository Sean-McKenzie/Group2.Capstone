import { useDispatch, useSelector } from "react-redux";
import { fetchSingleTrack } from "../api";
import { useParams } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import { useEffect } from "react";

export default function SingleTrack() {
  const dispatch = useDispatch();
  const track = useSelector((state) => state.tracks.tracks);
  const status = useSelector((state) => state.tracks.status);
  const { trackId } = useParams();

  // const artistImage = artist?.images[0]?.url;

  console.log("track is:", track);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchSingleTrack(trackId));
    }
  }, [dispatch, status, trackId]);

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
        {track && (
          <Card key={track.id}>
            <Card.Img
              key={track.album.images[0]?.url}
              src={track.album.images[0]?.url}
              art={track.name}
            />
            <Card.Body>
              <Card.Title>{track.name}</Card.Title>

              <Card.Text>{track.artists[0]?.name}</Card.Text>
            </Card.Body>
          </Card>
        )}
      </Container>
    </>
  );
}
