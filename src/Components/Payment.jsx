import React from 'react';
import { useLocation } from 'react-router-dom';
import './ShopNow.css';

function Payment() {
  const location = useLocation();
  const game = location.state?.game;
  const [selectedOption, setSelectedOption] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handlePayment = async () => {
    if (selectedOption) {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:8000/api/shop/payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: game?.price || '99.99',
            paymentMethod: selectedOption,
            gameName: game?.name
          })
        });
        const result = await response.json();
        alert(`Payment successful for ${game?.name || 'game'}! Transaction ID: ${result.transactionId}`);
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
