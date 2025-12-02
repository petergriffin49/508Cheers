import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import cheersLogo from "../assets/imgs/logo.png";

function About() {
  return (
    <>
      <Navbar />

      <main className="about-page mt-4">
        {/* Logo / Hero */}
        <section className="bg-white pt-4 pb-2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 col-lg-6">
                <img
                  src={cheersLogo}
                  alt="C.H.E.E.R.S. logo"
                  className="img-fluid d-block mx-auto mb-4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section className="py-4 bg-white">
          <div className="container">
            <h2 className="text-center mb-3">About Us</h2>
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                <p className="text-center mb-2">
                  508 C.H.E.E.R.S. empowers BIPOC, low-income, and underserved
                  youth through mentorship, community service, and mutual aid
                  projects.
                </p>
                <p className="text-center mb-2">
                  We address food insecurity, promote health and wellness, and
                  create pathways for personal and community growth.
                </p>
                <p className="text-center mb-2">
                  Together, we&apos;re building a more equitable, connected, and
                  compassionate Worcester, one youth leader at a time.
                </p>
                <p className="text-center mb-0">
                  Our programs give youth the tools to lead, advocate, and
                  inspire change, turning their ideas into action that
                  strengthens the city we all call home.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-5 bg-white">
          <div className="container">
            <h2 className="text-center mb-3">Our Mission Why We C.H.E.E.R.S.</h2>
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                <p className="text-center mb-3">
                  508 C.H.E.E.R.S. empowers youth to use their voices, talents,
                  and lived experiences to create real change in their
                  communities. We teach that leadership begins with giving, and
                  that their stories hold power and their actions create impact.
                </p>
                <p className="text-center mb-0">
                  Through mentorship, cultural programming, and service projects
                  addressing food insecurity, mental wellness, and equity, youth
                  learn to serve, lead, and speak together, discovering what it
                  means to be part of something bigger than themselves—a
                  movement for hope, equity, and change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-5 bg-white">
          <div className="container">
            <h2 className="text-center mb-3">Our Vision</h2>
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                <p className="text-center mb-4">
                  We envision a world where every young person, regardless of
                  background, has the confidence, support, and opportunity to
                  rise as a leader, serve their community, and help build a more
                  just, equitable, and compassionate society.
                </p>
              </div>
            </div>

            {/* PDF button */}
            <div className="row justify-content-center">
              <div className="col-12 col-md-6 col-lg-4">
                <a
                  href="/api/pdf/4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-warning btn-lg w-100 fw-bold"
                >
                  WHY WE C.H.E.E.R.S. PDF
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default About;