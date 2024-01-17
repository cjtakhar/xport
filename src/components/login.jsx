import { Link } from 'react-router-dom';
import '../styles/login.css';

const Login = () => {
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
                    <form>
                        <div className="form-item">
                            <label htmlFor="email"></label>
                            <input type="text" name="email" id="email" />
                        </div>
                        <div className="form-item">
                            <label htmlFor="password"></label>
                            <input type="password" name="password" id="password" />
                        </div>
                        <div className="form-item">
                            <button type="submit">Login</button>
                        </div>
                    </form>
                    <div className="signup-container">
                        <p>Don't have an account?</p>
                        <Link to="/signup" className="signup-link">Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;