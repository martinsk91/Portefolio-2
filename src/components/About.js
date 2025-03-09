import React from 'react';
import profileImg from "../images/profile.jpg"

const About = () => {
  return (
    <section id="about" className="pt-5 my-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Profile Image */}
          <div className="col-md-4 d-flex justify-content-center mb-4 mb-md-0">
            <img
              src= {profileImg}
              alt="Profile"
              className="img-fluid rounded-circle"
              style={{ maxWidth: '300px' }}
            />
          </div>

          {/* Profile Info */}
          <div className="col-md-8">
            <div className="bg-dark text-white rounded-3 p-4">
              <h1 className="text-center">Martin Skaarer</h1>
              <p>
                Hi there! I'm Martin Skaarer, a passionate front-end development
                student with a keen interest in building delightful and
                user-friendly web experiences. Currently, I'm exploring the
                exciting world of web development, honing my skills in HTML, CSS,
                and JavaScript.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
