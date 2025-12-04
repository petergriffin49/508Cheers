import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Directors() {
  const [directors, setDirectors] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    const fetchAll = async () => {
      setStatus("loading");
      try {
        const [dirRes, contentRes] = await Promise.all([
          fetch("/api/get-all-directors"),
          fetch("/api/get-content"),
        ]);
        if (!dirRes.ok) throw new Error("Failed to load directors");
        const dirData = await dirRes.json();
        if (dirData.message === "success") {
          setDirectors(dirData.data);
        } else {
          throw new Error(dirData.message || "Unable to load directors");
        }

        if (contentRes.ok) {
          const contentData = await contentRes.json();
          if (contentData.message === "success") {
            setVideoUrl(contentData.data?.directorsVideoUrl || "");
          }
        }

        setStatus("success");
      } catch (err) {
        setError(err.message);
        setStatus("error");
      }
    };
    fetchAll();
  }, []);

  return (
    <>
      <Navbar />

      <main className="directors-page">
        {/* Hero / Video */}
        <section className="py-5">
          <div className="container">
            <div className="section-card shadow-soft">
              <div className="row g-4">
                <div className="col-12 col-lg-6">
                  <div className="badge-pill mb-2">Board of Directors</div>
                  <h1 className="h3 fw-bold mb-3">
                    Guiding the mission, championing youth leadership.
                  </h1>
                  <p className="text-muted mb-0">
                    Leaders and mentors ensuring our vision stays youth-led and community-centered.
                  </p>
                </div>
                <div className="col-12 col-lg-6">
                  {videoUrl ? (
                    <div className="ratio ratio-16x9">
                      <iframe
                        src={videoUrl}
                        title="Board of Directors Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : (
                    <div className="ratio ratio-16x9 bg-light d-flex align-items-center justify-content-center border rounded">
                      <p className="fs-5 mb-0 text-muted text-center">(Board of Directors Video)</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* List of Directors */}
        <section className="py-5 bg-white">
          <div className="container">
            <div className="text-center mb-4">
              <div className="badge-pill mb-2">Meet the Board</div>
              <h3 className="mb-2">Leaders standing with 508 C.H.E.E.R.S.</h3>
              <p className="text-muted mb-0">Advocates for mentorship, food security, and equity.</p>
            </div>

            <div className="row gy-4">
              {status === "loading" && (
                <div className="col-12 text-center text-muted">Loading...</div>
              )}
              {status === "error" && (
                <div className="col-12">
                  <div className="alert alert-danger text-center" role="alert">
                    {error || "Unable to load directors."}
                  </div>
                </div>
              )}
              {status === "success" && directors.length === 0 && (
                <div className="col-12 text-center text-muted">
                  Check back soon for our full Board of Directors list.
                </div>
              )}
              {directors.map((d, idx) => (
                <div className="col-12 col-sm-6 col-lg-4" key={idx}>
                  <div className="d-flex flex-column align-items-center text-center card-soft p-3 h-100">
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
                      {d.img ? (
                        <img
                          src={d.img}
                          alt={d.name}
                          className="img-fluid h-100 w-100 object-fit-cover"
                        />
                      ) : (
                        <div className="d-flex align-items-center justify-content-center h-100 text-muted">
                          No photo
                        </div>
                      )}
                    </div>
                    <h5 className="mb-1">{d.name}</h5>
                    <p className="mb-0 text-muted">{d.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Directors;
