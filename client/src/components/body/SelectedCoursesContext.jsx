import React, { createContext, useState } from "react";

export const SelectedCoursesContext = createContext();

export const SelectedCoursesProvider = ({ children }) => {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const selectCourse = (course) => {
    setSelectedCourses((prevSelectedCourses) => [
      ...prevSelectedCourses,
      course,
    ]);
  };

  const unselectCourse = (courseId) => {
    setSelectedCourses((prevSelectedCourses) =>
      prevSelectedCourses.filter((course) => course.id !== courseId)
    );
  };

  return (
    <SelectedCoursesContext.Provider
      value={{ selectedCourses, selectCourse, unselectCourse }}>
      {children}
    </SelectedCoursesContext.Provider>
  );
};
