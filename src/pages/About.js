import React, { Component } from 'react';
import { FaBriefcase, FaGem, FaBroadcastTower, FaDesktop } from 'react-icons/fa';

class About extends Component {
  render() {
    return (
      <section
        className="py-5"
        style={{
          background: 'linear-gradient(to right, #1f1c2c, #928dab)',
          minHeight: '110vh',
          color: 'white',
        }}
      >
        <div className="container">
          {/* TITLE */}
          <div className="text-center mb-5">
            <h2 className="fw-bold display-5 text-uppercase" style={{ letterSpacing: '2px', textShadow: '1px 1px 2px #000' }}>
              About Us
            </h2>
            <hr className="mx-auto bg-danger" style={{ width: '70px', height: '3px', opacity: 1 }} />
            <p className="text-white-50">Know more about our values, services and excellence</p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h3 className="fw-bold mb-3">Voluptatem dignissimos provident quasi</h3>
              <p className="text-white-50">
                We build digital experiences that bring value to clients and users. Our work is dedicated
                to delivering result-oriented solutions.
              </p>
              <button className="btn btn-outline-light mt-3 px-4 py-2 rounded-pill">
                Learn More
              </button>
            </div>

            <div className="col-lg-6">
              <div className="row g-4">
                {[
                  { icon: <FaBriefcase />, title: 'Corporis voluptates sit', text: 'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip' },
                  { icon: <FaGem />, title: 'Ullamco laboris nisi', text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt' },
                  { icon: <FaBroadcastTower />, title: 'Labore consequatur', text: 'Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere' },
                  { icon: <FaDesktop />, title: 'Beatae veritatis', text: 'Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta' },
                ].map((feature, index) => (
                  <div key={index} className="col-md-6">
                    <div className="p-3 bg-dark bg-opacity-50 rounded-4 text-center shadow-sm h-100 hover-shadow transition-all">
                      <div className="text-danger mb-2" style={{ fontSize: '2rem' }}>{feature.icon}</div>
                      <h6 className="fw-bold text-white">{feature.title}</h6>
                      <p className="small text-white-50">{feature.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
