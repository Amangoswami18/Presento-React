import React from 'react';
import eCommerce from '../assets/E-Commerce.jpg';
import business from '../assets/Business.jpg';
import portfolio from '../assets/Portfolio.jpg';

class Portfolio extends React.Component {
  render() {
    return (
      <div className="container py-5 mt-5">
        <h1 className="text-center mb-5 fw-bold text-uppercase" style={{ letterSpacing: '2px' }}>
          Our Portfolio
        </h1>
        <div className="row g-4">

          
          {/* Myyyyy Card 1 */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-lg hover-shadow transition">
              <img src={business} className="card-img-top rounded-top" alt="Project 2" />
              <div className="card-body">
                <h5 className="card-title fw-semibold">Business Website</h5>
                <p className="card-text text-muted">
                  Professional website for consulting business with contact form.
                </p>
              </div>
              <div className="card-footer bg-white border-0 text-end">
                <button className="btn btn-outline-success btn-sm">View Project</button>
              </div>
            </div>
          </div>

          {/*  Myyyyy Card 2 */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-lg hover-shadow transition">
              <img src={eCommerce} className="card-img-top rounded-top" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title fw-semibold">E-Commerce Website</h5>
                <p className="card-text text-muted">
                  Online shopping store with payment gateway integration.
                </p>
              </div>
              <div className="card-footer bg-white border-0 text-end">
                <button className="btn btn-outline-primary btn-sm">View Project</button>
              </div>
            </div>
          </div>

          {/* Myyyyy Card 3 */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-lg hover-shadow transition">
              <img src={portfolio} className="card-img-top rounded-top" alt="Project 3" />
              <div className="card-body">
                <h5 className="card-title fw-semibold">Portfolio Site</h5>
                <p className="card-text text-muted">
                  Personal portfolio website for a designer or developer.
                </p>
              </div>
              <div className="card-footer bg-white border-0 text-end">
                <button className="btn btn-outline-dark btn-sm">View Project</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Portfolio;
