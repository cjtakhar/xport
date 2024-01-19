import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import axios from "axios";
import "../styles/signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleSignup = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios.post("http://localhost:5000/api/signup", { email, password });
      console.log(response.data);

      if (response.data.success) {
        navigate("/login");
      } else {
        console.error("Signup unsuccessful");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-su">
      <div>
        <Link to="/xport" className="signup-logo">
          xport
        </Link>
      </div>
      <div className="create-account-container">
        <div className="create-account-form-container">
          <h1 className="create-account-title">Join xport</h1>
          <h2 className="create-account-subtitle">Enter info</h2>
          <form className="ca-form" onSubmit={handleSignup}>
            <div className="email-div">
              <input
                className="email-input"
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="email-label" htmlFor="email">
                Email
              </label>
            </div>
            <div className="pw-div">
              <input
                className="pw-input"
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="pw-label" htmlFor="password">
                Password
              </label>
            </div>
            <div className="btn-div">
              <button className="su-btn" type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
