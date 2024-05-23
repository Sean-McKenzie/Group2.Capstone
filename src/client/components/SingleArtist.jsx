import { useDispatch, useSelector } from "react-redux";
import { fetchArtistAlbums } from "../api";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Card, Button } from "react-bootstrap";

import { useEffect, useState } from "react";
// import { useEffect } from "react";
import ReviewModal from "./ReviewModal";

export default function SingleArtist({artistid}) {
  const dispatch = useDispatch();
  const artists = useSelector((state) => state.artists.artists);
  // const albums = useSelector((state) => state.artists.albums);
  const artistStatus = useSelector((state) => state.artists.status);
  const albumsStatus = useSelector((state) => state.artists.albumsStatus);
  const { artistId } = useParams();
  const [reviews, setReviews] = useState([]);

  // const [albums, setAlbums] = useState();

  const [modalShow, setModalShow] = useState(false);

  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/reviews/artist/${artistid}",
        ); // Example: fetch review with ID 123
        const reviewsData = await response.json();
        console.log("reviews data", reviewsData);
        //const convertedReviewsData = Object.keys(reviewsData).map((key) => [key, reviewsData[key]])
        // console.log("reviews data", reviewsData);
        //console.log(convertedReviewsData);
        setReviews(reviewsData.reviews);
        console.log("reviews:", reviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReviews();
    console.log("reviews:", reviews);
  }, []);
  // useEffect(() => {
  //   // if (artistStatus === "idle") {
  //   //   dispatch(fetchArtist(artistId));
  //   // }
  //   if (albumsStatus === "idle") {
  //     dispatch(fetchArtistAlbums(artistId));
  //   }
  // }, [dispatch, artistStatus, albumsStatus, artistId]);

  if (artistStatus === "loading" || albumsStatus === "loading") {
    return <div>Loading...</div>;
  }

  if (artistStatus === "failed") {
    return <div>Error loading artist</div>;
  }

  // Find the artist from the artists array
  const artist = artists.find((artist) => artist.id === artistId);

  // const user_id = localStorage.getItem("user_id");

  return (
    <>
      <Container stlye={{ maxWidth: "400px", color: "blue" }}>
        {artist && (
          <Card
            key={artist.id}
            style={{ background: "none", stroke: "none", padding: "15px" }}
          >
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
              <Card.Title
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: "bolder",
                  fontSize: "45px",
                  paddingLeft: "160px",
                }}
              >
                {artist.name}
              </Card.Title>
            </Card.Body>
          </Card>
        )}
        {reviews &&
          reviews.map((reviews) => (
            <Card key={reviews.reviewid}>
              <Card.Body>
                <Card.Title>{reviews.reviewtxt}</Card.Title>
              </Card.Body>
            </Card>
          ))}

        <ReviewModal
          show={modalShow}
          artistId={artistId}
          user_id={userId}
          close={() => setModalShow(false)}
        />
      </Container>
    </>
  );
}

// const handleArtistClick = (clickedArtistId) => {
//   //   // Fetch albums for the clicked artist
//   dispatch(fetchArtistAlbums(clickedArtistId));
//   const albums = useSelector((state) => console.log("state is:", state));
// };
