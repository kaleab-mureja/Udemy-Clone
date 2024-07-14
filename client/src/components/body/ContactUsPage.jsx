import React from "react";

const ContactUsPage = () => {
  return (
    <div className="container my-5" style={{ height: "80vh" }}>
      <h1 className="text-center mb-4">Contact Us</h1>
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="card shadow h-100">
            {" "}
            {/* Adding h-100 class to make the card fill the parent's height */}
            <div className="card-body">
              <p>Have a question or feedback? We'd love to hear from you!</p>
              <p>
                Feel free to reach out to us using the contact information
                below:
              </p>
              <ul>
                <li>Email: info@udemylearning.com</li>
                <li>Phone: 1-800-123-4567</li>
                <li>Address: 123 Main Street, Anytown, USA</li>
              </ul>
              <p>
                Alternatively, you can fill out the form below, and we'll get
                back to you as soon as possible:
              </p>
              {/* Add your contact form here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
