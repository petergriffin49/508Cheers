import React from "react";
import logo_transparent from "../assets/imgs/logo-trans.png";

function Footer() {
  return (
    <footer className="footer-bg border-top mt-5 pt-5 pb-4">
      <div className="container">
        <div className="row gy-4 align-items-center">
          {/* Left: Logo + mantra */}
          <div className="col-12 col-md-4 text-center text-md-start">
            <img
              src={logo_transparent}
              alt="C.H.E.E.R.S. logo "
              className="footer-logo mb-3 img-fluid"
              style={{ height: "140px", width: "auto", objectFit: "contain" }}
            />
            <p className="mb-2 fw-semibold text-dark">Youth Led · Community Fed.</p>
            <p className="text-muted small mb-0">
              Mentorship, meals, and mutual aid powered by Worcester youth.
            </p>
          </div>

          {/* Middle: donate + socials */}
          <div className="col-12 col-md-4 text-center">
            <a
              className="btn btn-donate-gradient w-100 mb-3 fw-bold"
              role="button"
              href="https://secure.qgiv.com/for/508cheers"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate to 508 C.H.E.E.R.S.
            </a>

            <a
              className="btn btn-outline-dark rounded-pill px-4 py-2 mb-3 w-100"
              href="/api/pdf/1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fundraiser PDF
            </a>

            <div className="d-flex justify-content-center gap-3 mt-2">
              <a
                href="https://www.instagram.com/508cheers"
                className="social-icon-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram fs-1" />
              </a>
              <a
                href="https://www.facebook.com/508cheers/"
                className="social-icon-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook fs-1" />
              </a>
            </div>
          </div>

          {/* Right: Newsletter */}

          <div className="col-12 col-md-4 text-center text-md-start">
              {/*
              <h5 className="fw-bold mb-3">Stay in the Loop</h5>
            <form className="d-flex flex-column flex-sm-row gap-2">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
              <button type="submit" className="btn btn-primary px-4">
                Submit
              </button>
            </form>
            */}
            <div className="text-center text-md-start small text-muted mt-4">
              © 2025 C.H.E.E.R.S. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
