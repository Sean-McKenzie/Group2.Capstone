import { useSelector } from "react-redux";
import { Container, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ReviewModal from "./ReviewModal";
import { useEffect, useState } from "react";

export default function SingleTrack() {
  const tracks = useSelector((state) => state.playlist.playlist?.tracks?.items);
  const { trackId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `http://dpg-cpahv1m3e1ms739q90bg-a.ohio-postgres.render.com/tune_talk:3000/api/reviews/topsongs/${trackId}`
        );
        const reviewsData = await response.json();
        setReviews(reviewsData);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReviews();
  }, [trackId]);

  const track = tracks?.find((item) => item.track.id === trackId);

  if (!track) {
    return <div>Track not found</div>;
  }

  const { name, artists, album } = track.track;

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
        songId={trackId}
        user_id={userId}
        close={() => setModalShow(false)}
      />
    </Container>
  );
}


