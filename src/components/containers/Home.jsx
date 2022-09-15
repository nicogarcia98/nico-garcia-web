import React, { useEffect } from "react";
import "./containers.css";
import CV from "../../assets/cv1.jpg";
import reactIcon from "../../assets/react-icon.svg";
import ExperienceCard from "../cards/ExperienceCard";

import { proyectos, skillTypes, skills } from "../../services/data.js";

export default function Home() {
  useEffect(() => {
    skills.sort((a, b) => {
      let comparison = 0;
      if (a.level == "Global") {
        comparison = -1;
      }
      if (b.level == "Global") {
        comparison = 1;
      }

      return comparison;
    });
  }, []);

  return (
    <div className="container">
      <div className="about-me">
        <div className="text-container">
          <h1>I'm Nicolas Garcia</h1>
          <p>
            Soy desarrollador de software y este es mi portfolio. Acá se
            encuentra todo mi viaje como developer
          </p>
        </div>
        <img src={CV} />
      </div>
      <div className="tools">
        <h1>Conocimientos y Herramientas</h1>
        <div className="skill-types-list">
          <ul className="skills-list">
            {skills
              .filter((x) => x.level != "Basic")
              .map((skill) => {
                return (
                  <li className="skill-container">
                    <div class="icon-container">
                      <img src={skill.src} style={{ maxWidth: "50px" }} />
                    </div>
                    <span>{skill.name}</span>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className="experience">{/* <ExperienceCard /> */}</div>
    </div>
  );
}
