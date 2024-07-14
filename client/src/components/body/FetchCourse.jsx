import React from 'react'
import { useState, useEffect } from "react";
import "./body.css";

const FetchCourse = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
      // Mock API call to fetch course data (replace with actual API call)
      const fetchCourses = async () => {
        try {
          const response = await fetch("https://api.yourdomain.com/courses");
          const data = await response.json();
          setCourses(data.courses);
        } catch (error) {
          console.error("Error fetching courses:", error);
        }
      };
  
      fetchCourses();
    }, []);
  return (
    <div className="container mt-4">
    <h1 className="mb-4">Featured Courses</h1>
    <div className="row">
      {courses.map((course) => (
        <div key={course.id} className="col-md-4 mb-4">
          <div className="card">
            <img
              src={course.imageUrl}
              className="card-img-top"
              alt={course.title}
            />
            <div className="card-body">
              <h5 className="card-title">{course.title}</h5>
              <p className="card-text">{course.description}</p>
              <a href="#" className="btn btn-primary">
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default FetchCourse