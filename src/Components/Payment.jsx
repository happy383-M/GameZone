import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { gameAPI } from '../services/api';
import './ShopNow.css';

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const game = location.state?.game;
  const [selectedOption, setSelectedOption] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handlePayment = async () => {
    if (selectedOption && game) {
      setLoading(true);
      try {
        const response = await gameAPI.purchaseGame(game._id);
        if (response.data.success) {
          alert(`Payment successful for ${game.name}!`);
          navigate('/library');
        }
      } catch (error) {
        console.error('Payment error:', error);
        alert('Payment failed. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please select a payment option.');
    }
  };

  return (
    <div className="shop-container">
      <h1 className="shop-title">Complete Your Purchase</h1>
      
      <div className="payment-container">
        {game && (
          <div className="game-summary">
            <img src={game.image} alt={game.name} />
            <h3>{game.name}</h3>
            <div className="price">{game.price}</div>
          </div>
        )}
        
        <div className="payment-form">
          <h3 style={{ color: '#00ffcc', marginBottom: '20px' }}>Select Payment Method</h3>
          
          <label className="payment-option">
            <input
              type="radio"
              value="Credit Card"
              checked={selectedOption === 'Credit Card'}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <span>Credit Card</span>
          </label>
          
          <label className="payment-option">
            <input
              type="radio"
              value="UPI"
              checked={selectedOption === 'UPI'}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <span>UPI</span>
          </label>
          
          <label className="payment-option">
            <input
              type="radio"
              value="Cash on Delivery"
              checked={selectedOption === 'Cash on Delivery'}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <span>Cash on Delivery</span>
          </label>
          
          <button 
            className="pay-button"
            onClick={handlePayment} 
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Proceed to Pay'}
          </button>
        </div>
      </div>
    </div>
  );
}


export default Payment;
