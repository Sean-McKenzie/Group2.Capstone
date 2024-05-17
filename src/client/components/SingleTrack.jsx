import { useSelector } from "react-redux";
import { Container, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ReviewModal from "./ReviewModal";
import { useEffect, useState } from "react";

export default function SingleTrack() {
  const tracks = useSelector((state) => state.playlist.playlist?.tracks?.items);
  const { trackId } = useParams();

  const [modalShow, setModalShow] = useState(false);
  const track = tracks.find((item) => item.track.id === trackId);

  if (!track) {
    return <div>Track not found</div>;
  }

  const { name, artists, album } = track.track;

  return (
    <Container stlye={{ maxWidth: "400px", color: "blue" }}>
      <Card style={{ background: "none", stroke: "none", padding: "15px" }}>
        <Card.Img
          src={album.images[0]?.url}
          alt={name}
          style={{
            borderRadius: "50%",
            justifyContent: "center",
            maxWidth: "50%",
          }}
        />
        <Card.Body>
          <Card.Title
            style={{
              fontFamily: "sans-serif",
              fontWeight: "bolder",
              fontSize: "25px",
              paddingLeft: "110px",
            }}
          >
            {name}
          </Card.Title>
          {artists.map((artist) => (
            <Card.Text
              key={artist.id}
              style={{
                fontFamily: "sans-serif",
                paddingLeft: "110px",
                fontSize: "25px",
              }}
            >
              {artist.name}
            </Card.Text>
          ))}
        </Card.Body>
      </Card>
      <ReviewModal show={modalShow} close={() => setModalShow(false)} />
    </Container>
  );
}

// import { useDispatch, useSelector } from "react-redux";
// import { fetchSingleTrack } from "../api";
// import { useParams } from "react-router-dom";
// import { Container, Card } from "react-bootstrap";
// import { useEffect } from "react";

// export default function SingleTrack() {
//   const dispatch = useDispatch();
//   const track = useSelector((state) => state.tracks.track);
//   const status = useSelector((state) => state.tracks.status);
//   const { trackId } = useParams();

//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(fetchSingleTrack(trackId));
//     }

//     // Cleanup function
//     return () => {
//       // Reset the track state to null when the component unmounts
//       dispatch({ type: "RESET_TRACK" });
//     };
//   }, [dispatch, status, trackId]);

//   if (status === "loading") {
//     return <div>Loading...</div>;
//   }

//   if (status === "failed") {
//     return <div>Error loading track</div>;
//   }

//   return (
//     <Container>
//       {track && (
//         <Card key={track.id}>
//           {/* <Card.Img
//             key={track.album.images[0]?.url}
//             src={track.album.images[0]?.url}
//             alt={track.name}
//           /> */}
//           <Card.Body>
//             <Card.Title>{track.name}</Card.Title>
//             {/* <Card.Text>{track.artists[0]?.name}</Card.Text> */}
//           </Card.Body>
//         </Card>
//       )}
//     </Container>
//   );
// }

// import { useDispatch, useSelector } from "react-redux";
// import { fetchSingleTrack } from "../api";
// import { useParams } from "react-router-dom";
// import { Container, Card } from "react-bootstrap";
// import { useEffect } from "react";

// export default function SingleTrack() {
//   const dispatch = useDispatch();
//   const track = useSelector((state) => state.tracks.tracks);
//   const status = useSelector((state) => state.tracks.status);
//   const { trackId } = useParams();

//   // const artistImage = artist?.images[0]?.url;

//   console.log("track is:", track);
//   console.log("status is:", status);

//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(fetchSingleTrack(trackId));
//     }
//     return () => {} //reset the state to null when the component unmounts
//   }, [dispatch, status, trackId]);

//   if (status === "loading") {
//     return <div>Loading...</div>;
//   }

//   if (status === "failed") {
//     return <div>Error loading artist</div>;
//   }

//   return (
//     <>
//       <Container>
//         {track && (
//           <Card key={track.id}>
//             <Card.Img
//               key={track.album.images[0]?.url}
//               src={track.album.images[0]?.url}
//               art={track.name}
//             />
//             <Card.Body>
//               <Card.Title>{track.name}</Card.Title>

//               <Card.Text>{track.artists[0]?.name}</Card.Text>
//             </Card.Body>
//           </Card>
//         )}
//       </Container>
//     </>
//   );
// }
