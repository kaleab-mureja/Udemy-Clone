import img1 from "./image.jpeg";
import React, { useState } from "react";

const Payment = () => {
  const [course] = useState({
    title: "Web Development Course",
    price: Math.floor(Math.random() * 100) + 50, // Generate a random price between 50 and 150
    rating: Math.floor(Math.random() * (5 - 3 + 1)) + 3, // Generate a random rating between 3 and 5
    description:
      "Learn full-stack web development with HTML, CSS, JavaScript, React, Node.js, and more.",
  });

  const handlePayment = () => {
    console.log(`Payment for ${course.title} successfully processed!`);
  };

  return (
    <div className="container payment-filed mt-4">
      <div className="card mt-4" style={{ width: "20rem" }}>
        <img src={img1} className="card-img-top" alt={course.title} />
        <div className="card-body">
          <h5 className="card-title">{course.title}</h5>
          <p className="card-text">{course.description}</p>
          <p className="card-text">
            <strong>Price:</strong> ${course.price}
          </p>
          <p className="card-text">
            <strong>Rating:</strong> {course.rating} stars
          </p>
          <button
            className="btn btn-primary buying-btn"
            onClick={handlePayment}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
