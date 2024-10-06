import './About.css';
import React from 'react';

export default function About() {
  return (
    <>
      <div className="overall">
        <div className="container1">
          <h1>About Us</h1>
          <p>
            Praneesha's software development service focuses on delivering high-quality software solutions that are tailored to clients' specific requirements. The company has a team of skilled developers who are proficient in a wide range of programming languages and technologies.
          </p>
        </div>
        <div className="container1">
          <h1>Company Profile</h1>
          <p>
            Praneesha is a software company that offers a wide range of services, including software consulting, software development, and software building and maintenance services.
          </p>
        </div>
        <div className="container1">
          <h1>Mission</h1>
          <p>
            We are on a mission to become a partner of choice for our clients who require end-to-end software solutions. We are striving to empower businesses to achieve their full potential in an ever-evolving digital landscape.
          </p>
        </div>
        <div className="container1">
          <h1>Vision</h1>
          <p>
            Our vision at Praneesha is to be a global leader in software consulting, development, and maintenance services, recognized for our innovative solutions, exceptional quality, and unwavering commitment to client satisfaction.
          </p>
        </div>
      </div>

      <h1>Our Clients</h1>
      <div className="container">
        <div className="row">

          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <a href="https://jellyspace.org/" target='_blank' rel="noopener noreferrer">
                <img src={`${process.env.PUBLIC_URL}/Clients/jelly.jpeg`} className="card-img-top" alt="" style={{ width: '285px', height: '200px' }} />
              </a>
              <a href="https://jellyspace.org/" target='_blank' rel="noopener noreferrer">
                <h5 className="card-title">
                   <b><span className="custom-underline">Jelly Space</span></b>
                  </h5>
              </a>
              <div className="card-body">
                <p className="card-text">
                  JELLYSPACE understands the complexity of security and discretion required in the Space and Aerospace industry for Intellectual Property (IP) management, whether it be your designs, catalogues, or even conversations.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <a href="https://www.spetrol.in/" target='_blank' rel="noopener noreferrer">
                <img src={`${process.env.PUBLIC_URL}/Clients/Spetrol.jpeg`} className="card-img-top" alt="" style={{ width: '285px', height: '200px' }} />
              </a>
              <a href="https://www.spetrol.in/" target='_blank' rel="noopener noreferrer">
                <h5 className="card-title">
                <b><span className="custom-underline">Spetrol</span></b>
                  </h5>
              </a>
              <div className="card-body">
                <p className="card-text">
                  We deliver diesel in tankers equipped with IoT and tamper-proof electronic locks, protected by cutting-edge geo-fencing technology. Our diesel tankers meet all safety standards as well as statutory approvals, licenses, and requirements from PESO.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <a href="https://devireddylaw.in/" target='_blank' rel="noopener noreferrer">
                <img src={`${process.env.PUBLIC_URL}/Clients/DeviReddy.png`} className="card-img-top" alt="" style={{ width: '285px', height: '200px' }} />
              </a>
              <a href="https://devireddylaw.in/" target='_blank' rel="noopener noreferrer">
                <h5 className="card-title">
                  <b><span className="custom-underline">Devi Reddy Law</span></b>
                </h5>
              </a>
              <div className="card-body">
                <p className="card-text">
                  Our firm is dedicated to delivering top-tier legal services, safeguarding your rights and interests with integrity and expertise. We strive to achieve the best possible outcomes for every client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
