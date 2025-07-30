import React, { useState, useEffect } from 'react';
import { gameAPI } from '../services/api';
import './ShopNow.css';

function Library() {
  const [purchasedGames, setPurchasedGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPurchases();
  }, []);

  const fetchPurchases = async () => {
    try {
      const response = await gameAPI.getPurchases();
      if (response.data.success) {
        setPurchasedGames(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching purchases:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="shop-container">
        <h1 className="shop-title">My Game Library</h1>
        <div style={{ textAlign: 'center', padding: '3rem', color: '#ccc' }}>
          <p>Loading your games...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="shop-container">
      <h1 className="shop-title">My Game Library</h1>
      
      {purchasedGames.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem', color: '#ccc' }}>
          <h3>No games purchased yet</h3>
          <p>Purchase games to see them in your library!</p>
        </div>
      ) : (
        <div className="library-grid">
          {purchasedGames.map(game => (
            <div key={game._id} className="library-item">
              <img 
                src={game.gameImage || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkdhbWUgSW1hZ2U8L3RleHQ+PC9zdmc='} 
                alt={game.gameName}
              />
              <h3>{game.gameName}</h3>
              <p>Purchased: {new Date(game.purchaseDate).toLocaleDateString()}</p>
              <p style={{ color: '#00ffcc', fontWeight: 'bold' }}>{game.gamePrice}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Library;