import '../styles/home.css';
import GameTime from './gametime.jsx';

const Home = () => {
  return (
    <div>
      <div>
        <GameTime />  
        <div className="home-title">
          <h1>xp</h1>
          <p>sports</p>
        </div>
      </div>
      <div className="home-container">
        <div className="container-main">
          <div className="component-item">
            <h2>title</h2>
            <img className="img" src="" alt="" />
            <p>description</p>
          </div>
          <div className="component-item">
            <h2>title</h2>
            <img className="img" src="" alt="" />
            <p>description</p>
          </div>
          <div className="component-item">
            <h2>title</h2>
            <img className="img" src="" alt="" />
            <p>description</p>
          </div>
        </div>
        <div className="container-main">
          <div className="component-item">
            <h2>title</h2>
            <img className="img" src="" alt="" />
            <p>description</p>
          </div>
          <div className="component-item">
            <h2>title</h2>
            <img className="img" src="" alt="" />
            <p>description</p>
          </div>
          <div className="component-item">
            <h2>title</h2>
            <img className="img" src="" alt="" />
            <p>description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;