import { useDispatch, useSelector } from "react-redux";
import { fetchArtistAlbums } from "../api";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Card, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function SingleArtist() {
  const dispatch = useDispatch();
  const artists = useSelector((state) => state.artists.artists);
  // const albums = useSelector((state) => state.artists.albums);
  const artistStatus = useSelector((state) => state.artists.status);
  const albumsStatus = useSelector((state) => state.artists.albumsStatus);
  const { artistId } = useParams();
  const [albums, setAlbums] =useState();


  useEffect(() => {
    // if (artistStatus === "idle") {
    //   dispatch(fetchArtist(artistId));
    // }
    if (albumsStatus === "idle") {
      dispatch(fetchArtistAlbums(artistId));
    }
  }, [dispatch, artistStatus, albumsStatus, artistId]);

  if (artistStatus === "loading" || albumsStatus === "loading") {
    return <div>Loading...</div>;
  }

  if (artistStatus === "failed") {
    return <div>Error loading artist</div>;
  }

  // Find the artist from the artists array
  const artist = artists.find((artist) => artist.id === artistId);

  return (
    <>
      <Container stlye={{ maxWidth: "400px" }}>
        {artist && (
          <Card key={artist.id}>
            <Card.Img
              style={{
                borderRadius: "50%",
                justifyContent: "center",
                maxWidth: "50%",
              }}
              key={artist.images[0]?.url}
              src={artist.images[0]?.url}
              alt={artist.name}
            />
            <Card.Body>
              <Card.Title>{artist.name}</Card.Title>
            </Card.Body>
          </Card>
        )}
        <Link to={ }>
        <Button onClick={}>View Artists' Albums</Button>
        </Link>
      </Container>
    </>
  );
}

{
  /* <Container>
        <Row className="mx-2 row row-cols-4">
          {albums &&
            albums.map((album) => (
              <Link to={`/albums/${album.id}`} key={album.id}>
                <Card>
                  <Card.Img
                    style={{ borderRadius: "50%", justifyContent: "center" }}
                    src={album.images[0]?.url}
                    alt={album.name}
                  />
                  <Card.Title>{album.name}</Card.Title>
                </Card>
              </Link>
            ))}
        </Row>
      </Container> */
}


// import { useDispatch, useSelector } from "react-redux";
// import { fetchSingleArtist } from "../api";
// import { useParams } from "react-router-dom";
// import {
//   Container,
//   InputGroup,
//   FormControl,
//   Button,
//   Row,
//   Card,
// } from "react-bootstrap";
// import { useEffect } from "react";

// export default function SingleArtist() {
//   const dispatch = useDispatch();
//   const artist = useSelector((state) => state.artists.artists);
//   const status = useSelector((state) => state.artists.status);
//   const { artistId } = useParams();

//   // const artistImage = artist?.images[0]?.url;

//   console.log("artist is:", artist);

//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(fetchSingleArtist(artistId));
//     }
//   }, [dispatch, status, artistId]);

//   console.log(status);

//   if (status === "loading") {
//     return <div>Loading...</div>;
//   }

//   if (status === "failed") {
//     return <div>Error loading artist</div>;
//   }

//   return (
//     <>
//       <Container>
//         {artist && (
//           <Card key={artist.id}>
//             <Card.Img
//               style={{ borderRadius: "50%", justifyContent: "center" }}
//               key={artist.images[0]?.url}
//               src={artist.images[0]?.url}
//               alt={artist.name}
//               // onClick={(event) => console.log(artist.images.length)}
//             />
//             <Card.Body>
//               <Card.Title>{artist.name}</Card.Title>

//               {/* <Card.Text>{artistId.description}</Card.Text> */}
//             </Card.Body>
//           </Card>
//         )}
//       </Container>
//     </>
//   );
// }
