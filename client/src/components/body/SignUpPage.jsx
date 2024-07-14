import React from "react";

const SignUpPage = () => {
  return (
    <div className="signUp-container container">
      <br />
      <div className="card card-container p-2 bg-light">
        <br />
        <div className="card-title pd-2 ">
          <h2>Sign Up and start learning</h2>
        </div>
        <div className="card-body">
          <div className="card-text">
            <form className="p-lg-4 p-md-3 p-sm-2">
              <div className="form-floating">
                <input
                  class="form-control form-control-sm"
                  type="text"
                  id="username"
                  placeholder="enter your name"
                  required
                />
                <label for="username">Full name</label>
              </div>
              <br />
              <div className="form-floating">
                <input
                  class="form-control form-control-sm "
                  type="email"
                  id="email"
                  placeholder="enter email"
                  required
                />
                <label for="email">Email</label>
              </div>
              <br />
              <div className="form-floating">
                <input
                  class="form-control form-control-sm"
                  type="password"
                  id="password"
                  placeholder="enter password"
                  required
                />
                <label for="password">Password</label>
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

export default SignUpPage;
