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
      dispatch(fetchArtist(artistId.join(",")));
    }
    console.log(status);
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
          {artists &&
            artists.map((artist) => (
              <Link
                to={`/artist/${artist.id}`}
                style={{
                  textDecoration: "none",
                }}
              >
                <Card
                  key={artist.id}
                  className="cards"
                  style={{
                    background: "none",
                    stroke: "none",
                    padding: "15px",
                    transition: "1s",
                    justifyContent: "space-around",
                    margin: "8px"
                  }}
                >
                  <Card.Img
                    key={artist.images[0]?.url}
                    style={{
                      borderRadius: "50%",
                      justifyContent: "center",
                      // stroke: "50px",
                      strokeWidth: "12px",
                    }}
                    src={artist.images[0]?.url}
                    alt={artist.name}
                  />
                  <Card.Title
                    key={artist.name}
                    style={{
                      fontFamily: "sans-serif",
                      fontWeight: "bolder",
                      fontSize: "25px",
                      textAlign: "center",
                      textDecoration: "none",
                      paddingTop: "10px",
                    }}
                  >
                    {artist.name}
                  </Card.Title>
                </Card>
              </Link>
            ))}
        </Row>
      </Container>
    </>
  );
}
