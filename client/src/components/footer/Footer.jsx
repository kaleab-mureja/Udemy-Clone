import React from "react";
import "./footer.css";
import udemyLogo from "../header/img/udemy-logo.png";

const Footer = ({Links, setLinks}) => {
  const goToPrivacyPolicy = () => {
    setLinks((prevState) => ({ ...prevState, currentState: "/privacyPolicy" }));
  };
  const goToAboutUs = () => {
    setLinks((prevState) => ({ ...prevState, currentState: "/aboutUs" }));
  };
  const goToContactUs = () => {
    setLinks((prevState) => ({ ...prevState, currentState: "/contactUs" }));
  };
  const goToTerms = () => {
    setLinks((prevState) => ({ ...prevState, currentState: "/terms" }));
  };
  const goToCookieSettings = () => {
    setLinks((prevState) => ({
      ...prevState,
      currentState: "/cookieSettings",
    }));
  };

  return (
    <div className="container-fluid  footer-container ">
      <div className="row">
        <div className="col-3 col-md-3">
          <button
            href="#"
            className="btn">
            Teach on Udemy
          </button>
          <button
            href="#"
            onClick={(e) => {
              e.stopPropagation();
              goToAboutUs();
            }}
            className="btn">
            About us
          </button>
          <button
            href="#"
            onClick={(e) => {
              e.stopPropagation();
              goToContactUs();
            }}
            className="btn">
            Contact us
          </button>
        </div>
        <div className="col-3 col-xs-2 col-md-4">
          <button
            href="#"
            onClick={(e) => {
              e.stopPropagation();
              goToTerms();
            }}
            className="btn">
            Terms
          </button>
          <button
            href="#"
            onClick={(e) => {
              e.stopPropagation();
              goToPrivacyPolicy();
            }}
            className="btn">
            Privacy policy
          </button>
          <button
            href="#"
            onClick={(e) => {
              e.stopPropagation();
              goToCookieSettings();
            }}
            className="btn">
            Cookie Settings
          </button>
        </div>
        <div className="col-4 col-md-3"></div>
        <div className="col">
          <img class="footer-udemy-logo " src={udemyLogo} alt="udemy-logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
