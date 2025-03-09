import React from 'react';

const ContactInfo = () => {
  return (
    <section id="contact" className="container">
   
      <h2 className="text-center mb-5">Contact Information</h2>
      <div className="row">
        <div className="col-12 d-flex justify-content-center flex-column align-items-center">
          <p><span className='fw-bold'>Name:</span> Martin Skaarer</p>
          <p><span className='fw-bold'>Email:</span> <a href="mailto:martinskaarer91@gmail.com">martinskaarer91@gmail.com</a></p>
          <p><span className='fw-bold'>Phone:</span> <a href="tel:+4797782012">+47 977 82 012</a></p>
        </div>
      </div>

    </section>
  );
};

export default ContactInfo;
