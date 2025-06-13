import React, { Component } from 'react';
import {
  FaBriefcase,
  FaClipboardList,
  FaChartBar,
  FaUsers,
  FaSun,
  FaDatabase,
} from 'react-icons/fa';

class Services extends Component {
  render() {
    const services = [
      {
        icon: <FaBriefcase />,
        title: 'Business Consulting',
        desc:
          'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.',
      },
      {
        icon: <FaClipboardList />,
        title: 'Project Management',
        desc:
          'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
      },
      {
        icon: <FaChartBar />,
        title: 'Market Analysis',
        desc:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.',
      },
      {
        icon: <FaUsers />,
        title: 'Customer Support',
        desc:
          'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.',
      },
      {
        icon: <FaSun />,
        title: 'Creative Design',
        desc:
          'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.',
      },
      {
        icon: <FaDatabase />,
        title: 'Data Solutions',
        desc:
          'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore eligendi.',
      },
    ];

    return (
      <section
        className="py-5"
        style={{
          background: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
          color: 'white',
        }}
      >
        <div className="container">
          {/* Title */}
          <div className="text-center mb-5">
            <h2
              className="fw-bold display-5 text-uppercase"
              style={{ letterSpacing: '2px', textShadow: '1px 1px 2px black' }}
            >
              Services
            </h2>
            <hr className="mx-auto bg-danger" style={{ width: '70px', height: '3px' }} />
            <p className="text-white-50 mt-2">
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
            </p>
          </div>

          {/* Service Cards */}
          <div className="row g-4">
            {services.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-6">
                <div className="p-4 bg-dark bg-opacity-50 rounded-4 shadow-sm h-100 d-flex align-items-start hover-shadow transition-all">
                  <div className="text-danger fs-3 me-3">{item.icon}</div>
                  <div>
                    <h5 className="fw-bold text-white">{item.title}</h5>
                    <p className="text-white-50 small mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
