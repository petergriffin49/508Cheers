import React from "react";
import {useState, useEffect} from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import partnersHero from "../assets/imgs/img14.webp"

function Partners() {
    const [partners, setPartners] = React.useState([])
    const [error, setError] = React.useState(false)
    useEffect(() => {
        const fetchPartners = async () => {
            try {
                const res = await fetch("http://localhost:3001/node-get-all-partners");
                if (!res.ok) {
                    throw new Error("Failed fetching partners error: " + res.status);
                }
                const data = await res.json();

                if (data.message === "success") {
                    setPartners(data.data);
                } else {
                    setError(data.message);
                }
            } catch (error) {
                setError(error.message)
            }
        }

        fetchPartners();
    });



  return (
    <>
      <Navbar />

      <main className="partners-page">
        {/* Hero image */}
        <section className="bg-white">
          <div className="container-fluid p-0">
            <img
              src={partnersHero}
              alt="Youth and partners at service project"
              className="img-fluid w-100"
            />
          </div>
        </section>

        {/* Title */}
        <section className="py-4 bg-white">
          <div className="container">
            <h2 className="text-center mb-4">
              Who C.H.E.E.R.S. With Us – This Could Be You!
            </h2>

            {/* Logo strip */}
            <div className="row align-items-center justify-content-center mb-4">
              <div className="col-auto d-none d-md-block">
                <span className="fs-3">&larr;</span>
              </div>

              <div className="col-12 col-md-10">
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <img
                    // src={logoWcac}
                    src="https://via.placeholder.com/120x60?text=WCAC"
                    alt="WCAC"
                    className="img-fluid"
                    style={{ maxHeight: "60px" }}
                  />
                  <img
                    src="https://via.placeholder.com/120x60?text=All+One"
                    alt="All One Credit Union"
                    className="img-fluid"
                    style={{ maxHeight: "60px" }}
                  />
                  <img
                    src="https://via.placeholder.com/120x60?text=DCU"
                    alt="DCU Center"
                    className="img-fluid"
                    style={{ maxHeight: "60px" }}
                  />
                  <img
                    src="https://via.placeholder.com/120x60?text=Woo+Sox"
                    alt="Woo Sox"
                    className="img-fluid"
                    style={{ maxHeight: "60px" }}
                  />
                  <img
                    src="https://via.placeholder.com/120x60?text=Cornerstone"
                    alt="Cornerstone Bank"
                    className="img-fluid"
                    style={{ maxHeight: "60px" }}
                  />
                  <img
                    src="https://via.placeholder.com/120x60?text=KVYM"
                    alt="KVYM"
                    className="img-fluid"
                    style={{ maxHeight: "60px" }}
                  />
                </div>
              </div>

              <div className="col-auto d-none d-md-block">
                <span className="fs-3">&rarr;</span>
              </div>
            </div>

            {/* Partner list */}
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                <ul className="mb-4">
                    {
                        partners.map(function(partner){
                            return (
                                <li>
                                    {partner.name}
                                </li>
                            )
                        })
                    }
                    {/*
                  <li>All One Credit Union</li>
                  <li>Worcester Community Action Council</li>
                  <li>Worcester Family Resource Center</li>
                  <li>Worcester ACTs (Addresses Childhood Trauma)</li>
                  <li>Boys and Girls Club</li>
                  <li>Girl Scouts of America</li>
                  <li>Clark University – Hillel</li>
                  <li>Woo Serves – United Way of Central Mass</li>
                  <li>Notre Dame Academy – Love in Action</li>
                  <li>Greater Worcester Community Foundation</li>
                  <li>Challenge Yourself Fitness</li>
                  <li>National Grid</li>
                  <li>Keeping Worcester Warm</li>
                  <li>The No Evil Project</li>
                  <li>Woo Sox</li>
                  <li>Greater Worcester Community Foundation</li>
                  */}
                </ul>
              </div>
            </div>

            {/* PDF button */}
            <div className="row justify-content-center mb-4">
              <div className="col-12 col-md-6 col-lg-4">
                <a
                  href="/pdfs/who-cheers-with-us.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-warning btn-lg w-100 fw-bold text-uppercase"
                >
                  WHO C.H.E.E.R.S. WITH US PDF
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