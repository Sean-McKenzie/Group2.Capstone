import { useSelector } from "react-redux";
import { Container, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function SingleTrack() {
  const tracks = useSelector((state) => state.playlist.playlist?.tracks?.items);
  const { trackId } = useParams();

  const track = tracks.find((item) => item.track.id === trackId);

  if (!track) {
    return <div>Track not found</div>;
  }

  const { name, artists, album } = track.track;

  return (
    <Container>
      <Card>
        <Card.Img src={album.images[0]?.url} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          {artists.map((artist) => (
            <Card.Text key={artist.id}>{artist.name}</Card.Text>
          ))}
        </Card.Body>
      </Card>
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
