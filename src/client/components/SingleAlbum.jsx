import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Card } from "react-bootstrap";

export default function SingleAlbum() {
  const albums = useSelector((state) => state.albums.albums);
  const { albumId } = useParams();

  const album = albums.find((album) => album.id === albumId);

  if (!album) {
    return <div>Album not found</div>;
  }

  return (
    <Container>
      <Card key={album.id}>
        <Card.Img
          key={album.images[0]?.url}
          src={album.images[0]?.url}
          alt={album.name}
        />
        <Card.Body>
          <Card.Title>{album.name}</Card.Title>
          <Card.Text>{album.artists[0]?.name}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

// import { useDispatch, useSelector } from "react-redux";
// // import { fetchAlbum } from "../api";
// import { useParams } from "react-router-dom";
// import { Container, Card } from "react-bootstrap";
// // import { useEffect } from "react";

// export default function SingleAlbum() {
//   const dispatch = useDispatch();
//   const album = useSelector((state) => state.albums.albums); //filter out album with userparams
//   const status = useSelector((state) => state.albums.status);
//   const { albumId } = useParams();

//   // const artistImage = artist?.images[0]?.url;

//   console.log("album is:", album);

//   return (
//     <>
//       <Container>
//         {album && (
//           <Card key={album.id}>
//             <Card.Img
//               key={album.images[0]?.url}
//               src={album.images[0]?.url}
//               art={album.name}
//             />
//             <Card.Body>
//               <Card.Title>{album.name}</Card.Title>

//               <Card.Text>{album.artists[0]?.name}</Card.Text>
//             </Card.Body>
//           </Card>
//         )}
//       </Container>
//     </>
//   );
// }

// useEffect(() => {
//   if (status === "idle") {
//     dispatch(fetchAlbum(albumId));
//   }
// }, [dispatch, status, albumId]);

// console.log(status);

// if (status === "loading") {
//   return <div>Loading...</div>;
// }

// if (status === "failed") {
//   return <div>Error loading artist</div>;
// }
