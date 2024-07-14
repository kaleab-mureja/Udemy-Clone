import React, { useState } from "react";
// import axios from "axios";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post("/signup", formData);
      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="signUp-container container">
      <br />
      <div className="card card-container p-2 bg-light">
        <br />
        <div className="card-title pd-2 ">
          <h2>Log in and start learning</h2>
        </div>
        <div className="card-body">
          <div className="card-text">
            <form className="p-lg-4 p-md-3 p-sm-2" onSubmit={handleSubmit}>
              <div className="form-floating">
                <input
                  className="form-control form-control-sm"
                  type="text"
                  id="username"
                  placeholder="enter your name"
                  required
                  value={formData.username}
                  onChange={handleChange}
                />
                <label htmlFor="username">Full name</label>
              </div>
              <br />
              <div className="form-floating">
                <input
                  className="form-control form-control-sm"
                  type="email"
                  id="email"
                  placeholder="enter email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
              </div>
              <br />
              <div className="form-floating">
                <input
                  className="form-control form-control-sm"
                  type="password"
                  id="password"
                  placeholder="enter password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
              </div>
              <br />
              <button className="signUp-btn btn ">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
