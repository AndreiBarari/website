import React from "react";
import AboutDescription from "../components/aboutComponents/AboutDescription";
import AboutEducation from "../components/aboutComponents/AboutEducation";
import {
  SoftSkills,
  StrongSkills,
} from "../components/aboutComponents/AboutSkills";
import AboutCertificates from "../components/aboutComponents/AboutCertificates";
import AboutExperience from "../components/aboutComponents/AboutExperience";

const About = () => {
  return (
    <div className="main-content about">
      <div className="grid-wrapper">
        <AboutDescription />
        <AboutEducation />
        <StrongSkills />
        <div className="area"></div>
        <SoftSkills />
        <AboutCertificates />
        <AboutExperience />
      </div>
    </div>
  );
};

export default About;
