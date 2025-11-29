import React from "react";
import logo_transparent from "../assets/imgs/logo-trans.png"

function Footer() {
  return (
    <footer className="footer-bg border-top mt-5 pt-4 pb-3">
      <div className="container">
        <div className="row align-items-center mb-4">
          {/* Left: Logo + text */}
          <div className="col-md-4 text-center text-md-start mb-4 mb-md-0">
            <img
              src={logo_transparent}
              alt="C.H.E.E.R.S. logo "
              className="footer-logo mb-3 w-50"
            />
            <h4 className="fw-bold mb-1">C.H.E.E.R.S.</h4>
            <p className="mb-0 small text-muted">
              COMMUNITY, HEALTH, EQUITY
              <br />
              EMPOWERMENT, RESOURCES AND SERVICE
            </p>
          </div>

          {/* Middle: Donate + PDF + socials */}
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <button className="btn donate-banner rounded-pill px-4 py-2 w-100 mb-3">
              — DONATE NOW VIA PAYPAL —
            </button>

            <button className="btn btn-warning rounded-pill px-4 py-2 mb-3">
              FUNDRAISER PDF VIEW/DOWNLOAD
            </button>

            <div className="d-flex justify-content-center gap-4 mt-2">
              {/* Bootstrap Icons or Font Awesome here */}
              <a href="#" className="social-icon-link">
                <i className="bi bi-instagram fs-1" />
              </a>
              <a href="#" className="social-icon-link">
                <i className="bi bi-facebook fs-1" />
              </a>
            </div>
          </div>

          {/* Right: Newsletter */}
          <div className="col-md-4 text-center text-md-start">
            <h5 className="fw-bold mb-3">Newsletter Sign-up</h5>

            <label className="form-label d-block text-start small">Email</label>
            <form className="d-flex flex-column flex-sm-row gap-2">
              <input
                type="email"
                className="form-control"
                placeholder="example@example.com"
              />
              <button type="submit" className="btn btn-primary px-4">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="text-center small text-muted">
          Copyright © 2025 C.H.E.E.R.S. - All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
