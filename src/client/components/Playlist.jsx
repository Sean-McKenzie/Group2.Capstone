import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylist } from "../api";
import { useEffect } from "react";
import { Container, Row, Card,  } from "react-bootstrap";

export default function Playlist({playlistId}) {
    const dispatch = useDispatch();
    const playlist = useSelector((state) => state.playlist.playlist);
    const status = useSelector((state) => state.playlist.status);

    useEffect(() => {
        console.log(status)
            if(status === "idle") {
              dispatch(fetchPlaylist(playlistId));
            }
         
    }, [dispatch, status]);

    if (status === "loading") {
         return <div>Loading...</div>;
    }

    if (status === "failed") {
         return <div>Error loading artists</div>;
    }

    return (
      <div>
        {playlist && (
          <Container>
            <Row className="mx-2 row row-cols-4">
              {playlist.tracks?.items.map((item) => (
                <Card key={item.track.id}>
                  <Card.Img src="#" />
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
      </div>
    );

}