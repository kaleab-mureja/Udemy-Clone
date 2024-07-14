import React, { useContext } from 'react';
import { SelectedCoursesContext } from './SelectedCoursesContext';
import img1 from "./image.jpeg";

const Cart = () => {
  const { selectedCourses, unselectCourse } = useContext(SelectedCoursesContext);

  const totalPrice = selectedCourses.reduce((acc, course) => acc + course.price, 0);

  const enrollSelectedCourses = () => {
    console.log("Enrolling in selected courses:", selectedCourses);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Selected Courses</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {selectedCourses.map((course) => (
          <div key={course.id} className="col">
            <div className="card h-100">
              <video className="card-img-top" autoPlay muted loop>
                <source src={img1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="card-body d-flex flex-column">
                <h2 className="card-title">{course.title}</h2>
                <p className="card-subtitle">{course.subtitle}</p>
                <p className="card-text">{course.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div><strong>Price:</strong> ${course.price.toFixed(2)}</div>
                  <div><strong>Rating:</strong> {course.rating} stars</div>
                </div>
                <button 
                  className="btn btn-danger mt-auto align-self-end"
                  onClick={() => unselectCourse(course.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedCourses.length > 0 && (
        <div className="text-center mt-4">
          <h5>Total Price: ${totalPrice.toFixed(2)}</h5>
          <button className="btn btn-success" onClick={enrollSelectedCourses}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
