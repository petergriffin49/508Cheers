import React from "react";
import logo_transparent from "../assets/imgs/logo-trans.png";

function Footer() {
  return (
    <footer
      className="footer-bg border-top mt-5 pt-4 pb-3"
      style={{ background: "#d9d9d9" }}
    >
      <div className="container-fluid">
        <div className="row align-items-center mb-4">
          {/* Left: Logo + text */}
          <div className="col-md-2 text-center text-md-start ">
            <img
              src={logo_transparent}
              alt="C.H.E.E.R.S. logo "
              className="footer-logo mb-3 img-fluid"
              style={{ height: "160px", width: "auto", objectFit: "contain" }}
            />
          </div>

          {/* Middle: Donate + PDF + socials */}
          <div className="col-md-4 text-center mx-auto">
            <button className="btn btn-secondary donate-banner px-1 py-2  mb-3">
              — DONATE NOW VIA PAYPAL —
            </button>

            <a
              className="btn btn-warning rounded-pill px-4 py-2 mb-3"
              href="/api/pdf/1"
              target="_blank"
              rel="noopener noreferrer"
            >
              FUNDRAISER PDF VIEW/DOWNLOAD
            </a>

            <div className="d-flex justify-content-center gap-4 mt-2">
              {/* Bootstrap Icons  */}
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
            <div className="text-center small text-muted mt-5">
              Copyright © 2025 C.H.E.E.R.S. - All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
