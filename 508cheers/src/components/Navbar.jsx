import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/imgs/logo-min.png";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* logo */}
          <NavLink to="/" className="navbar-brand   ">
            <img
              src={logo}
              alt="logo"
              className="logo-head me-2 rounded-pill"
              style={{ height: "48px" }}
            />
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
            <div className="navbar-nav">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/programs"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Programs
              </NavLink>
              <NavLink
                to="/impact"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Impact
              </NavLink>
              <NavLink
                to="/get-involved"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Get-Involved
              </NavLink>
              <NavLink
                to="/directors"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Directors
              </NavLink>
              <NavLink
                to="/partners"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Partners
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                About
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
