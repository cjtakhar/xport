import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/api/login', { email, password });

            if (response.data.success) {
                // Clear any existing error message
                setErrorMessage('');
                // Redirect to the /member page
                navigate('/member');
            } else {
                // Set error message from server response or default message
                setErrorMessage(response.data.message || 'Incorrect login information. Try again.');
            }
        } catch (error) {
            console.error(error);
            setErrorMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="login-container">
            <Link to="/xport" className="logo">xport</Link>
            <div className="left-container">
                <h1 className="lc-title">Tagline</h1>
                <h3 className="lc-subtitle">Subtitle</h3>
            </div>
            <div className="right-container">
                <div className="login-form">
                    <h1 className="login-title">Login</h1>
                    <div className="form-item">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-item">
                        <button
                            type="button"
                            className="submit-btn"
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                    </div>
                </div>
                <div>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                </div>
                <div className="signup-container">
                    <p>Don't have an account?</p>
                    <Link to="/signup" className="signup-link">Sign Up</Link>
                </div>
                
            </div>
        </div>
    );
};

export default Login;
