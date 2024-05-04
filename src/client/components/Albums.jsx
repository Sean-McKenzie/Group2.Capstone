import { useDispatch, useSelector } from "react-redux";
import { fetchManyAlbums } from "../api";

import {
  Container,
  
  Row,
  Card,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ManyAlbums({ albumId }) {
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.albums.albums);
  const status = useSelector((state) => state.albums.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchManyAlbums(albumId.join(",")));
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
    
      <Container>
        <Row className="mx-2 row row-cols-4">
          {albums &&
            albums.map((album) => (
              <Link to={`/albums/${album.id}`}>
                <Card key={album.id}>
                  <Card.Img
                    key={album.images[0]?.url}
                    style={{ borderRadius: "50%", justifyContent: "center" }}
                    src={album.images[0]?.url}
                    alt={album.name}
                  />
                  <Card.Title key={album.name}>{album.name}</Card.Title>
                </Card>
              </Link>
            ))}
        </Row>
      </Container>
    </>
  );
}
