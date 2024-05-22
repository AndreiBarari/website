import React, { useState, useEffect } from "react";
import Timeline from "@mui/lab/Timeline";
import { AiOutlineCode } from "react-icons/ai";
import { MdGridOn } from "react-icons/md";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaReact,
  FaServer,
  FaBootstrap,
  FaSass,
} from "react-icons/fa";
import {
  BasicTimeline,
  OppositeTimeline,
} from "../components/skillsComponents/TimelineLayout";

const techElements = [
  {
    title: "HTML5",
    description:
      "Strong foundation in HTML5, capable of creating well-structured, semantic web pages. Proficient in using HTML5 elements to enhance web accessibility and SEO.",
    icon: <FaHtml5 size={36} />,
  },
  {
    title: "CSS3",
    description:
      "Proficient in CSS3, skilled in styling web pages with modern techniques including Flexbox and Grid. Experienced in creating responsive designs that work across various devices and screen sizes.",
    icon: <FaCss3 size={36} />,
  },
  {
    title: "JavaScript",
    description:
      "Good understanding of JavaScript fundamentals, including ES6+ features. Able to implement interactive functionality and manipulate the DOM effectively. Familiar with asynchronous programming and basic algorithms.",
    icon: <FaJs size={36} />,
  },
  {
    title: "NodeJS",
    description:
      "Basic knowledge of NodeJS, able to set up a simple server and handle basic routing. Familiar with npm and using NodeJS for back-end development tasks.",
    icon: <FaNodeJs size={36} />,
  },
  {
    title: "ExpressJS",
    description:
      "Introductory experience with ExpressJS, understanding of how to create RESTful APIs and manage middleware. Able to set up basic server-side applications using Express.",
    icon: <AiOutlineCode size={36} />,
  },
  {
    title: "MongoDB",
    description:
      "Fundamental understanding of MongoDB, capable of performing basic CRUD operations and understanding of NoSQL database concepts. Able to integrate MongoDB with NodeJS applications.",
    icon: <FaServer size={36} />,
  },
  {
    title: "ReactJS",
    description:
      "Capable of building dynamic web applications using ReactJS. Understands component-based architecture and state management. Familiar with hooks and basic Redux for state handling.",
    icon: <FaReact size={36} />,
  },
  {
    title: "Scss/Sass",
    description:
      "Experienced with SCSS/SASS, leveraging its features to write clean, maintainable, and reusable CSS. Proficient in using variables, nesting, and mixins to streamline styling processes.",
    icon: <FaSass size={36} />,
  },
  {
    title: "MaterialUI",
    description:
      "Comfortable with MaterialUI, capable of implementing Material Design principles in web applications. Able to customize themes and use MaterialUI components to enhance user interfaces.",
    icon: <MdGridOn size={36} />,
  },
  {
    title: "Bootstrap",
    description:
      "Skilled in using Bootstrap to quickly create responsive and visually appealing web pages. Proficient in customizing Bootstrap components and utilizing its grid system for layout design.",
    icon: <FaBootstrap size={36} />,
  },
];
const Skills = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 770);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 770);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="main-content skills">
      <Timeline id="timeline" position={isMobile ? "right" : "alternate"}>
        {techElements.map((el, index) =>
          !isMobile ? (
            <OppositeTimeline
              key={index}
              title={el.title}
              icon={el.icon}
              description={el.description}
            />
          ) : (
            <BasicTimeline
              key={index}
              title={el.title}
              icon={el.icon}
              description={el.description}
            />
          )
        )}
      </Timeline>
    </div>
  );
};

export default Skills;
