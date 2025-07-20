import React, { useState } from "react";
import { FaCode, FaGithub, FaLink, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode ,SiGeeksforgeeks  } from "react-icons/si";

const tools = [
  {
    name: "Node.js",
    avatar: "assets/images/node.png",
    // name: "Node.jsS",
  },
  {
    name: "Next.js",
    avatar: "assets/images/skill1.png",
    // name: "Next.js",
  },
  {
    name: "Typescript",
    avatar: "assets/images/ts.png",
    // text: "Typescript",
  },
  {
    name: "React.js",
    avatar: "assets/images/react.png",
    // text: "React.js",
  },
  {
    name: "Tailwind CSS",
    avatar: "assets/images/tailwind.png",
    // text: "Tailwind CSS",
  },
  {
    name: "PostgreSQL",
    avatar: "assets/images/postgre.png",
    // text: "PostgreSQL",
  },
  {
    name: "MongoDB",
    avatar: "assets/images/mongo.png",
    // text: "MongoDB",
  },
  {
    name: "Redux Toolkit",
    avatar: "assets/images/redux.png",
    // text: "Redux Toolkit",
  },
  {
    name: "Shadcn UI",
    avatar: "assets/images/shadcn.png",
    // text: "Shadcn UI",
  },
  {
    name: "Git",
    avatar: "assets/images/git.png",
    // text: "Git",
  },
  {
    name: "Postman",
    avatar: "assets/images/postman.png",
    // text: "Postman",
  },
];

const socials = [
  {
    icon: <FaGithub />,
    
    name: "https://github.com/utkarsh-2033",
  },
  {
    icon: <FaLinkedinIn />,
    name: "https://www.linkedin.com/in/utkarsh-kr-gupta-myprofile/",
  },
  {
    icon: <SiLeetcode/>,
    name: "https://leetcode.com/u/utkarshg2033/"
  },
  {
    icon: <SiGeeksforgeeks />,
    name: "https://www.geeksforgeeks.org/user/utkarshmey6/"
  },
 
];


const About = (props) => {
  // const [modalOpen, setModalOpen] = useState(false);
  // const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  // const openModal = (testimonial) => {
  //   setSelectedTestimonial(testimonial);
  //   setModalOpen(true);
  // };
  // const closeModal = () => {
  //   setModalOpen(false);
  //   setSelectedTestimonial(null);
  // };

  return (
    <article {...props} className={`about ${props.className || ""}`.trim()}>
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        <p>Hi, I’m Utkarsh — a passionate and driven full-stack developer with a
          strong foundation in the MERN stack, DSA in Java, and a growing
          expertise in AI integration using LLMs, LangChain, and Generative AI.
          I love building impactful tech that solves real-world problems and
          scales beautifully.</p>
        <p>
           Currently, I’m in 3rd year persuing B.Tech in Computer Science and Engineering.
          I'm deeply curious
          about how AI can enhance developer productivity and team
          collaboration. Whether it’s
          designing clean UIs, writing scalable backend APIs, or integrating
          intelligent features powered by LLMs, I enjoy every part of the
          process. I’m currently looking for exciting internship opportunities
          where I can grow while contributing meaningfully to impactful teams
          and products. Let’s build something awesome together.
        </p>
      </section>
      {/* Service Section */}
      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>
        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="assets/images/icon-dev.svg"
                alt="design icon"
                width="40"
                // onError={(e) => (e.target.src = placeholder)}
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Full-stack Web Developer</h4>
              <p className="service-item-text">
                High-quality development of sites at the professional level.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="assets/images/icon-dev.svg"
                alt="camera icon"
                width="40"
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Programmer</h4>
              <p className="service-item-text">
                I love to solve problems and create efficient algorithms using
                DSA in Java.
              </p>
            </div>
          </li>
        </ul>
      </section>
      {/* Tech stack Section */}
      <section className="stack">
        <h3 className="h3 stack-title">My Tech Stack</h3>
        <ul className="stack-list has-scrollbar">
          {tools.map((t, idx) => (
            <li className="stack-item" key={t.name + idx}>
              <div
                className="content-card"
                data-testimonials-item
                // onClick={() => openModal(t)}
                style={{ cursor: "pointer" }}
              >
                <figure className="stack-avatar-box">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    width="80"
                    data-stack-avatar
                  />
                </figure>
                <h4
                  className="h4 stack-item-title"
                  data-stack-title
                >
                  {t.name}
                </h4>
                <div className="stack-text" data-stack-text>
                  <p>{t.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      {/* Modal */}
      {/* {modalOpen && selectedTestimonial && (
        <div className="modal-container active" data-modal-container>
          <div
            className="overlay active"
            data-overlay
            onClick={closeModal}
          ></div>
          <section className="testimonials-modal">
            <button
              className="modal-close-btn"
              data-modal-close-btn
              onClick={closeModal}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 24,
                  height: 24,
                  background: "#ccc",
                  borderRadius: "50%",
                }}
              ></span>
            </button>
            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img
                  src={selectedTestimonial.avatar}
                  alt={selectedTestimonial.name}
                  width="80"
                  data-modal-img
                />
              </figure>
              
              <span
                style={{
                  display: "inline-block",
                  width: 24,
                  height: 24,
                  background: "#ccc",
                  borderRadius: "50%",
                  marginLeft: 8,
                }}
              ></span>
            </div>
            <div className="modal-content">
              <h4 className="h3 modal-title" data-modal-title>
                {selectedTestimonial.name}
              </h4>
              <time dateTime={selectedTestimonial.date}>
                {selectedTestimonial.dateText}
              </time>
              <div data-modal-text>
                <p>{selectedTestimonial.text}</p>
              </div>
            </div>
          </section>
        </div>
      )} */}
      {/* Accounts Section */}
      <section className="accounts">
        <h3 className="h3 accounts-title">Socials</h3>
        <ul className="accounts-list has-scrollbar">
          {socials.map((tool, idx) => (
            <li className="accounts-item" key={idx}>
              <a
                href={tool.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  {tool.icon ? (
                    <span style={{ fontSize: 42, color: "white" }}>{tool.icon}</span>
                  ) : ( 
                  <span
                  style={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 24,
                    textAlign: "center",
                    letterSpacing: 0.5,
                    textShadow: "0 1px 4px rgba(0,0,0,0.3)",
                  }}
                >
                </span>
                )}
              </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default About;
