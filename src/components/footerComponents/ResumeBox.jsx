import React from "react";

export const ResumeBox = (props) => {
  return (
    <div className="door">
      <div className="door-top slide "></div>
      <div className="door-bottom slide "></div>
      <a
        href={process.env.PUBLIC_URL + "resume.pdf"}
        target="_blank"
        rel="noopener noreferrer"
        className="social-button"
      >
        Andrei's Resume
      </a>
    </div>
  );
};
