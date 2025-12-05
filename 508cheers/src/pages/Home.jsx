import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import p1 from "../assets/imgs/img2.webp";
import p2 from "../assets/imgs/img3.webp";
import p3 from "../assets/imgs/img5.webp";

function Home() {
  const pillars = [
    {
      title: "Community Service & Connection",
      copy:
        "Creating opportunities for youth to lead projects that uplift the unsheltered, underserved, and local families in need.",
    },
    {
      title: "Health, Wellness & Future Readiness",
      copy:
        "Promoting mental, social, emotional, and physical well-being through education, fitness, financial literacy, and self-care practices.",
    },
    {
      title: "Equity & Empowerment",
      copy:
        "Advocating for fairness, inclusion, and leadership among youth and community members.",
    },
    {
      title: "Education & Enrichment",
      copy:
        "Providing hands-on experiences in healthy habits, cooking, career readiness, and civic engagement that inspire lifelong learning.",
    },
    {
      title: "Resilience & Representation",
      copy:
        "Encouraging youth to harness the power of their stories and lived experiences to advocate for change at City Council, School Committee meetings, and the State House.",
    },
    {
      title: "Sustainability & Service",
      copy:
        "Building programs that address food insecurity and resource access through mutual aid, food donations, and community partnerships.",
    },
  ];

  const [content, setContent] = React.useState({
    homeArticleLink:
      "https://www.telegram.com/story/news/2025/04/30/508-cheer-gives-kids-in-worcester-a-second-chance-to-find-their-voice/83271502007/",
    homeArticleTitle: "508 C.H.E.E.R.S. gives youth in Worcester second chance!",
  });

  React.useEffect(() => {
    const loadContent = async () => {
      try {
        const res = await fetch("/api/get-content");
        if (!res.ok) return;
        const data = await res.json();
        if (data.message === "success" && data.data) {
          setContent((prev) => ({
            ...prev,
            ...data.data,
          }));
        }
      } catch (err) {
        // ignore and use defaults
      }
    };
    loadContent();
  }, []);

  return (
    <>
      <Navbar />

      <section className="position-relative mb-4">
        <div className="cheers-hero">
          <img src={p1} className="d-block w-100" alt="Youth leading" />
          <div className="hero-overlay">
            <div className="container">
              <div className="hero-content">
                <span className="badge-pill mb-2">Youth Led · Community Fed</span>
                <h1 className="display-6 fw-bold mb-3">
                  Empowering Worcester youth through leadership, advocacy, and service.
                </h1>
                <p className="lead mb-4">
                  Join us as we mentor, nourish, and uplift our community together.
                </p>
                <div className="d-flex flex-wrap gap-3 cta-row">
                  <a
                    href="https://secure.qgiv.com/for/508cheers"
                    className="btn btn-donate-gradient fw-bold"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Donate Today
                  </a>
                  <Link to="/get-involved" className="btn btn-outline-light">
                    Volunteer / Get Involved
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="section-card text-center mb-4 shadow-soft">
            <img src="/img/logo.png" id="big-logo" alt="big logo" />
            <a href="/api/pdf/4"
               className="highlight-bar mb-2"
               style={{ textDecoration: 'none' }}>
                What We C.H.E.E.R.S. For
            </a>
            <p className="text-muted mb-1">
              “When we GIVE, we GROW!”
            </p>
          </div>

          <div className="gallery-grid mb-5">
            {[p1, p2, p3].map((img, idx) => (
              <img key={idx} src={img} alt={`Gallery ${idx + 1}`} />
            ))}
          </div>

            <div className="container">
                <div className="text-center mb-4">
                    <div className="badge-pill mb-2">Our Values</div>
                    <h2 className="mb-2">How we C.H.E.E.R.S.</h2>
                </div>
                <div className="row justify-content-center text-start">
                    <div className="col-12 col-md-10 col-lg-8">
                        <p className="text-left mb-4">
                            <h6>C- Community & Connection</h6> Creating opportunities for youth
                            to lead projects that uplift the unsheltered, underserved, and
                            local families in need.
                        </p>
                        <p className="text-left mb-4">
                            <h6>H- Health & Wellness</h6> Promoting mental, emotional, and
                            physical well-being through education, fitness, and self-care
                            practices.
                        </p>
                        <p className="text-left mb-4">
                            <h6>E- Equity & Empowerment</h6> Advocating for fairness, inclusion,
                            and leadership among youth and community members.
                        </p>
                        <p className="text-left mb-4">
                            <h6>E- Education & Enrichment</h6> Providing hands-on experiences in
                            nutrition, cooking, career readiness, and civic engagement
                            that inspire lifelong learning.
                        </p>
                        <p className="text-left mb-4">
                            <h6>R- Resilience & Representation</h6>Encouraging youth to harness
                            the power of their stories and lived experiences to advocate
                            for change at City Hall, School Committee meetings, and the
                            State House.
                        </p>
                        <p className="text-left mb-4">
                            <h6>S- Sustainability & Service</h6>
                            Building programs that address food insecurity and resource
                            access through mutual aid, cultural food donations, and
                            community partnerships.
                        </p>
                    </div>
                </div>
            </div>
            {/*
          <div className="pillars-grid mb-5">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="pillar-card">
                <h5 className="mb-2">{pillar.title}</h5>
                <p className="mb-0 text-muted">{pillar.copy}</p>
              </div>
            ))}
          </div>
          */}

          <div className="row g-5">
            <div className="col-lg-4">
              <div className="section-card h-100">
                <div className="ratio ratio-16x9 mb-3">
                  <iframe
                    src="https://www.youtube.com/embed/f7MMh8wfkAQ?si=lhVhqzXGtVBh0d2W"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <h3 className="h5">Your Mental Health Matters Art Expression Project</h3>
                <p className="text-muted mb-0">
                  Our youth learn to identify and understand their emotions and express them in healthy ways.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="section-card h-100">
                <div className="ratio ratio-16x9 mb-3">
                  <iframe
                    src="https://www.youtube.com/embed/Uh2F8r3LMa4?si=qx-epiREmRKmaghm"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <h3 className="h5">Food Insecurity: Community Garden</h3>
                <p className="text-muted mb-0">
                  Youth work in the garden to learn about food insecurity, healthy eating, and cultural cooking.
                </p>
              </div>
            </div>
              <div className="col-lg-4">
                  <div className="section-card h-100">
                      <div className="ratio ratio-16x9 mb-3">
                          <iframe
                              src="https://www.youtube.com/embed/Uqa_WvxXdl0?si=SoHDQ7UHXawiQpOR"
                              title="YouTube video player"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                          ></iframe>
                      </div>
                      <h3 className="h5">Youth Advocacy</h3>
                      <p className="text-muted mb-0">
                          The importance of community and finding a place where you belong. 508 C.H.E.E.R.S. isn't just a place to go, it's a place to grow!
                      </p>
                  </div>
              </div>
          </div>

          <div className="section-card mt-5 text-center">
            <a
              id="article-link"
              target="_blank"
              rel="noopener noreferrer"
              href={content.homeArticleLink}
              className="btn btn-info"
            >
              Read the Telegram &amp; Gazette Article Here
            </a>
            <p>
                "Puello said. "I was getting into a lot of trouble at home and at school, I wasn't involved in my community, I can say that I was a bad kid."
                Puello said she began to change when she became connected with 508 C.H.E.E.R.S. (Community Health Equity Empowerment Resources and Service),
                a nonprofit group aimed at helping youth in the city discover the benefits of community service while providing a safe social circle for students after school."
            </p>
            <img
              src="/img/img1.webp"
              alt="508 C.H.E.E.R.S. gives youth a second chance"
              className="img-fluid w-100 mt-3 rounded shadow-sm"
            />
            <h1 className="mt-3">{content.homeArticleTitle}</h1>
          </div>

          <div className="row g-3 mt-4">
            {[
              { href: "/api/pdf/1", label: "Fundraiser" },
              { href: "/api/pdf/2", label: "Girls Empowerment" },
              { href: "/api/pdf/3", label: "Program Offerings" },
              { href: "/api/pdf/4", label: "C.H.E.E.R.S." },
            ].map((pdf) => (
              <div className="col-12 col-md-6" key={pdf.label}>
                <a
                  href={pdf.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pdf-btn"
                >
                  {pdf.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
