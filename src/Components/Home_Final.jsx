import React, { useState } from 'react';  
import './Home.css';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleShopNow = (gameId) => {
    window.open(window.location.origin + '/shopnow?gameId=' + gameId, '_blank', 'width=1200,height=800');
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAbout = () => {
    window.open(window.location.origin + '/about', '_blank');
    setIsMenuOpen(false);
  };

  const handleLibrary = () => {
    window.open(window.location.origin + '/library', '_blank');
    setIsMenuOpen(false);
  };

  const handleContact = () => {
    window.open(window.location.origin + '/contact', '_blank');
    setIsMenuOpen(false);
  };

  const handleEmail = () => {
    window.location.href = 'mailto:support@gamezone.com';
    setIsMenuOpen(false);
  };

  const handleIssues = () => {
    window.open(window.location.origin + '/issues', '_blank');
    setIsMenuOpen(false);
  };

  return (
    <div>
      <header className="gaming-header">
        <div className="gaming-logo">GameZone</div>
        <div className="gaming-search">
          <input type="text" placeholder="Search games, consoles..." />
          <button>🔍</button>
        </div>
        <button className="hamburger" onClick={handleMenuToggle}>
          ☰
        </button>
        {isMenuOpen && (
          <div className="hamburger-menu">
            <button onClick={handleAbout}>About</button>
            <button onClick={handleLibrary}>Library</button>
            <button onClick={handleContact}>Contact</button>
            <button onClick={handleEmail}>Email Support</button>
            <button onClick={handleIssues}>Report Issues</button>
          </div>
        )}
      </header>

      <div className="parent">
        <div className="child">
          <img 
            src="https://cdn.corenexis.com/media?4hu6u0&168H&p&b&nrth.jpg" 
            alt="Minecraft Java & Bedrock Edition Bundle"
            onError={(e) => {e.target.src = 'https://via.placeholder.com/200x120?text=Game+Image'}}
            loading="lazy"
          />
          <p>
            Minecraft Java & Bedrock Edition Bundle<br />
            <strong>40-80% OFF</strong><br />
            <button onClick={() => handleShopNow(1)}> Shop Now </button>
          </p>
        </div>
        <div className="child">
          <img 
            src="https://cdn.corenexis.com/media?gl3hqq&168H&p&b&d5mw.jpg" 
            alt="Demon Slayer Kimetsu no Yaiba"
            onError={(e) => {e.target.src = 'https://via.placeholder.com/200x120?text=Game+Image'}}
            loading="lazy"
          />
          <p>
            Demon Slayer Kimetsu no Yaiba<br />
            <strong>50-70% OFF</strong><br />
            <button onClick={() => handleShopNow(2)}> Shop Now </button>
          </p>
        </div>
        <div className="child">
          <img 
            src="https://cdn.corenexis.com/media?5zzyai&168H&p&b&wsva.jpg" 
            alt="Forza Horizon 4"
            onError={(e) => {e.target.src = 'https://via.placeholder.com/200x120?text=Game+Image'}}
            loading="lazy"
          />
          <p>
            Forza Horizon 4<br />
            <strong>50-70% OFF</strong><br />
            <button onClick={() => handleShopNow(3)}> Shop Now </button>
          </p>
        </div>
        <div className="child">
          <img 
            src="https://cdn.corenexis.com/media?5d8yen&168H&p&b&1jg3.jpg" 
            alt="GTA 5 Pc Game DVD"
            onError={(e) => {e.target.src = 'https://via.placeholder.com/200x120?text=Game+Image'}}
            loading="lazy"
          />
          <p>
            GTA 5 Pc Game DVD<br />
            <strong>UP TO 70% OFF</strong><br />
            <button onClick={() => handleShopNow(4)}> Shop Now </button>
          </p>
        </div>
        <div className="child">
          <img 
            src="https://cdn.corenexis.com/media?o423b7&168H&p&b&q94c.jpg" 
            alt="Assassins Creed Valhalla"
            onError={(e) => {e.target.src = 'https://via.placeholder.com/200x120?text=Game+Image'}}
            loading="lazy"
          />
          <p>
            Assassins Creed Valhalla<br />
            <strong>30-70% OFF</strong><br />
            <button onClick={() => handleShopNow(5)}> Shop Now </button>
          </p>
        </div>
        <div className="child">
          <img 
            src="https://cdn.corenexis.com/media?gkfd5i&168H&p&b&k9dm.jpg" 
            alt="Playerunknown's Battlegrounds"
            onError={(e) => {e.target.src = 'https://via.placeholder.com/200x120?text=Game+Image'}}
            loading="lazy"
          />
          <p>
            Playerunknown's Battlegrounds<br />
            <strong>UP TO 80% OFF</strong><br />
            <button onClick={() => handleShopNow(6)}> Shop Now </button>
          </p>
        </div>
        <div className="child">
          <img 
            src="https://cdn.corenexis.com/media?yupvd4&168H&p&b&eqga.jpg" 
            alt="Ghost of Yotei"
            onError={(e) => {e.target.src = 'https://via.placeholder.com/200x120?text=Game+Image'}}
            loading="lazy"
          />
          <p>
            Ghost of Yotei<br />
            <strong>40-70% OFF</strong><br />
            <button onClick={() => handleShopNow(7)}> Shop Now </button>
          </p>
        </div>
        <div className="child">
          <img 
            src="https://cdn.corenexis.com/media?nqoadh&168H&p&b&fdh1.jpg" 
            alt="Marvel's Spider-Man 2 PS5"
            onError={(e) => {e.target.src = 'https://via.placeholder.com/200x120?text=Game+Image'}}
            loading="lazy"
          />
          <p>
            Marvel's Spider-Man 2 PS5<br />
            <strong>40-80% OFF</strong><br />
            <button onClick={() => handleShopNow(8)}> Shop Now </button>
          </p>
        </div>
        <div className="child">
          <img 
            src="https://cdn.corenexis.com/media?ibjfi8&168H&p&b&1zcr.jpg" 
            alt="God of War Ragnarok"
            onError={(e) => {e.target.src = 'https://via.placeholder.com/200x120?text=Game+Image'}}
            loading="lazy"
          />
          <p>
            God of War Ragnarok<br />
            <strong>40-80% OFF</strong><br />
            <button onClick={() => handleShopNow(9)}> Shop Now </button>
          </p>
        </div>
        <div className="child">
          <img 
            src="https://cdn.corenexis.com/media?c4qqdq&168H&p&b&rzlg.jpg" 
            alt="Call of Duty Vanguard"
            onError={(e) => {e.target.src = 'https://via.placeholder.com/200x120?text=Game+Image'}}
            loading="lazy"
          />
          <p>
            Call of Duty Vanguard<br />
            <strong>UP TO 70% OFF</strong><br />
            <button onClick={() => handleShopNow(10)}> Shop Now </button>
          </p>
        </div>
        <div className="child">
          <img 
            src="https://cdn.corenexis.com/media?wf7dbd&168H&p&b&e7x7.jpg" 
            alt="Batman: Arkham Knight"
            onError={(e) => {e.target.src = 'https://via.placeholder.com/200x120?text=Game+Image'}}
            loading="lazy"
          />
          <p>
            Batman: Arkham Knight<br />
            <strong>UP TO 80% OFF</strong><br />
            <button onClick={() => handleShopNow(11)}> Shop Now </button>
          </p>
        </div>
        <div className="child">
          <img 
            src="https://cdn.corenexis.com/media?82180h&168H&p&b&m5ha.jpg" 
            alt="Ea Sports Fc 24 Standard Origin Pc"
            onError={(e) => {e.target.src = 'https://via.placeholder.com/200x120?text=Game+Image'}}
            loading="lazy"
          />
          <p>
            Ea Sports Fc 24 Standard Origin Pc<br />
            <strong>40-70% OFF</strong><br />
            <button onClick={() => handleShopNow(12)}> Shop Now </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;