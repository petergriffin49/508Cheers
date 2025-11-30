import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import p1 from "../assets/imgs/img2.webp";
import p2 from "../assets/imgs/img3.webp";
import p3 from "../assets/imgs/img5.webp";

function Home() {
  return (
    <>
      <Navbar />

      <section id="carousel">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="4000">
              <img src={p1} className="d-block w-100" alt="img2" />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={p2} className="d-block w-100" alt="img3" />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={p3} className="d-block w-100" alt="img4" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <div className="text-center cheers-txt">
        <img src="img/logo.png" id="big-logo" alt="big logo" />

        <h2>What we C.H.E.E.R.S. For</h2>
        <p>
          C- Community Service & Connection  Creating opportunities for youth to
          lead projects that uplift the unsheltered, underserved, and local
          families in need.  
        </p>
        <p>
          H- Health & Wellness & Future Readiness Promoting mental, social,
          emotional, and physical well-being through education, fitness,
          financial literacy and self-care practices. 
        </p>
        <p>
          E- Equity & Empowerment Advocating for fairness, inclusion, and
          leadership among youth and community members. 
        </p>
        <p>
          E- Education & Enrichment Providing hands-on experiences in healthy
          habits, cooking, career readiness, and civic engagement that inspire
          lifelong learning.  
        </p>
        <p>
          R- Resilience & Representation Encouraging youth to harness the power
          of their stories and lived experiences to advocate for change at City
          Council, School Committee meetings, and the State House.  
        </p>
        <p>
          S- Sustainability & Service Building programs that address food
          insecurity and resource access through mutual aid, food donations, and
          community partnerships. 
        </p>
        <h4>“When we GIVE, we GROW!”</h4>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6 my-lg-5 mg-sm-4 text-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/f7MMh8wfkAQ?si=lhVhqzXGtVBh0d2W"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <h2>Your Mental Health Matters Art Expression Project</h2>
            <h4>
              Our youth are taught the importance of being able to identify and
              understand their emotions and express them in a healthy manner. 
            </h4>
          </div>
          <div className="col-lg-6 my-lg-5 mg-sm-4 text-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Uh2F8r3LMa4?si=qx-epiREmRKmaghm"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <h2>Food Insecurity What's Going on in the Community Garden</h2>
            <h4>
              Our youth received the opportunity to work in The Pakachoag
              Centers' community garden in Auburn, MA over the summer and learn
              about food insecurity, healthy eating and how to cook their
              favorite cultural meals in a clean and healthy way.
            </h4>
          </div>
        </div>
      </div>

      <div className="text-center">
        <a
          id="article-link"
          target="_blank"
          href="https://www.telegram.com/story/news/2025/04/30/508-cheer-gives-kids-in-worcester-a-second-chance-to-find-their-voice/83271502007/"
        >
          Read the Telegram and Gazette Article Here
        </a>
        <img
          src="img/img1.webp"
          alt="img"
          style={{ marginBottom: "50px" }}
        />
        <h1 style={{ marginBottom: "50px" }}>
          508 C.H.E.E.R.S. gives youth in Worcester second chance!
        </h1>
      </div>

      <div className="row">
        <div className="text-center col-6">
          <a href="/pdf-fund" target="_blank" className="pdf-btn">
            Fundraiser
          </a>
        </div>
        <div className="text-center col-6">
          <a href="/pdf-girls" target="_blank" className="pdf-btn">
            Girls Empowerment
          </a>
        </div>
      </div>
      <div className="row">
        <div className="text-center col-6">
          <a href="/pdf-programs" target="_blank" className="pdf-btn">
            Program Offerings
          </a>
        </div>
        <div className="text-center col-6">
          <a href="/pdf-about" target="_blank" className="pdf-btn">
            C.H.E.E.R.S.
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;