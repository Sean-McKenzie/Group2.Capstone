import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import Stars from "./StarsRating";

//instead of passing in artist, album etc, pass in type then ID 
export default function ReviewModal({ artistId, albumId, songId, user_id }) {
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
            reviewTXT: reviewText,
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

{
  /* <Form.Group className="mb-3" controlId="reviewForm.ControlInput1">
  <Form.Label>Email address</Form.Label>
  <Form.Control
    type="email"
    placeholder="name@example.com"
    value={reviewEmail}
    onChange={(e) => setReviewEmail(e.target.value)}
    autoFocus
  />
</Form.Group>; */
}

// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import { Form } from "react-bootstrap";
// import Row from "react-bootstrap/Row";
// import Stars from "./StarsRating";
// // import StarRatingComponent from "react-star-rating-component";

// export default function ReviewModal({ artistId, albumId, songId }) {
//   const [show, setShow] = useState(false);
//   const [reviewText, setReviewText] = useState("");
//   const [reviewEmail, setReviewEmail] = useState("");
//   const [rating, setRating] = useState(0);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const onStarClick = (nextValue) => {
//     setNewMovie({ ...newMovie, rate: nextValue });
//   };

//   const submitReview = async () => {
//     try {
//       const response = await fetch("/api/reviews/comment", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           reviewTxT: reviewText,
//           rating: rating,
//           songid: songId,
//           albumid: albumId,
//           artistid: artistId,
//           user_id: null,
//           rating_id: null,
//         }),
//       });
//       if (response.ok) {
//         console.log("Review submitted successfully");
//         handleClose(); // Close the modal after submitting
//       } else {
//         console.error("Failed to submit review:", response.statusText);
//       }
//     } catch (error) {
//       console.error("Error submitting review:", error.message);
//     }
//   };

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Leave a review
//       </Button>

//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Leave a review</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3" controlId="reviewForm.ControlInput1">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="name@example.com"
//                 value={reviewEmail}
//                 onChange={(e) => setReviewEmail(e.target.value)}
//                 autoFocus
//               />
//             </Form.Group>
//             <Form.Group
//               className="mb-3"
//               controlId="reviewForm.ControlTextarea1"
//             >
//               <Form.Label>Review</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 value={reviewText}
//                 onChange={(e) => setReviewText(e.target.value)}
//               />
//             </Form.Group>
//             <Stars />
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={submitReview}>
//             Submit Review
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }
// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import { Form } from "react-bootstrap";

// export default function ReviewModal() {
//   const [show, setShow] = useState(false);
//   const [reviewText, setReviewText] = useState("");
//   const [reviewEmail, setReviewEmail] = useState("");
//   const [rating, setRating] = useState("");

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const submitReview = async () => {
//     try {
//       const response = await fetch("/api/reviews/comment", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           reviewTxT: reviewText,
//           rating: 0,
//           songid: null,
//           albumid: null,
//           artistid: null,
//           user_id: null,
//           rating_id: null,
//         }), // Assuming you don't have these values in your frontend
//       });
//       if (response.ok) {
//         console.log("Review submitted successfully");
//         handleClose(); // Close the modal after submitting
//       } else {
//         console.error("Failed to submit review:", response.statusText);
//       }
//     } catch (error) {
//       console.error("Error submitting review:", error.message);
//     }
//   };

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Leave a review
//       </Button>

//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Leave a review</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3" controlId="reviewForm.ControlInput1">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="name@example.com"
//                 value={reviewEmail}
//                 onChange={(e) => setReviewEmail(e.target.value)}
//                 autoFocus
//               />
//             </Form.Group>
//             <Form.Group
//               className="mb-3"
//               controlId="reviewForm.ControlTextarea1"
//             >
//               <Form.Label>Review</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 value={reviewText}
//                 onChange={(e) => setReviewText(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="reviewForm.ControlInput2">
//               <Form.Label>Rating</Form.Label>
//               <Form.Control
//                 type="number"
//                 min="0"
//                 max="5"
//                 value={rating}
//                 onChange={(e) => setRating(e.target.value)}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={submitReview}>
//             Submit Review
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

//THIS CODE WORKS!!
// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import { Form } from "react-bootstrap";

// export default function ReviewModal() {
//   const [show, setShow] = useState(false);
//   const [reviewText, setReviewText] = useState("");
//   const [reviewEmail, setReviewEmail] = useState("");

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const submitReview = () => {
//     console.log(reviewText, reviewEmail);
//     handleClose(); // Close the modal after submitting
//   };

//   const handleCloseButtonClick = (e) => {
//     e.stopPropagation(); // Prevent event propagation
//     handleClose(); // Close the modal
//   };

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Leave a review
//       </Button>
//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         {/* <Modal show={show} onHide={handleClose} style={{ opacity: 1 }}> */}
//         <Modal.Header closeButton onClick={handleCloseButtonClick}>
//           {" "}
//           {/* Properly bound closeButton */}
//           <Modal.Title>Leave a review</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3" controlId="reviewForm.ControlInput1">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="name@example.com"
//                 value={reviewEmail}
//                 onChange={(e) => setReviewEmail(e.target.value)}
//                 autoFocus
//               />
//             </Form.Group>
//             <Form.Group
//               className="mb-3"
//               controlId="reviewForm.ControlTextarea1"
//             >
//               <Form.Label>Review</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 value={reviewText}
//                 onChange={(e) => setReviewText(e.target.value)}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseButtonClick}>
//             {" "}
//             {/* Properly bound onClick */}
//             Close
//           </Button>
//           <Button variant="primary" onClick={submitReview}>
//             Submit Review
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import { Form } from "react-bootstrap";

// export default function ReviewModal() {
//   const [show, setShow] = useState(false);
//   const [reviewText, setReviewText] = useState("");
//   const [reviewEmail, setReviewEmail] = useState("");

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const submitReview = () => {
//     console.log(reviewText, reviewEmail);
//     handleClose(); // Close the modal after submitting
//   };

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Leave a review
//       </Button>

//       <Modal show={show} onHide={handleClose} style={{ opacity: 1 }}>
//         <Modal.Header closeButton>
//           {/* <Modal.Header closeButton onClick={handleClose}> */}{" "}
//          <Modal.Title>Leave a review</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3" controlId="reviewForm.ControlInput1">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="name@example.com"
//                 value={reviewEmail}
//                 onChange={(e) => setReviewEmail(e.target.value)} // Adjusted the onChange handler
//                 autoFocus
//               />
//             </Form.Group>
//             <Form.Group
//               className="mb-3"
//               controlId="reviewForm.ControlTextarea1"
//             >
//               <Form.Label>Review</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 value={reviewText}
//                 onChange={(e) => setReviewText(e.target.value)} // Adjusted the onChange handler
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button
//             variant="secondary"
//             data-bs-dismiss="modal"
//             onClick={handleClose}
//           >
//             Close
//           </Button>
//           <Button variant="primary" onClick={submitReview}>
//             Submit Review
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import { Form } from "react-bootstrap";

// export default function ReviewModal() {
//   const [show, setShow] = useState(false);
//   const [reviewText, setReviewText] = useState("");
//   const [reviewEmail, setReviewEmail] = useState("");

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const submitReview = () => {
//     console.log(reviewText, reviewEmail);
//     handleClose(); // Close the modal after submitting
//   };

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Leave a review
//       </Button>

//       <Modal show={show} onHide={handleClose} style={{ opacity: 1 }}>
//         <Modal.Header closeButton>
//           <Modal.Title>Leave a review</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3" controlId="reviewForm.ControlInput1">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="name@example.com"
//                 value={reviewEmail}
//                 onChange={(e) => setReviewEmail(e.target.value)} // Adjusted the onChange handler
//                 autoFocus
//               />
//             </Form.Group>
//             <Form.Group
//               className="mb-3"
//               controlId="reviewForm.ControlTextarea1"
//             >
//               <Form.Label>Review</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 value={reviewText}
//                 onChange={(e) => setReviewText(e.target.value)} // Adjusted the onChange handler
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={submitReview}>
//             Submit Review
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// //create form to add reviews ideally a modal

// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import { Form } from "react-bootstrap";

// export default function ReviewModal() {
//   const [show, setShow] = useState(false);
//   const [reviewText, setReviewText] = useState("");
//   const [reviewEmail, setReviewEmail] = useState("");
//   const [modalShow, setModalShow] = useState(false);

//   const handleClose = () => setShow(false);

//   const submitReview = () => {
//     console.log(reviewText, reviewEmail);
//   };
//   return (
//     <>
//       {/* <Modal show="modal show" onHide={handleClose} style={{ display: 'block', position: 'initial' }}> */}

//       {/* <Button variant="primary" onClick={() => setModalShow(true)}>
//         Leave a review
//       </Button> */}
//       <Modal show={show} onHide={handleClose} style={{ opacity: 1 }}>
//         <Modal.Header closeButton>
//           <Modal.Title>Leave a review</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3" controlId="reviewForm.ControlInput1">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control
//                 as="email"
//                 type="email"
//                 placeholder="name@example.com"
//                 value={reviewEmail}
//                 onChange={setReviewEmail}
//                 autoFocus
//               />
//             </Form.Group>
//             <Form.Group
//               className="mb-3"
//               controlId="reviewForm.ControlTextarea1"
//             >
//               <Form.Label>Review</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 value={reviewText}
//                 onChange={setReviewText}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={submitReview}>
//             Submit Review
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

/* <Form.Group className="mb-3" controlId="reviewForm.ControlInput2">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                min="0"
                max="5"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </Form.Group> */
