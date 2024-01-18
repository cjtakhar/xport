import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import '../styles/login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    const handleLogin = async () => {
        try {
            const response = await axios.post('/api/login', { email, password });
            // Handle the response from the server
            console.log(response.data);

            // Check if the login was successful (you can customize this check based on your server response)
            if (response.data.success) {
                // Redirect to the /member page if login was successful
                navigate('/member');
            } else {
                // Handle unsuccessful login (e.g., show an error message)
                console.error('Login unsuccessful');
            }
        } catch (error) {
            // Handle errors
            console.error(error);
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
                <div className="signup-container">
                    <p>Don't have an account?</p>
                    <Link to="/signup" className="signup-link">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
