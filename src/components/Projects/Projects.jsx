import React from "react";
import "./Projects.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="projects-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="projects-container">
        {mywork_data.map((work, index) => {
          return <img src={work.w_img} alt="" />;
        })}
      </div>
      <div className="projects-showmore">
        <a
          className="anchor-link"
          href="https://github.com/Raghavendra469"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          Show more
        </a>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default Projects;
