import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ShopNow.css';

function ShopNow() {
  const location = useLocation();
  const navigate = useNavigate();
  const game = location.state?.game;

  const handleBuy = () => {
    navigate('/payment', { state: { game } });
  };

  if (!game) {
    return (
      <div className="shop-container">
        <h2 className="shop-title">No Game Selected</h2>
        <button onClick={() => navigate('/')}>Go back to Home</button>
      </div>
    );
  }

  return (
    <div className="shop-container">
      <h1 className="shop-title">Game Details</h1>
      
      <div className="game-details">
        <div className="game-image">
          <img 
            src={game.image} 
            alt={game.name}
            onError={(e) => {
              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkdhbWUgSW1hZ2U8L3RleHQ+PC9zdmc+';
            }}
          />
        </div>
        
        <div className="game-info">
          <h2>{game.name}</h2>
          <p className="game-description">
            Experience the ultimate gaming adventure with stunning graphics and immersive gameplay.
          </p>
          
          <div className="game-meta">
            <div className="meta-item">
              <span className="label">Discount:</span>
              <span className="value">{game.discount}</span>
            </div>
            <div className="meta-item">
              <span className="label">Price:</span>
              <span className="price">{game.price}</span>
            </div>
          </div>
          
          <button className="buy-button" onClick={handleBuy}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopNow;