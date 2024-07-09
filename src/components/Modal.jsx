import React from "react";
import "../styles/Modal.css";

const Modal = ({ card, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <img src={card.thumbnail.large} alt={card.title} />
        <h2>{card.title}</h2>
        <p>{card.content}</p>
        <div className="modal-footer-left">
          {card.author?.avatar && (
            <img
              style={{ height: "30px", width: "30px", borderRadius: "50%" }}
              src={card.author.avatar}
              alt={card.title}
            />
          )}
          <span>{card.author.name + " -"}</span>
          <span>{card.author.role}</span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
