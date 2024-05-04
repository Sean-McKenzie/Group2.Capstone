import { useDispatch, useSelector } from "react-redux";
import { fetchAlbum } from "../api";
import { useParams } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import { useEffect } from "react";

export default function SingleAlbum() {
  const dispatch = useDispatch();
  const album = useSelector((state) => state.albums.albums);
  const status = useSelector((state) => state.albums.status);
  const { albumId } = useParams();

  // const artistImage = artist?.images[0]?.url;

  console.log("album is:", album);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAlbum(albumId));
    }
  }, [dispatch, status, albumId]);

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
        {album && (
          <Card key={album.id}>
            <Card.Img
              key={album.images[0]?.url}
              src={album.images[0]?.url}
              art={album.name}
            />
            <Card.Body>
              <Card.Title>{album.name}</Card.Title>

              <Card.Text>{album.artists[0]?.name}</Card.Text>
            </Card.Body>
          </Card>
        )}
      </Container>
    </>
  );
}
