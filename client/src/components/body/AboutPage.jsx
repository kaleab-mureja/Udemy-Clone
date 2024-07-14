import React from "react";

const AboutPage = () => {
  return (
    <div className="container my-5" style={{ height: "80vh" }}>
      <h1 className="text-center mb-4">About Us</h1>
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="card shadow h-100">
            {" "}
            {/* Adding h-100 class to make the card fill the parent's height */}
            <div className="card-body">
              <p>
                Welcome to Udemy Learning - your go-to platform for online
                learning!
              </p>
              <p>
                At Udemy Learning, we're passionate about providing high-quality
                educational content to learners around the world. Whether you're
                looking to develop new skills, advance your career, or explore
                new interests, we have a wide range of courses to suit your
                needs.
              </p>
              <p>
                Our team of experienced instructors are experts in their fields,
                ensuring that you receive top-notch instruction and guidance
                throughout your learning journey. With our user-friendly
                platform, you can access course materials anytime, anywhere,
                making learning convenient and flexible.
              </p>
              <p>
                Join the millions of learners who have achieved their goals with
                Udemy Learning. Start your learning journey today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
