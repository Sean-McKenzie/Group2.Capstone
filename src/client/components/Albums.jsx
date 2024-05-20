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
              <Link
                to={`/albums/${album.id}`}
                style={{
                  textDecoration: "none",
                }}
              >
                <Card
                  className="cards"
                  key={album.id}
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
                    key={album.images[0]?.url}
                    style={{ borderRadius: "50%", justifyContent: "center" }}
                    src={album.images[0]?.url}
                    alt={album.name}
                  />
                  <Card.Title
                    key={album.name}
                    style={{
                      fontFamily: "sans-serif",
                      fontWeight: "bolder",
                      fontSize: "18px",
                      textAlign: "center",
                      textDecoration: "none",
                      paddingTop: "10px",
                    }}
                  >
                    {album.name}{" "}
                  </Card.Title>
                </Card>
              </Link>
            ))}
        </Row>
      </Container>
    </>
  );
}
