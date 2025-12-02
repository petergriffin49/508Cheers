import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import youthGroup from "../assets/imgs/banner.png";

function Impact() {
  return (
    <>
      <Navbar />

      <main className="impact-page mt-4">
        {/* Hero video + title */}
        <section className="py-4 bg-light">
          <div className="container">
            <h2 className="text-center mb-3">
              What are Our Youth Saying About 508 C.H.E.E.R.S.?
            </h2>

            <div className="row justify-content-center">
              <div className="col-12 col-md-8">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/VIDEO_ID"
                    title="Youth testimonial"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="py-4 bg-primary text-white text-center">
          <div className="container">
            <div className="row gy-3">
              <div className="col-12 col-md-4">
                <h3 className="mb-1">+99</h3>
                <p className="mb-0">Meals Served Monthly</p>
              </div>
              <div className="col-12 col-md-4">
                <h3 className="mb-1">+1200</h3>
                <p className="mb-0">Community members fed annually.</p>
              </div>
              <div className="col-12 col-md-4">
                <h3 className="mb-1">$1</h3>
                <p className="mb-0">
                  Join the Dance Circle with a small donation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Group image */}
        <section className="bg-white">
          <div className="container-fluid p-0">
            <img
              src={youthGroup}
              alt="Youth group"
              className="img-fluid w-100"
            />
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
                <ul className="list-unstyled mb-0">
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
                <ul className="list-unstyled mb-0">
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
            <h2 className="text-center mb-4">Look at How we Cheer!</h2>

            <div className="row gy-4">
              {/* Video 1 */}
              <div className="col-12 col-md-6">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="ratio ratio-16x9 mb-3">
                        <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/xzsryZsduLQ?si=6AE3m15Zy7RQTFPx"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                    </div>
                      <h5 className="card-title">Fun! Fun! Fun!</h5>
                      <p className="card-text">
                          At 508 C.H.E.E.R.S. we didn&apos;t just learn how to
                          better our community, we had a blast doing it!
                      </p>
                  </div>
                </div>
              </div>

              {/* Story card */}
              <div className="col-12 col-md-6">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">
                      When the Jobs Disappear, the Voices Rise
                    </h5>
                    <p className="card-text">
                      This spring, funding cuts to YouthWorks left dozens of
                      Worcester youth without jobs and without the opportunities
                      they deserve. But instead of staying quiet, our youth at
                      508 C.H.E.E.R.S. chose to speak up.
                    </p>
                    <p className="card-text mb-0">
                      Together, they shared their stories, advocated for change,
                      and showed what youth power really looks like.
                    </p>
                  </div>
                </div>
              </div>

              {/* Video 2 */}
              <div className="col-12 col-md-6">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="ratio ratio-16x9 mb-3">
                        <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/0Q9-dQLuO9Q?si=NjSUfoeUq9OYKM68"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                    </div>
                      <h5 className="card-title">
                          Hennessy Public Testimonies and Youth Voice
                      </h5>
                      <p className="card-text mb-0">
                          Our youth advocate at City Council, School Committee, and
                          State House meetings, making sure their voices are heard.
                    </p>
                  </div>
                </div>
              </div>

              {/* Photo / speaker */}
              <div className="col-12 col-md-6">
                <div className="card h-100">
                  <div className="row g-0 h-100">
                    <div className="col-12 col-sm-5">
                      <img
                        src="https://via.placeholder.com/400x300"
                        alt="Youth speaking"
                        className="img-fluid h-100 w-100 object-fit-cover"
                      />
                    </div>
                    <div className="col-12 col-sm-7">
                      <div className="card-body">
                        <h5 className="card-title">Our Youth, Our Leaders</h5>
                        <p className="card-text mb-0">
                          Youth from 508 C.H.E.E.R.S. share their stories at
                          public hearings, reminding leaders that young people
                          deserve a seat at the table.
                        </p>
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

            <h5 className="mb-3">News Posts</h5>

            <div className="row gy-3">
              <div className="col-12">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h6 className="card-title mb-1">
                      Community Partners Appreciation Breakfast
                    </h6>
                    <p className="card-text small mb-2">
                      This morning, Youth Director Edith Collins welcomed us to
                      the first-ever Community Partners Appreciation Breakfast…
                    </p>
                    <button className="btn btn-outline-secondary btn-sm">
                      Read More
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h6 className="card-title mb-1">
                      Angels Answer, Inc. haul
                    </h6>
                    <p className="card-text small mb-2">
                      We&apos;re so grateful to receive this care box from
                      Angels Answer Inc., with the opportunity to pick up other
                      items on site…
                    </p>
                    <button className="btn btn-outline-secondary btn-sm">
                      Read More
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h6 className="card-title mb-1">Thanksgiving Meal Deals</h6>
                    <p className="card-text small mb-2">
                      This holiday season, our youth helped share meal deals
                      with families throughout the city…
                    </p>
                    <button className="btn btn-outline-secondary btn-sm">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mentorship PDF CTA */}
        <section className="py-5 bg-light">
          <div className="container text-center">
            <a
              href="/pdfs/mentorship-program.pdf"
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
