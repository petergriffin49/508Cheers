import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import t1 from "../assets/imgs/img6.webp"
import t2 from "../assets/imgs/img7.webp"
import t3 from "../assets/imgs/img8.webp"
import b1 from "../assets/imgs/img9.webp"
import b2 from "../assets/imgs/img10.webp"
import b3 from "../assets/imgs/img11.webp"





function Programs() {
  return (
    <>
      <Navbar />

      <main className="py-4">
        {/* Top Hero Images */}
        <section className="container mb-4">
          <div className="row g-3 justify-content-center text-center">
            <div className="col-6 col-md-4">
              <img
                src={t1}
                alt="Youth program 1"
                className="img-fluid rounded-circle"
              />
            </div>
            <div className="col-6 col-md-4">
              <img
                src={t2}
                alt="Youth program 2"
                className="img-fluid rounded-circle"
              />
            </div>
            <div className="col-6 col-md-4 d-none d-md-block">
              <img
                src={t3}
                alt="Youth program 3"
                className="img-fluid rounded-circle"
              />
            </div>
          </div>
        </section>

        {/* Youth Program Offerings */}
        <section className="container mb-5">
          <h2 className="fw-bold mb-4">Youth Program Offerings</h2>

          <div className="mb-4">
            <h4 className="fw-semibold">
              Community Service, Advocacy &amp; Equity
            </h4>
            <p className="mb-0">
              Volunteer-driven projects that uplift unsheltered and under-served
              families through collaboration, compassion, and community action.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="fw-semibold">Food Insecurity Sports Clinics</h4>
            <p className="mb-0">
              Partnering with local high school &amp; college teams to offer
              free training for youth. Instead of payment, youth bring food
              donations; supporting community meals, food banks, and food
              pantries while learning about food insecurity, accessing food
              resources, and mutual aid.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="fw-semibold">Cultural Cooking Program</h4>
            <p className="mb-0">
              Youth learn culinary skills and cultural traditions while
              preparing meals for families in need, promoting heritage, unity,
              and wellness through food, storytelling, and community service.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="fw-semibold">Girls Mentorship</h4>
            <p className="mb-0">
              Mentorship, R.A.D. self-defense training, and menstrual equity
              projects addressing period poverty and building confidence and
              leadership.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="fw-semibold">
              Health &amp; Wellness &amp; Future Readiness
            </h4>
            <p className="mb-0">
              Building strong minds, bodies, and futures through mental health
              support, fitness, financial literacy, and career exploration,
              empowering youth to thrive personally and professionally.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="fw-semibold">
              Teen Trauma Tuesday &amp; Wellness Wednesday
            </h4>
            <p className="mb-0">
              Two youth-led virtual mental health programs in partnership with
              Worcester ACTs, offering trauma-informed support and mindfulness
              practices that help teens heal, grow, and build resilience.
            </p>
          </div>

          <div className="text-center mt-4">
            <a
              href="/pdfs/program-offerings.pdf"
              className="btn btn-warning btn-lg fw-semibold"
            >
              PROGRAM OFFERINGS PDF
            </a>
          </div>
        </section>

        {/* Middle Images */}
        <section className="container mb-4">
          <div className="row g-3 justify-content-center text-center">
            <div className="col-6 col-md-4">
              <img
                src={b1}
                alt="Girls empowerment 1"
                className="img-fluid rounded-circle"
              />
            </div>
            <div className="col-6 col-md-4">
              <img
                src={b2}
                alt="Girls empowerment 2"
                className="img-fluid rounded-circle"
              />
            </div>
            <div className="col-6 col-md-4 d-none d-md-block">
              <img
                src={b3}
                alt="Girls empowerment 3"
                className="img-fluid rounded-circle"
              />
            </div>
          </div>
        </section>

        {/* C.H.E.E.R.S. for Girls Empowerment & Strength */}
        <section className="container mb-5">
          <h2 className="fw-bold text-center mb-3">
            C.H.E.E.R.S. for Girls Empowerment &amp; Strength
          </h2>

          <div className="mb-4">
            <h4 className="fw-semibold">Build Strong Minds &amp; Voices</h4>
            <p className="mb-0">
              Through engaging activities and meaningful discussions, we help
              our girls to build confidence, recognize their strengths, and
              develop essential life skills. By learning to speak up, manage
              stress, build healthy relationships, serve their communities, and
              connect with others, our girls grow into powerful advocates for
              menstrual equity, for one another, and for their dreams.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="fw-semibold">Empowered Inside and Out</h4>
            <p className="mb-0">
              Our commitment to building strong minds extends to physical
              well-being &amp; safety. Our girls only workouts, and Rape,
              Aggression, Defense (R.A.D.) self-defense training empowers girls
              with practical skills to protect themselves. By focusing on both
              mental &amp; physical health, we create a comprehensive program
              that supports the overall development of our participants.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="fw-semibold">Healthy Body, Healthy Habits</h4>
            <p className="mb-0">
              C.H.E.E.R.S. promotes positive body image by encouraging girls to
              appreciate and care for their bodies. Our program features
              women-led workouts, nutrition-focused cooking classes, and
              hands-on mentorship to help girls build self-confidence and
              develop a healthy relationship with their minds, emotions, and
              uniqueness.
            </p>
          </div>

          <div className="text-center mt-4">
            <a
              href="/pdfs/girls-empowerment-program.pdf"
              className="btn btn-warning btn-lg fw-semibold"
            >
              GIRLS EMPOWERMENT PROGRAM PDF
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Programs;
