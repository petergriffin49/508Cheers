import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Directors() {
  const directors = [
    {
      name: "Director Name",
      role: "Board Role / Title",
      // img: directorPlaceholder,
      img: "https://via.placeholder.com/300x300?text=Photo",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="directors-page mt-4">
        {/* Board of Directors Video */}
        <section className="py-4">
          <div className="container">
            <div className="ratio ratio-16x9 bg-light d-flex align-items-center justify-content-center border">
              <p className="fs-4 mb-0 text-muted text-center">
                (Board of Directors Video)
              </p>
            </div>
          </div>
        </section>

        {/* List of Directors */}
        <section className="py-5 bg-white">
          <div className="container">
            <h3 className="mb-4">List of Directors</h3>

            <div className="row gy-4">
              {directors.map((d, idx) => (
                <div className="col-12 col-sm-6 col-lg-4" key={idx}>
                  <div className="d-flex flex-column align-items-center text-center">
                    <div
                      className="mb-3"
                      style={{
                        width: "160px",
                        height: "160px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        backgroundColor: "#e0e0e0",
                      }}
                    >
                      <img
                        src={d.img}
                        alt={d.name}
                        className="img-fluid h-100 w-100 object-fit-cover"
                      />
                    </div>
                    <h5 className="mb-1">{d.name}</h5>
                    <p className="mb-0 text-muted">{d.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="row mt-5">
              <div className="col-12 text-center">
                <p className="fw-semibold">Don&apos;t Have Info Yet</p>
                <p className="text-muted mb-0">
                  Check back soon for our full Board of Directors list.
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

export default Directors;
