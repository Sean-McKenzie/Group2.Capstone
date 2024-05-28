import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import Stars from "./StarsRating";

export default function ReviewModal({ artistId, albumId, songId, user_id }) {
  const [show, setShow] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleClose = () => {
    setShow(false);
    setMessage("");
    setError("");
  };

  const handleShow = () => {
    setShow(true);
    setMessage("");
    setError("");
  };

  const submitReview = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "https://dpg-cpahv1m3e1ms739q90bg-a.ohio-postgres.render.com/tune_talk:3000/api/reviews/comment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            reviewtxt: reviewText,
            rating: rating,
            songid: songId,
            albumid: albumId,
            artistid: artistId,
            user_id: user_id,
          }),
        }
      );

      if (response.ok) {
        setMessage("Thanks for your feedback!");
        setError("");
        setReviewText("");
        setRating(0);
      } else {
        setError("Sorry, you must be logged in to leave a review!");
        setMessage("");
      }
    } catch (error) {
      setError("Error submitting review: " + error.message);
      setMessage("");
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Leave a review
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Leave a review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {message && <p style={{ color: "green" }}>{message}</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Form>
            <Form.Group
              className="mb-3"
              controlId="reviewForm.ControlTextarea1"
            >
              <Form.Label>Review</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              />
            </Form.Group>
            <Stars setRating={setRating} />

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitReview}>
            Submit Review
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
