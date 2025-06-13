import React from 'react';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';

class Contact extends React.Component {
  render() {
    return (
      <section className="contact-section py-5 bg-light mt-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 text-dark">Contact Us</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <form className="bg-white p-4 rounded shadow-sm">
                <div className="mb-3">
                  <label className="form-label fw-semibold"><FaUser className="me-2 text-primary" />Your Name</label>
                  <input type="text" className="form-control" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold"><FaEnvelope className="me-2 text-primary" />Email address</label>
                  <input type="email" className="form-control" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold"><FaCommentDots className="me-2 text-primary" />Message</label>
                  <textarea className="form-control" rows="4" placeholder="Write your message"></textarea>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-danger fw-semibold py-2">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
