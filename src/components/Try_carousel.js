import React, { useEffect } from 'react';
import './Carousel.css'; 

export default function Carousel() {
  useEffect(() => {
    const carousel = new window.bootstrap.Carousel(document.getElementById('carouselExample'), {
      interval: 1300,
      wrap: true
    });
    
    carousel.cycle(); 
  }, []);
  
  return (
    <div className="carousel-container">
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={`${process.env.PUBLIC_URL}/praneesha_carousel/3.jpg`} className="d-block w-100 carousel-image" alt="None" />
          </div>
          <div className="carousel-item">
            <img src={`${process.env.PUBLIC_URL}/praneesha_carousel/1.jpg`} className="d-block w-100 carousel-image" alt="None" />
          </div>
          <div className="carousel-item">
            <img src={`${process.env.PUBLIC_URL}/praneesha_carousel/2.jpg`} className="d-block w-100 carousel-image" alt="None" />
          </div>
          <div className="carousel-item">
            <img src={`${process.env.PUBLIC_URL}/praneesha_carousel/4.jpg`} className="d-block w-100 carousel-image" alt="None" />
          </div>
          <div className="carousel-item">
            <img src={`${process.env.PUBLIC_URL}/praneesha_carousel/5.jpg`} className="d-block w-100 carousel-image" alt="None" />
          </div>
          {/* <div className="carousel-item">
            <img src={`${process.env.PUBLIC_URL}/praneesha_carousel/6.jpg`} className="d-block w-100 carousel-image" alt="None" />
          </div> */}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
