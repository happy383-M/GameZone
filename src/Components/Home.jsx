import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const fallbackImage = 'https://via.placeholder.com/150';

const games = [
  {
    name: 'Minecraft Java & Bedrock Edition Bundle',
    price: 2999,
    discount: '20%',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg',
  },
  {
    name: 'Demon Slayer: Kimetsu no Yaiba – The Hinokami Chronicles',
    price: 3499,
    discount: '10%',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1490890/header.jpg',
  },
  {
    name: 'Forza Horizon 4',
    price: 4299,
    discount: '30%',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1293830/header.jpg',
  },
  {
    name: 'GTA 5 PC Game DVD',
    price: 1899,
    discount: '15%',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg',
  },
  {
    name: "Assassin's Creed Valhalla",
    price: 3999,
    discount: '25%',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/header.jpg',
  },
  {
    name: 'PUBG: Battlegrounds',
    price: 999,
    discount: '40%',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg',
  },
  {
    name: 'Ghost of Tsushima',
    price: 4799,
    discount: '10%',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2215430/header.jpg',
  },
  {
    name: 'God of War Ragnarok',
    price: 4999,
    discount: '10%',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2322010/header.jpg',
  },
  {
    name: 'Call of Duty: Vanguard',
    price: 4599,
    discount: '20%',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/header.jpg',
  },
  {
    name: 'Batman: Arkham Knight',
    price: 1499,
    discount: '35%',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/208650/header.jpg',
  },
  {
    name: 'EA Sports FC 24',
    price: 3999,
    discount: '10%',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2195250/header.jpg',
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleShopNow = (game) => navigate('/shopnow', { state: { game } });
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleMenuClick = (option) => {
    setIsMenuOpen(false);
    if (option === 'About') navigate('/about');
    if (option === 'Library') navigate('/library');
    if (option === 'Report Issues') navigate('/issues');
  };

  return (
    <div>
      <header className="gaming-header">
        <div className="hamburger-menu">
          <button className="hamburger-btn" onClick={toggleMenu}>
            ☰
          </button>
          {isMenuOpen && (
            <div className="menu-dropdown">
              <div className="menu-item" onClick={() => handleMenuClick('About')}>About</div>
              <div className="menu-item" onClick={() => handleMenuClick('Library')}>Library</div>
              <div className="menu-item" onClick={() => handleMenuClick('Report Issues')}>Report Issues</div>
            </div>
          )}
        </div>
        <div className="gaming-logo">GameZone</div>
        <div className="gaming-search">
          <input type="text" placeholder="Search games..." />
          <button>🔍</button>
        </div>
      </header>
      <div className="parent">
        {games.map((game, idx) => (
          <div className="child" key={idx}>
            <img
              src={game.image}
              alt={game.name}
              onError={(e) => {
                e.target.src = fallbackImage;
                e.target.onerror = null;
              }}
              loading="lazy"
            />
            <p><strong>{game.name}</strong></p>
            <p>Price: ₹{game.price}</p>
            <p>Discount: {game.discount}</p>
            <button onClick={() => handleShopNow(game)}>Shop Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

