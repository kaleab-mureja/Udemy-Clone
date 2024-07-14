import React, { useState } from "react";
import img1 from "./image.jpeg";

const Courses = () => {
  // Define an array of course data (placeholder values for demonstration)
  const courses = [
    {
      id: 1,
      title: "Web Development Course",
      subtitle: "Learn full-stack web development",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 99.99,
      rating: 4.5,
    },
    {
      id: 2,
      title: "Data Science Course",
      subtitle: "Master data analysis techniques",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 129.99,
      rating: 4.2,
    },
    {
      id: 3,
      title: "Mobile App Development Course",
      subtitle: "Build mobile applications from scratch",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 79.99,
      rating: 4.0,
    },
    {
      id: 4,
      title: "UI/UX Design Course",
      subtitle: "Create engaging user interfaces",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 89.99,
      rating: 4.3,
    },
    {
      id: 5,
      title: "Python Programming Course",
      subtitle: "Learn Python programming language",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 69.99,
      rating: 4.8,
    },
    {
      id: 6,
      title: "Digital Marketing Course",
      subtitle: "Explore strategies for online marketing",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 59.99,
      rating: 4.1,
    },
    {
      id: 7,
      title: "Cybersecurity Course",
      subtitle: "Enhance your cybersecurity skills",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 109.99,
      rating: 4.6,
    },
    {
      id: 8,
      title: "Cloud Computing Course",
      subtitle: "Master cloud technologies and services",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 119.99,
      rating: 4.4,
    },
  ];

  const [selectedCourses, setSelectedCourses] = useState([]);

  // Function to handle selecting a course
  const selectCourse = (courseId) => {
    const course = courses.find((course) => course.id === courseId);
    if (course && !selectedCourses.includes(course)) {
      setSelectedCourses((prevSelectedCourses) => [
        ...prevSelectedCourses,
        course,
      ]);
    }
  };

  // Function to handle unselecting a course
  const unselectCourse = (courseId) => {
    setSelectedCourses((prevSelectedCourses) =>
      prevSelectedCourses.filter((course) => course.id !== courseId)
    );
  };

  // Function to handle enrolling in selected courses
  const enrollSelectedCourses = () => {
    // Here you can implement the logic to enroll in selected courses
    console.log("Enrolling in selected courses:", selectedCourses);
  };

  // Calculate total price of selected courses
  const totalPrice = selectedCourses.reduce(
    (acc, course) => acc + course.price,
    0
  );

  return (
    <div className="body-container container mt-5">
      <h1 className="text-center mb-4">Available Courses</h1>
      <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-4">
        {courses.map((course) => (
          <div key={course.id} className="col">
            <div className="card h-100 d-flex flex-column justify-content-between">
              <video className="card-img-top" autoPlay muted loop>
                <source src={img1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="card-body d-flex flex-column">
                <h2
                  className="card-title text-truncate"
                  style={{ maxWidth: "200px" }}>
                  {course.title}
                </h2>
                <span className="card-subtitle">{course.subtitle}</span>
                <div className="card-text">{course.description}</div>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <div>
                    <strong>Price:</strong> ${course.price}
                  </div>
                  <div>
                    <strong>Rating:</strong> {course.rating} stars
                  </div>
                </div>
                <button
                  className="btn btn-primary mt-3 align-self-center"
                  onClick={() => selectCourse(course.id)}>
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
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
                    <div>
                      <strong>Price:</strong> ${course.price.toFixed(2)}
                    </div>
                    <div>
                      <strong>Rating:</strong> {course.rating} stars
                    </div>
                  </div>
                  <button
                    className="btn btn-danger mt-auto align-self-end"
                    onClick={() => unselectCourse(course.id)}>
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
            <button className="btn btn-success" onClick={enrollSelectedCourses}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
