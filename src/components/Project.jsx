import { useState } from "react";
import { FaEye, FaGithub, FaChevronDown } from "react-icons/fa";

const PROJECTS = [
  {
    title: "ClipIQ",
    category: "Full Stack",
    content: "A cross-platform SaaS platform for seamless screen recording, real-time video sharing, and AI-assisted collaboration—designed for distributed teams, educators, and product creators.",
    img: "assets/images/clipiq.png",
    github: "https://github.com/utkarsh-2033/ClipIQ",
    Live: "https://clipiq.vercel.app/",
  },
  {
    title: "SkillSathiAI",
    category: "Full Stack",
    content: "SkillSathi AI is an AI-driven platform that empowers users to assess their skills, identify gaps, and receive personalized learning recommendations to achieve career goals effectively.",
    img: "assets/images/skillsathi.png",
    github: "https://github.com/utkarsh-2033/SkillSathiAi",
    Live: "https://skill-sathi-ai.vercel.app/",
  },
  {
    title: "Interviewify",
    category: "Full Stack",
    content: "Interviewify is an AI-powered mock interview platform that helps users practice technical interviews by generating role-specific questions and providing real-time AI-driven feedback and ratings.",
    img: "assets/images/interview.png",
    github: "https://github.com/utkarsh-2033/Interviewify",
    Live: "https://interviewify-nine.vercel.app/",
  },
  {
    title: "YogaFusion",
    category: "Full Stack",
    content: "YogaFusion is an online platform for shopping yoga products and reading yoga related blogs.",
    img: "assets/images/yoga.png",
    github: "https://github.com/utkarsh-2033/YogaFusion-A-smart-Yoga-shop",
    Live: "https://yoga-fusion-yoga-products-sto-git-39d370-utkarsh-2033s-projects.vercel.app/",
  },
  {
    title: "Portfolio Website",
    category: "Frontend",
    content: "",
    img: "assets/images/port.png",
    github: "https://github.com/utkarsh-2033/portfolio",
    Live: "https://portfolio-xi-fawn-35.vercel.app/",
  },
  {
    title: "Central Axis Clone",
    category: "Frontend",
    content: "",
    img: "assets/images/clone.png",
    github: "https://github.com/utkarsh-2033/central-axis-clone",
    Live: "https://central-axis-clone-63rk.vercel.app/",
  },
  {
    title: "Therapist Website",
    category: "Frontend",
    content: "",
    img: "assets/images/therapist.png",
    github: "https://github.com/utkarsh-2033/therapist-site",
    Live: "https://therapist-site-assignment-q349.vercel.app/",
  },
  {
    title: "Admin Dashboard",
    category: "Frontend",
    content: "",
    img: "assets/images/admin.png",
    github:
      "https://github.com/utkarsh-2033/Admin-Dahboard-SocialMediaApp-Next.js-",
    Live: "https://admin-dashboard-social-media-app-next-js.vercel.app/",
  },
  {
    title: "Gemini Clone",
    category: "Frontend",
    content: "",
    img: "assets/images/gemini.png",
    github: "https://github.com/utkarsh-2033/Gemini-clone-Reactjs-Project",
    Live: "https://gemini-clone-reactjs-project.vercel.app/",
  },
  {
    title: "FoodApp",
    category: "Frontend",
    content: "",
    img: "assets/images/food.png",
    github: "https://github.com/utkarsh-2033/FoodApp-Reactjs",
    Live: "https://food-app-reactjs-phi.vercel.app/",
  },
  {
    title: "Weather App",
    category: "Frontend",
    content: "",
    img: "assets/images/weather.png",
    github: "https://github.com/utkarsh-2033/WeatherAPP",
    Live: "https://weather-app-alpha-one-15.vercel.app/",
  },
];

const CATEGORIES = [
  { key: "all", label: "All" },
  // { key: 'applications', label: 'Applications' },
  { key: "Full Stack", label: "Full Stack" },
  { key: "Frontend", label: "Frontend" },
];

// const placeholder = '/src/assets/images/placeholder.png';

const Portfolio = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectOpen, setSelectOpen] = useState(false);

  const filteredProjects =
    selectedCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <article {...props} className={`project ${props.className || ""}`.trim()}>
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>
      <section className="projects">
        <ul className="filter-list">
          {CATEGORIES.map((cat) => (
            <li className="filter-item" key={cat.key}>
              <button
                className={
                  "filter-btn" + (selectedCategory === cat.key ? " active" : "")
                }
                data-filter-btn
                onClick={() => setSelectedCategory(cat.key)}
              >
                {cat.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="filter-select-box">
          <button
            className={`filter-select${selectOpen ? " active" : ""}`}
            data-select
            onClick={() => setSelectOpen((open) => !open)}
          >
            <div className="select-value" data-selecct-value>
              {CATEGORIES.find((c) => c.key === selectedCategory)?.label ||
                "Select category"}
            </div>
            <div className="select-icon">
              {/* Placeholder for ion-icon */}
              <span
                style={{
                  display: "inline-block",
                  width: 20,
                  height: 20,
                  background: "#ccc",
                  borderRadius: "50%",
                }}
              >
                <FaChevronDown />
              </span>
            </div>
          </button>
          <ul
            className="select-list"
            style={{ display: selectOpen ? "block" : "none" }}
          >
            {CATEGORIES.map((cat) => (
              <li className="select-item" key={cat.key}>
                <button
                  data-select-item
                  onClick={() => {
                    setSelectedCategory(cat.key);
                    setSelectOpen(false);
                  }}
                >
                  {cat.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <ul className="project-list">
          {filteredProjects.map((project, idx) => (
            <li
              className={`project-item active`}
              data-filter-item
              data-category={project.category}
              key={project.title + idx}
            >
              <a href={project.Live} target="_blank" rel="noopener noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    {/* Placeholder for ion-icon */}
                    <span
                      style={{
                        display: "inline-block",
                        width: 20,
                        height: 20,
                        // background: "#c",
                        borderRadius: "50%",
                      }}
                    >
                      <FaEye/>
                    </span>
                  </div>
                  <img
                    src={project.img}
                    alt={project.title}
                    loading="lazy"
                    // onError={e => e.target.src = placeholder}
                  />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">
                  {CATEGORIES.find((c) => c.key === project.category)?.label ||
                    project.category}
                </p>
                <p className="project-title">{project.content}</p>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> GitHub Repo
                  </a>
                  <a
                    href={project.Live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaEye /> Live Demo
                  </a>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
