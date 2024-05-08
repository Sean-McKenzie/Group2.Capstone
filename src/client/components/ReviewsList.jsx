import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";



function Reviewslist() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
    
        const response = await fetch("http://localhost:3000/api/reviews"); // Example: fetch review with ID 123
        const reviewsData = await response.json();
        console.log("reviews data", reviewsData);
        setReviews(reviewsData);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReviews();
    console.log("reviews:", reviews);

  }, []);

  return (
    <Table striped bordered hover style={{ maxWidth: "25vw" }}>
      <thead>
        <tr>
          <th>A Look at recent reviews</th>
        </tr>
      </thead>
      <tbody>
        {
          reviews.map((review) => (
          <tr key={review.reviewid}>
            <td style={{ display: "flex" }}>
              {/* Assuming you have a reviewTXT property */}
              <p>{review.reviewtxt}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Reviewslist;

// <Table striped bordered hover style={{ maxWidth: "25vw" }}>
//   <thead>
//     <tr>
//       <th>A Look at recent reviews</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td style={{ display: "flex" }}>
//         <img
//           style={{ maxHeight: "45px" }}
//           src=".../../../images/user_imagePlaceholder.png"
//         />
//         <p>ivettem23 reviews Victoria Monet</p>
//       </td>
//     </tr>
{
  /* <tr>
          <td style={{ display: "flex" }}>
            <img
              style={{ maxHeight: "45px" }}
              src=".../../../images/user_imagePlaceholder.png"
            />
            <p>ivettem23 reviews Victoria Monet</p>
          </td>
        </tr>
        <tr>
          <td style={{ display: "flex" }}>
            <img
              style={{ maxHeight: "45px" }}
              src=".../../../images/user_imagePlaceholder.png"
            />
            <p>ivettem23 reviews Victoria Monet</p>
          </td>
        </tr>
        <tr>
          <td style={{ display: "flex" }}>
            <img
              style={{ maxHeight: "45px" }}
              src=".../../../images/user_imagePlaceholder.png"
            />
            <p>ivettem23 reviews Victoria Monet</p>
          </td>
        </tr>
        <tr>
          <td style={{ display: "flex" }}>
            <img
              style={{ maxHeight: "45px" }}
              src=".../../../images/user_imagePlaceholder.png"
            />
            <p>ivettem23 reviews Victoria Monet</p>
          </td>
        </tr>
        <tr>
          <td style={{ display: "flex" }}>
            <img
              style={{ maxHeight: "45px" }}
              src=".../../../images/user_imagePlaceholder.png"
            />
            <p>ivettem23 reviews Victoria Monet</p>
          </td>
        </tr> */
}

//   </tbody>
// </Table>
