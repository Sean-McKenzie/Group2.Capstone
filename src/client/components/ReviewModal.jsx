//create form to add reviews ideally a modal 

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
  Form
} from 'react-bootstrap';

export default function ReviewModal() {
  const [show, setShow] = useState(false);
  const [reviewText, setReviewText] = useState(''); 
  const [reviewEmail, setReviewEmail] = useState('');

    const handleClose = () => setShow(false);
   
    const submitReview = () => {
      console.log(reviewText,reviewEmail);
    }
 return (
    <>
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Leave a review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="reviewForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                as="email"
                type="email"
                placeholder="name@example.com"
                value = {reviewEmail} 
                onChange={setReviewEmail}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="reviewForm.ControlTextarea1"
            >
              <Form.Label>Review</Form.Label>
              <Form.Control as="textarea" rows={3} value = {reviewText} onChange={setReviewText}/>
            </Form.Group>
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

