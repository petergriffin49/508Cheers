import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import cheersLogo from "../assets/imgs/logo.png";

function About() {
  return (
    <>
      <Navbar />

      <main className="about-page">
        {/* Hero */}
        <section className="position-relative mb-4">
          <div className="cheers-hero">
            <img src="/img/img1.webp" alt="Youth impact" className="d-block w-100" />
            <div className="hero-overlay">
              <div className="container">
                <div className="hero-content">
                  <span className="badge-pill mb-2">Why We C.H.E.E.R.S.</span>
                  <h1 className="display-6 fw-bold mb-3">
                    Youth mentorship, meals, and mutual aid—powered by Worcester youth voices.
                  </h1>
                  <a
                    href="/api/pdf/4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-donate-gradient fw-bold"
                  >
                    Why We C.H.E.E.R.S. PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section className="py-4 bg-white">
          <div className="container">
            <div className="text-center mb-4">
              <div className="badge-pill mb-2">About Us</div>
              <h2 className="mb-2">Youth Led · Community Fed</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                <p className="text-center mb-2">
                  508 C.H.E.E.R.S. empowers BIPOC, low-income, and underserved youth through mentorship,
                  community service, and mutual aid projects.
                </p>
                <p className="text-center mb-2">
                  We address food insecurity, promote health and wellness, and create pathways for personal and community growth.
                </p>
                <p className="text-center mb-2">
                  Together, we&apos;re building a more equitable, connected, and compassionate Worcester, one youth leader at a time.
                </p>
                <p className="text-center mb-0">
                  Our programs give youth the tools to lead, advocate, and inspire change—turning ideas into action.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-5 bg-white">
          <div className="container">
            <div className="text-center mb-4">
              <div className="badge-pill mb-2">Our Mission</div>
              <h2 className="mb-2">Why We C.H.E.E.R.S.</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                <p className="text-center mb-3">
                  508 C.H.E.E.R.S. empowers youth to use their voices, talents, and lived experiences to create real change in their communities.
                  Leadership begins with giving; their stories hold power, and their actions create impact.
                </p>
                <p className="text-center mb-0">
                  Through mentorship, cultural programming, and service projects addressing food insecurity, mental wellness, and equity, youth learn to serve, lead, and speak together—a movement for hope, equity, and change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-5 bg-white">
          <div className="container">
            <div className="text-center mb-4">
              <div className="badge-pill mb-2">Our Vision</div>
              <h2 className="mb-2">A future where youth lead</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                <p className="text-center mb-4">
                  We envision a world where every young person, regardless of background, has the confidence, support, and opportunity to lead, serve, and build a more just, equitable, and compassionate society.
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
                  className="btn btn-donate-gradient w-100 fw-bold"
                >
                  Why We C.H.E.E.R.S. PDF
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
