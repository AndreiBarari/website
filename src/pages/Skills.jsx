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
      "Lorem ipsum dolor solor solor solor solor solor solor solor solor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.",
    icon: <FaHtml5 size={36} />,
  },
  {
    title: "CSS3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.",
    icon: <FaCss3 size={36} />,
  },
  {
    title: "JavaScript",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.",
    icon: <FaJs size={36} />,
  },
  {
    title: "NodeJS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.",
    icon: <FaNodeJs size={36} />,
  },
  {
    title: "ExpressJS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.",
    icon: <AiOutlineCode size={36} />,
  },
  {
    title: "MongoDB",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.",
    icon: <FaServer size={36} />,
  },
  {
    title: "ReactJS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.",
    icon: <FaReact size={36} />,
  },
  {
    title: "Scss/Sass",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.",
    icon: <FaSass size={36} />,
  },
  {
    title: "MaterialUI",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.",
    icon: <MdGridOn size={36} />,
  },
  {
    title: "Bootstrap",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.",
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
