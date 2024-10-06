import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer bg-dark text-light text-center p-4" id = "footer-section">
      <h5>GET IN TOUCH</h5>
      <div className="contact-info">
        <p>
          <FaPhone style={{ color: '#4CAF50' }} /> (+91) 9030 9996 91
        </p>
        <p>
          <FaEnvelope style={{ color: '#007BFF' }} /> <a href="mailto:hello@praneesha.com">hello@praneesha.com</a>
        </p>
        <p>
          <FaMapMarkerAlt style={{ color: '#2196F3' }} /> 1-1-18/90, Karuna Arcade, TRT no.33/34, Jawahar Nagar, Chikkadpally, Hyderabad, Telangana 500020
        </p>
      </div>
      <div className="social-icons">
        <a href="https://wa.me/919030999691" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={24} style={{ margin: '0 10px', color: '#25D366' }} />
        </a>
        <a href="https://www.linkedin.com/company/praneesha-infotech/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} style={{ margin: '0 10px', color: '#0077B5' }} />
        </a>
        <a href="mailto:hello@praneesha.com">
          <FaEnvelope size={24} style={{ margin: '0 10px', color: '#007BFF' }} />
        </a>
      </div>
    </footer>
  );
}
