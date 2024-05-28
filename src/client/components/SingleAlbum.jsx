import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import ReviewModal from "./ReviewModal";
import { useEffect, useState } from "react";

export default function SingleAlbum() {
  const albums = useSelector((state) => state.albums.albums);
  const albumStatus = useSelector((state) => state.albums.status);
  const { albumId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `http://tune_talk_user:WpfPaFxhqDgwK9j012wcQqgnBZq6MIzZ@dpg-cpahv1m3e1ms739q90bg-a.ohio-postgres.render.com/tune_talk:3000/api/reviews/albums/${albumId}`
        );
        const reviewsData = await response.json();
        setReviews(reviewsData);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReviews();
  }, [albumId]);

  if (albumStatus === "loading") {
    return <div>Loading...</div>;
  }

  if (albumStatus === "failed") {
    return <div>Error loading album</div>;
  }

  const album = albums.find((album) => album.id === albumId);

  const renderStars = (rating) => {
    const totalStars = 5;
    const filledStars = Math.round(rating);
    const starsArray = Array.from({ length: totalStars }, (_, index) => (
      <span
        key={index}
        style={{ color: index < filledStars ? "green" : "gray" }}
      >
        {index < filledStars ? "★" : "☆"}
      </span>
    ));
    return starsArray;
  };

  return (
    <Container style={{ maxWidth: "400px", color: "blue" }}>
      {album && (
        <Card
          key={album.id}
          style={{ background: "none", stroke: "none", padding: "15px" }}
        >
          <Card.Img
            key={album.images[0]?.url}
            src={album.images[0]?.url}
            alt={album.name}
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
                paddingLeft: "100px",
              }}
            >
              {album.name}
            </Card.Title>
            <Card.Text
              style={{
                fontFamily: "sans-serif",
                fontWeight: "bolder",
                fontSize: "25px",
                paddingLeft: "100px",
              }}
            >
              {album.artists[0]?.name}
            </Card.Text>
          </Card.Body>
        </Card>
      )}

      {reviews.length > 0 ? (
        reviews.map((review) => (
          <Card key={review.reviewid}>
            <Card.Body>
              <Card.Title>{review.reviewtxt}</Card.Title>
              <Card.Text>{renderStars(review.rating)}</Card.Text>
            </Card.Body>
          </Card>
        ))
      ) : (
        <Card>
          <Card.Body>
            <Card.Title>
              No reviews yet, be the first to leave a review
            </Card.Title>
          </Card.Body>
        </Card>
      )}
      <ReviewModal
        show={modalShow}
        albumId={albumId}
        user_id={userId}
        close={() => setModalShow(false)}
      />
    </Container>
  );
}

// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { Container, Card } from "react-bootstrap";
// import ReviewModal from "./ReviewModal";
// import { useEffect, useState } from "react";

// export default function SingleAlbum() {
//   const albums = useSelector((state) => state.albums.albums);
//   const { albumId } = useParams();
//   const [reviews, setReviews] = useState([]);
//   const [modalShow, setModalShow] = useState(false);

//   const userId = localStorage.getItem("user_id");

//   const album = albums.find((album) => album.id === albumId);
//   if (!album) {
//     return <div>Album not found</div>;
//   }

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:3000/api/reviews/artists/${albumId}`
//         ); // Example: fetch review with ID 123
//         const reviewsData = await response.json();
//         console.log("reviews data", reviewsData);
//         //const convertedReviewsData = Object.keys(reviewsData).map((key) => [key, reviewsData[key]])
//         // console.log("reviews data", reviewsData);
//         //console.log(convertedReviewsData);
//         setReviews(reviewsData);
//         console.log("reviews:", reviews);
//       } catch (error) {
//         console.error("Error fetching reviews:", error);
//       }
//     };
//     fetchReviews();
//     console.log("reviews:", reviews);
//   }, []);

//   return (
//     <Container stlye={{ maxWidth: "400px", color: "blue" }}>
//       <Card
//         key={album.id}
//         style={{ background: "none", stroke: "none", padding: "15px" }}
//       >
//         <Card.Img
//           key={album.images[0]?.url}
//           src={album.images[0]?.url}
//           alt={album.name}
//           style={{
//             borderRadius: "50%",
//             justifyContent: "center",
//             maxWidth: "50%",
//           }}
//         />
//         <Card.Body>
//           <Card.Title
//             style={{
//               fontFamily: "sans-serif",
//               fontWeight: "bolder",
//               fontSize: "25px",
//               paddingLeft: "100px",
//             }}
//           >
//             {album.name}
//           </Card.Title>
//           <Card.Text
//             style={{
//               fontFamily: "sans-serif",
//               fontWeight: "bolder",
//               fontSize: "25px",
//               paddingLeft: "100px",
//             }}
//           >
//             {album.artists[0]?.name}
//           </Card.Text>
//         </Card.Body>
//       </Card>
//       {reviews.length > 0 ? (
//         reviews.map((review) => (
//           <Card key={review.reviewid}>
//             <Card.Body>
//               <Card.Title>{review.reviewtxt}</Card.Title>
//               <Card.Title>{review.rating}</Card.Title>
//             </Card.Body>
//           </Card>
//         ))
//       ) : (
//         <Card>
//           <Card.Body>
//             <Card.Title>
//               No reviews yet, be the first to leave a review
//             </Card.Title>
//           </Card.Body>
//         </Card>
//       )}
//       <ReviewModal
//         show={modalShow}
//         albumId={albumId}
//         user_id={userId}
//         close={() => setModalShow(false)}
//       />
//     </Container>
//   );
// }

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
