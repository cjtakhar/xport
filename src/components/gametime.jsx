import { Link } from 'react-router-dom';
import '../styles/gametime.css';

const GameTime = () => {
  return (
    <div>
        <div className="game-container">
          <div className="game">
            <Link to="/" className="game-link">
            <p>TENN vs CONN</p>
            </Link>
          </div>
          <div className="game">
          <Link to="/" className="game-link">
            <p>SPARKS vs SKY</p>
            </Link>
          </div>
          <div className="game">
          <Link to="/" className="game-link">
            <p>ANGEL FC vs WAVE</p>
            </Link>
          </div>
          <div className="game">
          <Link to="/" className="game-link">
            <p>LSU vs ZAGA</p>
            </Link>
          </div>
          <div className="game">
          <Link to="/" className="game-link">
            <p>SEATTLE vs NYC</p>
            </Link>
          </div>
          <div className="game">
          <Link to="/" className="game-link">
            <p>UCLA vs USC</p>
            </Link>
          </div>
          <div className="game">
          <Link to="/" className="game-link">
            <p>ORE vs STAN</p>
            </Link>
          </div>
          <div className="game">
          <Link to="/" className="game-link">
            <p>MYSTICS vs MERCURY</p>
            </Link>
          </div>
        </div>
    </div>
  );
};

export default GameTime;
