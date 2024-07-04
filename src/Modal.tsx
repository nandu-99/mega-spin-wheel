import React from 'react';
import './Modal.css'; // Create a CSS file to style the modal
import soundbox from "./assets/images/soundbar.png"
import ironbox from "./assets/images/ironbox.jpeg"
import neckband from "./assets/images/neckband.png"
import stove from "./assets/images/stove.jpeg"
import cooker from "./assets/images/cooker.jpeg"
import idly from "./assets/images/idly.jpeg"
import washing from "./assets/images/washing.webp"
import tv from "./assets/images/tv.jpeg"
import laptop from "./assets/images/laptop.webp"
import geyser from "./assets/images/geyser.jpeg"
import watch from "./assets/images/watch.png"


interface ModalProps {
  show: boolean;
  onClose: () => void;
  text: string;
}

const segmentImages: { [key: string]: string[] } = {
  "50% off on Sound Bar": [soundbox],
  "Iron Box/Neck Band FREE on Smart Phone": [
    ironbox,
    neckband
  ],
  "2 Burner FREE on Chimney/Refrigerator": [stove],
  "Idly Cooker/Pressure Cooker FREE on Stove": [cooker,idly],
  "20% OFF on Washing Machine": [washing],
  "2000/- OFF on TV/Laptop": [
    tv,
    laptop
  ],
  "1lt Instant Geyser @1/-": [geyser],
  "Free Watch worth 8000/- @1/-": [watch],
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
