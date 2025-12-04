import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import partnersHero from "../assets/imgs/img14.webp";

function Partners() {
  const [partners, setPartners] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPartners = async () => {
      setStatus("loading");
      try {
        const res = await fetch("/api/get-all-partners");
        if (!res.ok) {
          throw new Error("Failed fetching partners error: " + res.status);
        }
        const data = await res.json();

        if (data.message === "success") {
          const sorted = [...data.data].sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          setPartners(sorted);
          setStatus("success");
        } else {
          setError(data.message || "Unable to load partners");
          setStatus("error");
        }
      } catch (err) {
        setError(err.message || "Unable to load partners");
        setStatus("error");
      }
    };

    fetchPartners();
  }, []);

  const hasPartners = partners.length > 0;

  return (
    <>
      <Navbar />

      <main className="partners-page">
        {/* Hero */}
        <section className="position-relative mb-4">
          <div className="cheers-hero">
            <img
              src={partnersHero}
              alt="Youth and partners at service project"
              className="img-fluid w-100"
            />
            <div className="hero-overlay">
              <div className="container">
                <div className="hero-content">
                  <span className="badge-pill mb-2">Community Partners</span>
                  <h1 className="display-6 fw-bold mb-3">
                    Together with schools, teams, and businesses uplifting Worcester.
                  </h1>
                  <a
                    href="https://secure.qgiv.com/for/508cheers"
                    className="btn btn-donate-gradient fw-bold"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Donate to Support Partnerships
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Title */}
        <section className="py-5 bg-white">
          <div className="container">
            <div className="text-center mb-4">
              <div className="badge-pill mb-2">Who C.H.E.E.R.S. with us</div>
              <h2 className="mb-2">Local allies fueling youth-led service</h2>
              <p className="text-muted mb-0">
                Schools, organizations, and businesses that keep our programs moving.
              </p>
            </div>

            {/* Partner logos */}
            <div className="row justify-content-center mb-4">
              {status === "loading" && (
                <div className="col-12 text-center text-muted">
                  <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading partners...</span>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="col-12 col-md-10 col-lg-8">
                  <div className="alert alert-danger text-center" role="alert">
                    {error || "Unable to load partners right now."}
                  </div>
                </div>
              )}

              {status === "success" && hasPartners && (
                <div className="col-12">
                  <div className="row g-4 justify-content-center">
                    {partners.map((partner) => (
                      <div
                        key={partner._id || partner.name}
                        className="col-6 col-md-4 col-lg-3"
                      >
                        <div className="card h-100 shadow-sm border-0 text-center">
                          <div className="p-3 d-flex align-items-center justify-content-center bg-light rounded-top">
                            {partner.img ? (
                              <img
                                src={partner.img}
                                alt={partner.name}
                                className="img-fluid"
                                style={{ maxHeight: "90px", objectFit: "contain" }}
                                loading="lazy"
                              />
                            ) : (
                              <div
                                className="d-flex align-items-center justify-content-center w-100 text-muted"
                                style={{
                                  height: "90px",
                                  background: "rgba(0,0,0,0.03)",
                                  borderRadius: "0.375rem",
                                  fontWeight: 600,
                                  fontSize: "0.95rem",
                                }}
                              >
                                {partner.name}
                              </div>
                            )}
                          </div>
                          <div className="card-body">
                            <p className="card-title fw-semibold mb-0">
                              {partner.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {status === "success" && !hasPartners && (
                <div className="col-12 text-center text-muted">
                  No partners to display yet.
                </div>
              )}
            </div>

            {/* PDF button */}
            <div className="row justify-content-center mb-4">
              <div className="col-12 col-md-6 col-lg-4">
                <a
                  href="/api/pdf/4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-donate-gradient w-100 fw-bold text-uppercase"
                >
                  C.H.E.E.R.S. OVERVIEW PDF
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

export default Partners;
