import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import youthGroup from "../assets/imgs/banner.png";
import Post from "../components/fbPosts.jsx";

const FACEBOOK_PAGE_URL = "https://www.facebook.com/508cheers/";

function Impact() {
    const [fbPosts, setFbPosts] = useState([]);
    const [fbStatus, setFbStatus] = useState("loading");
    const [fbError, setFbError] = useState("");

    const [meals, setMeals] = useState([]);
    const [mealsStatus, setMealsStatus] = useState("loading");
    const [mealsError, setMealsError] = useState("");

    useEffect(() => {
        let cancelled = false;

        fetchPosts(cancelled);
        fetchInfo(cancelled);

        return () => {
            cancelled = true;
        };
    }, []);

    async function fetchPosts(cancelled) {
        try {
            const res = await fetch("/api/get-three-new-facebook-posts/");
            if (!res.ok) throw new Error("Failed fetching posts: " + res.status);

            const data = await res.json();

            if (!cancelled) {
                if (data.success === true) {
                    setFbPosts(data.posts);
                    setFbStatus("success");
                } else {
                    setFbStatus("error");
                    setFbError("We couldn't load Facebook posts right now.");
                }
            }
        } catch (err) {
            if (!cancelled) {
                setFbStatus("error");
                setFbError("We couldn't load Facebook posts right now.");
                console.error("facebook posts fetch error", err);
            }
        }
    }

    async function fetchInfo(cancelled) {
        try {
            const res = await fetch("/api/meals"); // FIXED URL
            if (!res.ok) throw new Error("Failed fetching meals: " + res.status);

            const data = await res.json();

            if (!cancelled) {
                if (data.message === "success") {
                    console.log(data.data);
                    setMeals(data.data);
                    setMealsStatus(data.message);

                } else {
                    console.log(data.data);
                    setMealsStatus(data.message);
                    setMealsError(data.data);
                }
            }
        } catch (err) {
            if (!cancelled) {
                setMealsStatus("error");
                setMealsError("check");
                console.error("meals fetch error", err);
            }
        }
    }

  return (
    <>
      <Navbar />

      <main className="impact-page">
        {/* Hero */}
        <section className="py-5">
          <div className="container">
            <div className="section-card shadow-soft">
              <div className="row g-4 align-items-center">
                <div className="col-12 col-lg-7">
                  <div className="badge-pill mb-2">Impact in Motion</div>
                  <h1 className="h3 fw-bold mb-3">
                    Meals served, voices raised, youth leading Worcester.
                  </h1>
                  <p className="text-muted mb-3">
                    Your support fuels mentorship, meals, and mutual aid—all led by Worcester youth.
                  </p>
                  <div className="d-flex flex-wrap gap-3">
                    <a
                      href="https://secure.qgiv.com/for/508cheers"
                      className="btn btn-donate-gradient fw-bold"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Donate to Fuel Our Impact
                    </a>
                    <a
                      href={FACEBOOK_PAGE_URL}
                      className="btn btn-outline-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Follow on Facebook
                    </a>
                  </div>
                </div>
                <div className="col-12 col-lg-5">
                  <img
                    src={youthGroup}
                    alt="Youth cheering"
                    className="img-fluid rounded shadow-soft"
                    style={{ objectFit: "cover", width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="py-4 bg-stone text-center">
          <div className="container">
            <div className="stat-grid">
              <div className="stat-tile">
                <h3 className="mb-1 text-primary">{mealsStatus === "loading" ? mealsStatus : meals[0].infoNumber}</h3>
                <p className="mb-0 text-muted">{mealsStatus === "loading" ? mealsStatus : meals[0].infoTxt}</p>
              </div>
              <div className="stat-tile">
                  <h3 className="mb-1 text-primary">{mealsStatus === "loading" ? mealsStatus : meals[1].infoNumber}</h3>
                  <p className="mb-0 text-muted">{mealsStatus === "loading" ? mealsStatus : meals[1].infoTxt}</p>
              </div>
              <div className="stat-tile">
                  <h3 className="mb-1 text-primary">{mealsStatus === "loading" ? mealsStatus : meals[2].infoNumber}</h3>
                  <p className="mb-0 text-muted">{mealsStatus === "loading" ? mealsStatus : meals[2].infoTxt}</p>
              </div>
              <div className="stat-tile">
                  <h3 className="mb-1 text-primary">{mealsStatus === "loading" ? mealsStatus : meals[3].infoNumber}</h3>
                  <p className="mb-0 text-muted">{mealsStatus === "loading" ? mealsStatus : meals[3].infoTxt}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Video + ticker */}
        <section className="py-5 bg-white">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-12 col-lg-7">
                <div className="section-card h-100">
                  <div className="ratio ratio-16x9 mb-3">
                    <iframe
                      src="https://www.youtube.com/embed/i366kX_JbyI?si=brqpZZuoO5TDWulM"
                      title="Youth voices video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h3 className="h5">What our youth are saying</h3>
                  <p className="text-muted mb-0">
                    Hear the impact straight from the youth leading change in Worcester.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-5">
                <div className="form-card h-100">
                  <h4 className="mb-3">Meals to Date</h4>
                  <div className="stat-tile mb-3">
                      <h2 className="mb-1 text-primary">{mealsStatus === "loading" ? mealsStatus : meals[4].infoNumber}</h2>
                      <p className="mb-0 text-muted">{mealsStatus === "loading" ? mealsStatus : meals[4].infoTxt}</p>
                  </div>
                  <p className="text-muted mb-3">
                    Every donation keeps the kitchen moving. Help us reach the next 1,000 meals.
                  </p>
                  <a
                    href="https://secure.qgiv.com/for/508cheers"
                    className="btn btn-donate-gradient w-100 fw-bold"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Donate a Meal
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Impact text */}
        <section className="py-5">
          <div className="container">
            <h2 className="text-center mb-2">Community Impact</h2>
            <p className="text-center mb-4">
              Together, our youth, volunteers, and community partners
            </p>

            <div className="row gy-4">
              <div className="col-12 col-md-6">
                <ul className="mb-0">
                  <li className="mb-3">
                    Serve over 100 meals monthly to families and individuals
                    experiencing food insecurity, feeding over 1200 community
                    members annually.
                  </li>
                  <li className="mb-3">
                    Lead youth-driven service projects across Worcester that
                    address hunger, equity, community and wellness.
                  </li>
                  <li className="mb-3">
                    Harness the power of youth stories to advocate at City
                    Council, School Committee, and State House meetings.
                  </li>
                  <li className="mb-3">
                    Assemble and distribute menstrual hygiene kits for schools,
                    shelters, and women in need.
                  </li>
                </ul>
              </div>

              <div className="col-12 col-md-6">
                <ul className="mb-0">
                  <li className="mb-3">
                    Create safe, inclusive spaces for young women to learn,
                    advocate, and grow.
                  </li>
                  <li className="mb-3">
                    Build leadership skills through public speaking, event
                    planning, and peer mentorship.
                  </li>
                  <li className="mb-3">
                    Partner with local organizations to bring resources and
                    programming directly to neighborhoods.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Look at How we Cheer! */}
        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-4">
                Look at How We CHEERS!
            </h2>

            <div className="row gy-4">
              {/* Facebook timeline */}
              <div className="col-12 col-lg-6">
                <div className="card h-100 shadow-soft">
                  <div className="card-body">
                    <h5 className="card-title">Follow us on Facebook</h5>
                    <p className="card-text">
                      See real-time updates, photos, and stories from 508 C.H.E.E.R.S.
                    </p>
                      {fbStatus === "loading" && (
                          <p className="text-muted">Loading latest posts…</p>
                      )}

                      {fbStatus === "error" && (
                          <div className="alert alert-warning" role="alert">
                              {fbError}{" "}
                              <a
                                  href={FACEBOOK_PAGE_URL}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="alert-link"
                              >
                                  View on Facebook
                              </a>
                          </div>
                      )}

                      {fbStatus === "success" && fbPosts.length === 0 && (
                          <p className="text-muted mb-0">
                              No recent posts to show yet. Check back soon or{" "}
                              <a href={FACEBOOK_PAGE_URL} target="_blank" rel="noreferrer">
                                  visit our Facebook page
                              </a>
                              .
                          </p>
                      )}

                      {fbPosts.length > 0 && (
                          <Post post={fbPosts[0]} />
                      )}
                    <a
                      className="btn btn-donate-gradient"
                      href={FACEBOOK_PAGE_URL}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Facebook Page
                    </a>
                  </div>
                </div>
              </div>

              {/* Stories grid */}
              <div className="col-12 col-lg-6">
                <div className="row gy-4">
                  <div className="col-12">
                    <div className="card h-100 shadow-soft">
                      <div className="card-body">
                        <div className="ratio ratio-16x9 mb-3">
                          <iframe
                            src="https://www.youtube.com/embed/xzsryZsduLQ?si=6AE3m15Zy7RQTFPx"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          ></iframe>
                        </div>
                        <h5 className="card-title">Fun! Fun! Fun!</h5>
                        <p className="card-text">
                          At 508 C.H.E.E.R.S. we didn&apos;t just learn how to better our
                          community, we had a blast doing it!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="card h-100 shadow-soft">
                      <div className="card-body">
                        <h5 className="card-title">
                          When the Jobs Disappear, the Voices Rise
                        </h5>
                        <p className="card-text">
                          Youth spoke up when funding cuts removed job opportunities—showing what youth power looks like.
                        </p>
                        <p className="card-text mb-0">
                          They shared stories, advocated for change, and pushed leaders to listen.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="card h-100 shadow-soft">
                      <div className="row g-0 h-100">
                        <div className="col-12 col-sm-5">
                          <img
                            src={youthGroup}
                            alt="Youth sharing stories"
                            className="img-fluid h-100 w-100 object-fit-cover"
                          />
                        </div>
                        <div className="col-12 col-sm-7">
                          <div className="card-body">
                            <h5 className="card-title">Our Youth, Our Leaders</h5>
                            <p className="card-text mb-0">
                              Youth remind leaders that young people deserve a seat at the table.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News posts */}
        <section className="py-5">
          <div className="container">
            <h2 className="text-center mb-1">
              Where We C.H.E.E.R.S. – Follow our Journey!
            </h2>
            <p className="text-center mb-4">
              Follow us on Facebook to see our latest updates.
            </p>

            <h5 className="mb-3">Latest Facebook Posts</h5>

            {fbStatus === "loading" && (
              <p className="text-muted">Loading latest posts…</p>
            )}

            {fbStatus === "error" && (
              <div className="alert alert-warning" role="alert">
                {fbError}{" "}
                <a
                  href={FACEBOOK_PAGE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="alert-link"
                >
                  View on Facebook
                </a>
              </div>
            )}

            {fbStatus === "success" && fbPosts.length === 0 && (
              <p className="text-muted mb-0">
                No recent posts to show yet. Check back soon or{" "}
                <a href={FACEBOOK_PAGE_URL} target="_blank" rel="noreferrer">
                  visit our Facebook page
                </a>
                .
              </p>
            )}

            {fbPosts.length > 0 && (
                fbPosts.map((post, idx) => (
                    (idx !== 0)? <Post post={post} /> : null
                ))
            )}
          </div>
        </section>

        {/* Mentorship PDF CTA */}
        <section className="py-5 bg-light">
          <div className="container text-center">
            <a
              href="/api/pdf/2"
              className="btn btn-warning btn-lg fw-bold px-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              MENTORSHIP PROGRAM PDF
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Impact;
