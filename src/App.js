import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Modal from './components/Modal';
import './App.css';

const App = () => {
  const [cards, setCards] = useState([]);
  const [modalInfo, setModalInfo] = useState(null);


  useEffect(() => {
    fetch('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts')
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleCardClick = (card) => {
    setModalInfo(card);
  };

  const closeModal = () => {
    setModalInfo(null);
  };

  return (
    <div className="app">
    <div className="card-container">
      {cards.map(card => (
        <Card key={card.id} card={card} onClick={() => handleCardClick(card)} />
      ))}
    </div>

    {modalInfo && (
      <Modal card={modalInfo} onClose={closeModal} />
    )}
  </div>
  );
};

export default App;
