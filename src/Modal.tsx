import React from 'react';
import './Modal.css'; // Create a CSS file to style the modal

interface ModalProps {
  show: boolean;
  onClose: () => void;
  text: string;
}

const segmentImages: { [key: string]: string[] } = {
  "50% off on Sound Bar": ["soundbar.png"],
  "Iron Box/Neck Band FREE on Smart Phone": [
    "ironbox.jpeg",
    "neckband.png"
  ],
  "2 Burner FREE on Chimney/Refrigerator": ["stove.jpeg"],
  "Idly Cooker/Pressure Cooker FREE on Stove": ["cooker.jpeg", "idly.jpeg"],
  "20% OFF on Washing Machine": ["washing.webp"],
  "2000/- OFF on TV/Laptop": [
    "tv.jpeg",
    "laptop.webp"
  ],
  "1lt Instant Geyser @1/-": ["geyser.jpeg"],
  "Free Watch worth 8000/- @1/-": ["watch.png"],
};

const Modal: React.FC<ModalProps> = ({ show, onClose, text }) => {
  if (!show) {
    return null;
  }

  const imageUrls = segmentImages[text] 

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <p>{text}</p>
        <div className="image-container">
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`${text} ${index + 1}`} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
