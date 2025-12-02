import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImg from "../assets/imgs/img13.webp";

function GetInvolved() {
  return (
    <>
      <Navbar />

      <main className="get-involved-page ">
        {/* Hero image */}
        <section className="bg-white">
          <div className="container-fluid p-0">
            <img
              src={heroImg}
              alt="Youth at roundtable activity"
              className="img-fluid w-100"
            />
          </div>
        </section>

        {/* Main CTA + Volunteer + Newsletter */}
        <section className="py-5 bg-white">
          <div className="container">
            <h2 className="text-center mb-3">C.H.E.E.R.S. With Us</h2>
            <p className="text-center lead mb-4">
              Join us in spreading C.H.E.E.R.S. across Worcester!
              <br />
              You can make a difference!
            </p>

            {/* Volunteer button */}
            <div className="row justify-content-center mb-4">
              <div className="col-12 col-md-6 col-lg-4">
                <a
                  href="https://example.com/volunteer-form"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg w-100"
                  style={{ backgroundColor: "#7f4ffb", borderColor: "#7f4ffb" }}
                >
                  Volunteer Sign Up Form
                </a>
              </div>
            </div>

            <div className="row justify-content-center mb-4">
              <div className="col-12 col-md-8">
                <ul className="list-unstyled text-center mb-0">
                  <li>
                    Volunteer as a mentor, coach, team, or cooking instructor
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter sign-up */}
            <div className="row justify-content-center mt-5">
              <div className="col-12 col-md-6">
                <h4 className="text-center mb-3">Newsletter Sign-up</h4>
                <form>
                  <div className="mb-3">
                    <label htmlFor="newsletterEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="newsletterEmail"
                      className="form-control"
                      placeholder="example@example.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="newsletterName" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="newsletterName"
                      className="form-control"
                      placeholder="name"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      backgroundColor: "#7f4ffb",
                      borderColor: "#7f4ffb",
                    }}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>

            <div className="row justify-content-center mt-4">
              <div className="col-12 col-md-8">
                <ul className="list-unstyled text-center mb-0">
                  <li className="mb-2">
                    Subscribe to our newsletter to get updates and new info
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsor / Fundraise + Donate + PDF */}
        <section className="py-5 bg-light text-center">
          <div className="container">
            <h4 className="mb-3">
              Sponsor or fundraise to support our youth programs
            </h4>
            <p className="mb-4">
              Every contribution — big or small — fuels our mentorship,
              wellness, and community service initiatives.
              <br />
              All donations are tax-deductible and directly support the work
              that empowers youth to change lives.
            </p>

            <div className="row justify-content-center mb-4">
              <div className="col-12 col-md-6 col-lg-4">
                <a
                  href="https://www.paypal.com/donate/YOURLINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-lg w-100"
                >
                    — DONATE NOW —
                </a>
              </div>
            </div>

            <p className="fw-semibold mb-1">
              “If we all do a little, the results will be a lot.”
            </p>
            <p className="fw-semibold mb-4">“When we GIVE, WE GROW!”</p>

            <div className="row justify-content-center">
              <div className="col-12 col-md-6 col-lg-4">
                <a
                  href="/pdfs/ways-to-support.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-warning btn-lg w-100 fw-bold"
                >
                  WAYS TO SUPPORT PDF
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Reach Out */}
        <section className="py-5 bg-white">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-6 text-center">
                <h4 className="mb-3">Reach Out</h4>
                <p className="mb-1">Echo Louissaint</p>
                <p className="mb-1">Founder/Executive Director</p>
                <p className="mb-0">
                  <a href="mailto:echo@508cheers.org">echo@508cheers.org</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default GetInvolved;
