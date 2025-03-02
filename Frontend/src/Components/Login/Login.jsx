import React, { useState } from "react";
import "./Login.css";

const Login = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="login">
      <form className="login-container">
        <div className="login-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src="src/assets/cross_icon.png"
            alt="Close"
          />
        </div>
        <div className="login-form">
          {currState === "Sign Up" && <input type="text" placeholder="Your Name" required />}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button type="submit">{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use and privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click Here!</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Sign in</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
