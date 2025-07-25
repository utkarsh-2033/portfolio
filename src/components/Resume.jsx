import React from "react";
import { FaArrowRight, FaDotCircle } from "react-icons/fa";

const Resume = (props) => (
  <article {...props} className={`resume ${props.className || ""}`.trim()}>
    <header>
      <h2 className="h2 article-title">Resume</h2>
    </header>
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          {/* Placeholder for ion-icon */}
          <span
            style={{
              display: "inline-block",
              width: 20,
              height: 20,
              background: "#ccc",
              borderRadius: "50%",
            }}
          ></span>
        </div>
        <h3 className="h3">Education</h3>
      </div>
      <ol className="timeline-list">
        <li className="timeline-item">
          <h4 className="h4 timeline-item-title">
            JSS Academy of Technical Education,Noida
          </h4>
          <span>2023 — 2027</span>
          <p className="timeline-text">
            B.Tech - Computer Science and Engineering.
          </p>
          <p className="timeline-text">CGPA -8.78</p>
        </li>
        <li className="timeline-item">
          <h4 className="h4 timeline-item-title">
            GN National Public School,Gorakhpur
          </h4>
          <span>2020-2022</span>
          <p className="timeline-text">Class 12th - CBSE - PCM</p>
          <p className="timeline-text">97.4 %</p>
        </li>
        <li className="timeline-item">
          <h4 className="h4 timeline-item-title">
            St Thomas School ,Khalilabad
          </h4>
          <span>2018 — 2020</span>
          <p className="timeline-text">Class 10th - ICSE</p>
          <p className="timeline-text">98.4 %</p>
        </li>
      </ol>
    </section>
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          {/* Placeholder for ion-icon */}
          <span
            style={{
              display: "inline-block",
              width: 20,
              height: 20,
              background: "#ccc",
              borderRadius: "50%",
            }}
          ></span>
        </div>
        <h3 className="h3">Experience</h3>
      </div>
      <ol className="timeline-list">
        <li className="timeline-item">
          <h4 className="h4 timeline-item-title">React Developer</h4>
          <span>Dec 2024 — Jan 2025</span>
          <ul className="timeline-text">
            <li>
              <FaArrowRight /> Contributed to dashboard development, implementing
              Redux for efficient state management and seamless data flow.
            </li>
            <li>
              <FaArrowRight /> Improved user experience and performance by
              optimizing data handling and component reusability.
            </li>
            <li>
              <FaArrowRight /> Worked with Next.js, Tailwind CSS, and Redux to
              develop scalable solutions.
            </li>
          </ul>
        </li>
      </ol>
    </section>
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          {/* Placeholder for ion-icon */}
          <span
            style={{
              display: "inline-block",
              width: 20,
              height: 20,
              background: "#ccc",
              borderRadius: "50%",
            }}
          ></span>
        </div>
        <h3 className="h3">Extracurriculars</h3>
      </div>
      <ol className="timeline-list">
        <li className="timeline-item">
          <h4 className="h4 timeline-item-title">Programmer & Web Developer </h4>
          <span>Microsoft Mobile Innovation Lab — College Tech Society  </span>
          <ul className="timeline-text">
            <li>
              <FaArrowRight />  Contributed to
 technical projects and organized workshops , seminars and, coding events.
            </li>
            {/* <li>
              <FaArrowRight /> Improved user experience and performance by
              optimizing data handling and component reusability.
            </li>
            <li>
              <FaArrowRight /> Worked with Next.js, Tailwind CSS, and Redux to
              develop scalable solutions.
            </li> */}
          </ul>
        </li>
      </ol>
    </section>
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          {/* Placeholder for ion-icon */}
          <span
            style={{
              display: "inline-block",
              width: 20,
              height: 20,
              background: "#ccc",
              borderRadius: "50%",
            }}
          ></span>
        </div>
        <h3 className="h3">Achievements</h3>
      </div>
      <ol className="timeline-list">
        <li className="timeline-item">
          <h4 className="h4 timeline-item-title">EY Techathon 5.0</h4>
          <span>Top 2% Finalist</span>
          <p className="timeline-text">
            Led a team to be selected to top 2% from 50,000+ participants
          </p>
        </li>
        <li className="timeline-item">
          <h4 className="h4 timeline-item-title">Smart India Hackathon</h4>
          <span>Internal SIH Shortlisted</span>
        </li>
        <li className="timeline-item">
          <h4 className="h4 timeline-item-title">
            Reliance Foundation Scholar 2023
          </h4>
          <span>Reliance Foundation</span>
          <p className="timeline-text">
            Selected Among 50000 students across India based on online assessments tests and academic excellence.
          </p>
        </li>

        <li className="timeline-item">
          <h4 className="h4 timeline-item-title">Academic Achievements</h4>
          <span>
            District Topper (X ICSE - 98.4%) & Top 5 in District (XII CBSE -
            97.4%)
          </span>
          {/* <p className="timeline-text"></p> */}
        </li>
      </ol>
    </section>
    {/* <section className="skill">
      <h3 className="h3 skills-title">My skills</h3>
      <ul className="skills-list content-card">
        <li className="skills-item">
          <div className="title-wrapper">
            <h5 className="h5">Web design</h5>
            <data value="80">80%</data>
          </div>
          <div className="skill-progress-bg">
            <div className="skill-progress-fill" style={{ width: "80%" }}></div>
          </div>
        </li>
        <li className="skills-item">
          <div className="title-wrapper">
            <h5 className="h5">Graphic design</h5>
            <data value="70">70%</data>
          </div>
          <div className="skill-progress-bg">
            <div className="skill-progress-fill" style={{ width: "70%" }}></div>
          </div>
        </li>
        <li className="skills-item">
          <div className="title-wrapper">
            <h5 className="h5">Branding</h5>
            <data value="90">90%</data>
          </div>
          <div className="skill-progress-bg">
            <div className="skill-progress-fill" style={{ width: "90%" }}></div>
          </div>
        </li>
        <li className="skills-item">
          <div className="title-wrapper">
            <h5 className="h5">WordPress</h5>
            <data value="50">50%</data>
          </div>
          <div className="skill-progress-bg">
            <div className="skill-progress-fill" style={{ width: "50%" }}></div>
          </div>
        </li>
      </ul>
    </section> */}
  </article>
);

export default Resume;
