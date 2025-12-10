import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import t1 from "../assets/imgs/img6.jpg";
import t2 from "../assets/imgs/img7.webp";
import t3 from "../assets/imgs/img8.webp";
import b1 from "../assets/imgs/img9.webp";
import b2 from "../assets/imgs/img10.webp";
import b3 from "../assets/imgs/img11.webp";

function Programs() {
  const youthPrograms = [
    {
      title: "Community Service, Advocacy & Equity",
      copy:
        "Youth-led projects uplifting unsheltered and underserved families through compassion and action.",
    },
    {
      title: "Food Insecurity Sports Clinics",
      copy:
        "Train with local teams and donate food instead of fees—fueling food banks while building skills.",
    },
    {
      title: "Cultural Cooking Program",
      copy:
        "Culinary skills and cultural traditions that nourish families and celebrate heritage.",
    },
    {
      title: "Girls Mentorship",
      copy:
        "Mentorship, R.A.D. self-defense, and menstrual equity projects that build confidence and leadership.",
    },
    {
      title: "Health, Wellness & Future Readiness",
      copy:
        "Mental health support, fitness, financial literacy, and career exploration to thrive personally and professionally.",
    },
    {
      title: "Teen Trauma Tuesday & Wellness Wednesday",
      copy:
        "Youth-led virtual mental health sessions with Worcester ACTs—trauma-informed support and mindfulness.",
    },
  ];

  const girlsFocus = [
    {
      title: "Build Strong Minds & Voices",
      copy:
        "Confidence, stress management, healthy relationships, and advocacy for menstrual equity and their dreams.",
    },
    {
      title: "Empowered Inside and Out",
      copy:
        "Girls-only workouts and R.A.D. self-defense—practical skills to stay safe and strong.",
    },
    {
      title: "Healthy Body, Healthy Habits",
      copy:
        "Women-led workouts, nutrition-focused cooking, and mentorship celebrating mind, body, and uniqueness.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pb-4">
        {/* Hero */}
        <section className="position-relative mb-5">
          <div className="cheers-hero">
            <img src={t1} className="d-block w-100" alt="Youth leading program" />
            <div className="hero-overlay">
              <div className="container">
                <div className="hero-content">
                  <span className="badge-pill mb-2">Programs that Nourish & Empower</span>
                  <h1 className="display-6 fw-bold mb-3">
                    Leadership, wellness, and advocacy—built by and for Worcester youth.
                  </h1>
                  <div className="d-flex flex-wrap gap-3">
                    <a
                      href="/api/pdf/3"
                      className="btn btn-donate-gradient fw-bold"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Program Offerings PDF
                    </a>
                    <a
                      href="https://secure.qgiv.com/for/508cheers"
                      className="btn btn-outline-light"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Support the Programs
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Youth Program Offerings */}
        <section className="container mb-5">
          <div className="text-center mb-4">
            <div className="badge-pill mb-2">For Youth & Community</div>
            <h2 className="fw-bold">Youth Program Offerings</h2>
          </div>

          <div className="row g-4">
            {youthPrograms.map((item) => (
                <div className="col-12 col-md-6" key={item.title}>
                    <div className="form-card h-100 p-3 rounded-3 shadow-sm" style={{ backgroundColor: "#aad3ff" }}>
                        <h5 className="fw-semibold mb-2">{item.title}</h5>
                        <p className="text-muted mb-0">{item.copy}</p>
                    </div>
                </div>

            ))}
          </div>

          <div className="text-center mt-4">
            <a
              href="/api/pdf/3"
              className="btn btn-donate-gradient fw-bold"
              target="_blank"
              rel="noreferrer"
            >
              Program Offerings PDF
            </a>
          </div>
        </section>

        {/* Video engagement */}
        <section className="container mb-5">
          <div className="row g-4">
            <div className="col-12 col-lg-6">
              <div className="section-card h-100">
                <div className="ratio ratio-16x9 mb-3">
                  <iframe
                    src="https://www.youtube.com/embed/PHUM7bpt6GA?si=M3iZFNOTVDNDIujT"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <h4 className="fw-semibold mb-2">Advocacy is Service</h4>
                <p className="text-muted mb-0">
                    Youth Keynote Speaker at the Youth Fusion 2025 Youth Conference
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="section-card h-100">
                <div className="ratio ratio-16x9 mb-3">
                  <iframe
                    src="https://www.youtube.com/embed/0Q9-dQLuO9Q?si=dAYyzhiazTY74Z6M"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <h4 className="fw-semibold mb-2">Youth Advocacy</h4>
                <p className="text-muted mb-0">
                    Speaking on the Affordable Housing Crisis in City of Worcester
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Girls empowerment */}
        <section className="container mb-5">
          <div className="text-center mb-4">
            <div className="badge-pill mb-2">Girls Empowerment & Strength</div>
            <h2 className="fw-bold">C.H.E.E.R.S. for Girls</h2>
          </div>

          <div className="row g-4">
            {[b1, b2, b3].map((img, idx) => (
              <div className="col-12 col-md-4" key={idx}>
                <img src={img} alt={`Girls empowerment ${idx + 1}`} className="img-fluid rounded shadow-soft" />
              </div>
            ))}
          </div>

          <div className="row g-4 mt-3">
            {girlsFocus.map((item) => (
              <div className="col-12 col-md-4" key={item.title}>
                <div className="form-card h-100">
                  <h5 className="fw-semibold mb-2">{item.title}</h5>
                  <p className="text-muted mb-0">{item.copy}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <a
              href="/api/pdf/2"
              className="btn btn-donate-gradient fw-bold"
              target="_blank"
              rel="noreferrer"
            >
              Girls Empowerment Program PDF
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Programs;
