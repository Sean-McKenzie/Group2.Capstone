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
             
              <p>{review.reviewtxt}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Reviewslist;

