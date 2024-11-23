import React from 'react'
import './Hero.css'
import profilePhoto from "../../assets/profilePhoto.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";


const Hero = () => {
  return (
    <div className="hero">
      <img src={profilePhoto} alt="" />
      <h1>
        <span>I'm Raghavendra Kodavalla,</span> frontend developer based in
        India.
      </h1>
      <p>
        I'm a dedicated full-stack developer with expertise in React,
        JavaScript, and modern web technologies. I thrive on building
        responsive, user-friendly applications and continuously exploring the
        latest in tech.{" "}
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with Me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a
            className="anchor-link"
            href="https://drive.google.com/file/d/1YVs_LlD46zY2lC1CBDKV3sFtFw4-r06C/view?usp=drive_link"
            // target="_blank"
            // rel="noopener noreferrer"
          >
            My Resume
          </a>
        </div>
        {/* <div className="hero-resume">
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="https://drive.google.com/file/d/1YVs_LlD46zY2lC1CBDKV3sFtFw4-r06C/view?usp=drive_link"
          >
            My Resume
          </AnchorLink>
        </div> */}
      </div>
    </div>
  );
}

export default Hero
