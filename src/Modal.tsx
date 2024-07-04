import React from 'react';
import './Modal.css'; // Create a CSS file to style the modal

interface ModalProps {
  show: boolean;
  onClose: () => void;
  text: string;
}

const segmentImages: { [key: string]: string[] } = {
  "50% off on Sound Bar": ["src/assets/images/soundbar.png"],
  "Iron Box/Neck Band FREE on Smart Phone": [
    "src/assets/images/ironbox.jpeg",
    "src/assets/images/neckband.png"
  ],
  "2 Burner FREE on Chimney/Refrigerator": ["src/assets/images/stove.jpeg"],
  "Idly Cooker/Pressure Cooker FREE on Stove": ["src/assets/images/cooker.jpeg", "src/assets/images/idly.jpeg"],
  "20% OFF on Washing Machine": ["src/assets/images/washing.webp"],
  "2000/- OFF on TV/Laptop": [
    "src/assets/images/tv.jpeg",
    "src/assets/images/laptop.webp"
  ],
  "1lt Instant Geyser @1/-": ["src/assets/images/geyser.jpeg"],
  "Free Watch worth 8000/- @1/-": ["src/assets/images/watch.png"],
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
