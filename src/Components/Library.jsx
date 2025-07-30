import React from 'react';
import './ShopNow.css';

function Library() {
  const purchasedGames = JSON.parse(localStorage.getItem('purchasedGames')) || [];

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
            <div key={game.id} className="library-item">
              <img 
                src={game.image || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkdhbWUgSW1hZ2U8L3RleHQ+PC9zdmc='} 
                alt={game.name}
              />
              <h3>{game.name}</h3>
              <p>Purchased: {game.date} at {game.time}</p>
              <p style={{ color: '#00ffcc', fontWeight: 'bold' }}>{game.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Library;