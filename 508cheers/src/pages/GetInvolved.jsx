import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImg from "../assets/imgs/img13.webp";

const volunteer_form_link = "https://docs.google.com/forms/d/e/1FAIpQLSdzu2s-6hYkyRvfQtc9X88vKZzSsW14sZ4HSQ4zVAEhMQq4Sw/viewform?usp=sharing&ouid=114309284500192939204"
const partner_form_link = "https://docs.google.com/forms/d/e/1FAIpQLSdSRpUhhvvDlBtKMhJ85Gg0DQBn03q1eNGpqsvMcHntVWjdMw/viewform?usp=publish-editor"


function GetInvolved() {
  return (
    <>
      <Navbar />

      <main className="get-involved-page ">
        {/* Hero intro */}
        <section className="py-5">
          <div className="container">
            <div className="section-card shadow-soft">
              <div className="row g-4 align-items-center">
                <div className="col-12 col-lg-6">
                  <img
                    src={heroImg}
                    alt="Youth at roundtable activity"
                    className="img-fluid rounded shadow-soft"
                    style={{ objectFit: "cover", width: "100%" }}
                  />
                </div>
                <div className="col-12 col-lg-6">
                  <span className="badge-pill mb-2">Get Involved</span>
                  <h1 className="h3 fw-bold mb-3">
                    Volunteers, youth, partners—join the circle and uplift Worcester.
                  </h1>
                  <p className="text-muted mb-3">
                    Choose your path: give, volunteer, sign up for news, or send us a note.
                  </p>
                  <div className="d-flex flex-wrap gap-3">
                    <a
                      href="https://secure.qgiv.com/for/508cheers"
                      className="btn btn-donate-gradient fw-bold"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Donate Now
                    </a>
                    <a
                      href={volunteer_form_link}
                      className="btn btn-outline-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Volunteer
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main CTA + Volunteer + Newsletter */}
        <section className="py-5 bg-white">

          <div className="container">

            <div className="text-center mb-4">
              <div className="badge-pill mb-2">Join the Circle</div>
              <h2 className="mb-2">C.H.E.E.R.S. With Us</h2>
              <p className="lead mb-0">
                Volunteers, youth, and partners all power our mission. Step in where you shine.
              </p>
            </div>

            <div className="row g-4">
              <div className="col-12 col-lg-4">
                <div className="form-card h-100">
                  <h4 className="mb-2">Volunteer</h4>
                  <p className="text-muted">
                      Join us for service projects, community events, meal making, mentorship activities,
                      or program support. Volunteers help create safe,
                      meaningful spaces for youth to grow and lead.
                  </p>
                  <a
                    href={volunteer_form_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary w-100"
                  >
                    Volunteer Sign Up Form
                  </a>
                </div>
              </div>

              <div className="col-12 col-lg-4">
                <div className="form-card h-100">
                  <h4 className="mb-2">Newsletter</h4>
                  <p className="text-muted mb-3">
                    Get youth stories, events, and mutual aid opportunities in your inbox.
                  </p>
                  <form>
                    <div className="mb-2">
                      <label htmlFor="newsletterEmail" className="form-label small">
                        Email
                      </label>
                      <input
                        type="email"
                        id="newsletterEmail"
                        className="form-control"
                        placeholder="example@example.com"
                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="newsletterName" className="form-label small">
                        Name
                      </label>
                      <input
                        type="text"
                        id="newsletterName"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="newsletterPhone" className="form-label small">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="newsletterPhone"
                        className="form-control"
                        placeholder="(###) ###-####"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>


            <div className="col-12 col-lg-4">
                <div className="form-card h-100">
                    <h4 className="mb-2">Partner</h4>
                    <p className="text-muted">
                        Schools, youth organizations, community groups,
                        and local businesses help bring our programming to life.
                        Partnerships strengthen our reach, deepen our impact,
                        and create powerful opportunities for youth.
                    </p>
                    <a
                        href={volunteer_form_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary w-100"
                    >
                        Partner Sign Up Form
                    </a>
                </div>
            </div>


                {/*
              <div className="col-12 col-lg-4">
                <div className="form-card h-100">
                  <h4 className="mb-2">Contact</h4>
                  <p className="text-muted mb-3">
                    Have a question, idea, or partnership? Reach out and we’ll reply soon.
                  </p>
                  <form>
                    <div className="mb-2">
                      <label className="form-label small">Name</label>
                      <input type="text" className="form-control" placeholder="Your name" />
                    </div>
                    <div className="mb-2">
                      <label className="form-label small">Email</label>
                      <input type="email" className="form-control" placeholder="you@example.com" />
                    </div>
                    <div className="mb-2">
                      <label className="form-label small">Message</label>
                      <textarea className="form-control" rows="2" placeholder="How can we help?" />
                    </div>
                    <button type="submit" className="btn btn-outline-primary w-100">
                      Send
                    </button>
                  </form>
                </div>
              </div>
                */}

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
                  href="https://secure.qgiv.com/for/508cheers"
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
                  href="/api/pdf/1"
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
