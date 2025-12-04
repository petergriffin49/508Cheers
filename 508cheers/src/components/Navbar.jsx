import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/imgs/logo-min.png";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-cheers sticky-top shadow-soft py-3">
        <div className="container-fluid">
          {/* logo */}
          <NavLink to="/" className="navbar-brand d-flex align-items-center fw-semibold text-uppercase">
            <img
              src={logo}
              alt="logo"
              className="logo-head me-2 rounded-pill"
              style={{ height: "56px" }}
            />
            <div className="d-flex flex-column lh-1">
              <span className="d-none d-sm-inline">508 C.H.E.E.R.S.</span>
              <small className="brand-tag text-uppercase text-warning">Youth Led · Community Fed</small>
            </div>
          </NavLink>

          {/* mobile button */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* links */}

          <div className="collapse navbar-collapse" id="mainNavbar">
            <div className="navbar-nav align-items-lg-center gap-lg-1 flex-wrap">
              {[
                { to: "/", label: "Home", end: true },
                { to: "/programs", label: "Programs" },
                { to: "/impact", label: "Impact" },
                { to: "/get-involved", label: "Get-Involved" },
                { to: "/directors", label: "Directors" },
                { to: "/partners", label: "Partners" },
                { to: "/about", label: "About" },
                { to: "/admin", label: "Admin" },
              ].map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    "nav-link nav-link-cheers px-3 py-2 fw-semibold" +
                    (isActive ? " active highlight-pill" : "")
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
            <div className="ms-lg-auto mt-3 mt-lg-0">
              <a
                href="https://secure.qgiv.com/for/508cheers"
                target="_blank"
                rel="noreferrer"
                className="btn btn-warning fw-bold shadow-sm border-0 px-4 rounded-pill donate-cta"
              >
                Donate
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
