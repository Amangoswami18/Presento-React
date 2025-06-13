import React from 'react';
import { Link } from 'react-router-dom';
import homeImg from '../assets/Home-img.avif'; 

class Home extends React.Component {
  render() {
    return (
      <section
        className="d-flex align-items-center"
        style={{
          height: '100vh',
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.2)), url(${homeImg})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* MY LEFT CONTENT */}
            <div className="col-lg-7 text-lg-start text-center">
              <h1 className="display-3 fw-bold text-shadow mb-4">
                Better Digital <br /> Experience with <span className="text-danger">Presento</span>
              </h1>
              <p className="lead text-white-50 mb-4">
                We are a team of creative designers and developers building impactful websites using Bootstrap.
              </p>
              <div className="d-flex justify-content-lg-start justify-content-center gap-3">
                <Link to="/about" className="btn btn-danger btn-lg shadow">
                  Get Started
                </Link>
                <a
                  href="#video"
                  className="btn btn-outline-light btn-lg shadow"
                  style={{ borderWidth: '2px' }}
                >
                  <i className="bi bi-play-circle me-2"></i> Watch Video
                </a>
              </div>
            </div>

            <div className="col-lg-5 d-none d-lg-block"></div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
