import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Card, Row } from "react-bootstrap";
import { fetchArtistAlbums } from "../api";

export default function ArtistAlbum() {
  const { artistId } = useParams();
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.artists.albums);

  useEffect(() => {
    // Dispatch action to fetch artist albums when the component mounts or artistId changes
    dispatch(fetchArtistAlbums(artistId));
  }, [dispatch, artistId]);

  if (!albums.length) {
    return <div>No albums found for this artist</div>;
  }

  return (
    <Container>
      <Row className="mx-2 row row-cols-4">
        {albums.map((album) => (
          <Card key={album.id}>
            <Card.Img
              key={album.images[0]?.url}
              src={album.images[0]?.url}
              alt={album.name}
            />
            <Card.Body>
              <Card.Title>{album.name}</Card.Title>
              {/* If there are multiple artists, you might want to iterate over them */}
              {/* Example: {album.artists.map((artist) => artist.name).join(", ")} */}
              <Card.Text>{album.artists[0]?.name}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
}
