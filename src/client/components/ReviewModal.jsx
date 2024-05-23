//create form to add reviews ideally a modal

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

import Stars from "./StarsRating";
export default function ReviewModal({artistId, albumId, songId, user_id}) {
  const [show, setShow] = useState(false);
  const [reviewText, setReviewText] = useState("");
  // const [reviewEmail, setReviewEmail] = useState("");
  const [rating, setRating] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitReview = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "http://localhost:3000/api/reviews/comment",
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
        console.log("Review submitted successfully");
        handleClose();
      } else {
        console.error("Failed to submit review:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting review:", error.message);
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
