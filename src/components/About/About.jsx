import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        {/* <div className="about-left">
          <img src={profile_img} alt="" />
        </div> */}
        <div className="about-right">
          <div className="about-para">
            <p>
              Hello! I'm Raghavendra Kodavalla, a passionate software developer
              specializing in full-stack development. With a strong foundation
              in Java and web technologies, I've developed a deep understanding
              of both front-end and back-end development. My experience ranges
              from building interactive web interfaces to integrating APIs that
              provide seamless functionality.
            </p>
            <p>
              I have a knack for problem-solving, and I love creating web
              applications that are not only visually appealing but also provide
              a smooth user experience. Over the years, I've refined my skills
              in JavaScript, React.js, and MySQL, allowing me to work on diverse
              projects that challenge me to learn and grow.
            </p>
            <p>
              I’ve completed several hands-on internships and training programs,
              where I developed responsive websites, utilized modern frameworks
              like React.js, and deepened my understanding of software
              development best practices. I enjoy keeping up with the latest
              trends in technology, experimenting with new tools, and applying
              what I learn to real-world projects.
            </p>
          </div>
          {/* <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Bootstrap</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>ReactJs</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Redux</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="above-achievements">
        <div className="above-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="above-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="above-achievement">
          <h1>10+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div> */}
    </div>
  );
};

export default About;
