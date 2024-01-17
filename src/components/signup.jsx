import { Link } from "react-router-dom";
import "../styles/signup.css";

const Signup = () => {
  return (
    <div className="container-su">
        <div>
        <Link to="/xport" className="signup-logo">xport</Link>
        </div>
      <div className="create-account-container">
        <div className="create-account-form-container">
          <h1 className="create-account-title">Join xport</h1>
          <h2 className="create-account-subtitle">Enter info</h2>
          <form className="ca-form">
            <div className="email-div">
              <input className="email-input" type="text" name="email" id="email" />
              <label className="email-label" htmlFor="email">Email</label>
            </div>
            <div className="pw-div">
              <input className="pw-input" type="password" name="password" id="password" />
              <label className="pw-label" htmlFor="password">Password</label>
            </div>
            <div className="btn-div">
              <button className="su-btn" type="submit">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
