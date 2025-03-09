import React from 'react';
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa'; 
import '../App.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <p><strong>Contact Information</strong></p>
            <p>Email: <a href="mailto:martinskaarer91@gmail.com" className="text-white">martinskaarer91@gmail.com</a></p>
            <p>Phone: <a href="tel:+4797782012" className="text-white">+47 977 82 012</a></p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <p>Follow Me</p>
            <div>
              <a href="https://github.com/martinsk91" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <FaGithub size={30} />
              </a>
              <a href="https://www.facebook.com/martinsk91" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <FaFacebook size={30} />
              </a>
              <a href="https://www.instagram.com/martinsk91" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <p>&copy; {new Date().getFullYear()} Martin Skaarer. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;