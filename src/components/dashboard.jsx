import '../styles/dashboard.css';
import './navbar.jsx';
import Navbar from './navbar.jsx';
import Home from './home.jsx';

const Dashboard = () => {
    return (
        <div className="container">
            <div>
                < Navbar />
            </div>
            <div>
                < Home />
            </div>
        </div>
    );
}

export default Dashboard;