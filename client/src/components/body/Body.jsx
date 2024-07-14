import React, { useState } from "react";
import img1 from "./image.jpeg";
import "./body.css";
import { SelectedCoursesProvider } from "./SelectedCoursesContext";
import Login from "./LoginPage";
import SignUp from "./SignUpPage";
import Courses from "./Courses";
import Cart from "./Cart";
import CookieSettings from "./CookieSettings";
import ContactUs from "./ContactUsPage";
import FetchCourse from "./FetchCourse";
import PrivacyPolicy from "./PrivacyPolicy";
import Terms from "./Terms";
import Payment from "./Payment";
import AboutPage from "./AboutPage";

const Body = ({ links, setLinks }) => {
  const [currentRoute, setCurrentRoute] = useState("/payment");

  const renderComponent = () => {
    switch (links.currentState) {
      case "/courses":
        return <Courses />;
      case "/cookieSettings":
        return <CookieSettings />;
      case "/contactUs":
        return <ContactUs />;
      case "/fetchCourse":
        return <FetchCourse />;
      case "/cart":
        return <Cart />;
      case "/login":
        return <Login />;
      case "/signUp":
        return <SignUp />;
      case "/privacyPolicy":
        return <PrivacyPolicy />;
      case "/terms":
        return <Terms />;
      case "/payment":
        return <Payment />;
      case "/aboutUs":
        return <AboutPage />;
      default:
        return <Courses />;
    }
  };

  return (
    <SelectedCoursesProvider>
      <div>{renderComponent()}</div>
    </SelectedCoursesProvider>
  );
};

export default Body;
