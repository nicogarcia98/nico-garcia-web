import React, { useEffect, useRef } from "react";
import "./containers.scss";
import CV from "../../assets/cv1.jpg";
import StarsIcon from "@mui/icons-material/Stars";
import reactIcon from "../../assets/react-icon.svg";
import ExperienceCard from "../cards/ExperienceCard";

import {
  proyectos,
  skillTypes,
  skills,
  experiences,
} from "../../services/data.js";
import { amber, grey } from "@mui/material/colors";
import SliderCard from "../cards/SliderCard";

export default function Home() {
  const recognitionColor = amber[300];
  const wantToWorkColor = grey[200];

  useEffect(() => {}, []);

  return (
    <div className="container">
      <div className="about-me">
        <div className="text-container">
          <h1>I'm Nicolas Garcia</h1>
          <p>
            Desde que elegí la especialidad de "Técnico en Informática" en el
            secundario estoy desarrollandome en el mundo IT.<br></br> La
            tecnología es algo que me encanta. Llevo mas de 2 años desarrollando
            software con distintos equipos de desarrollo. Adaptandome
            eficientemente a cada grupo.<br></br> Como persona motivada y
            proactiva, soy capaz de adaptarme a cualquier circunstancia dando lo
            mejor de mi y con el mejor humor. Fomento valores como el trabajo en
            equipo y el compañerismo. Me considero una persona que sabe
            aprender.
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
              .map((skill, index) => {
                return (
                  <li key={index} className="skill-container">
                    <div style={{ height: "20px", whidth: "100%" }}>
                      {skill.recognition ? (
                        <span className="recognition">
                          <StarsIcon
                            sx={{ color: recognitionColor }}
                            fontSize="small"
                          />
                          <span className="recognition-text">
                            {skill.recognitionText}
                          </span>
                        </span>
                      ) : (
                        <></>
                      )}
                      {skill.wantToWork ? (
                        <span className="recognition">
                          <StarsIcon
                            sx={{ color: wantToWorkColor }}
                            fontSize="small"
                          />
                        </span>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="icon-container">
                      <img src={skill.src} style={{ maxWidth: "50px" }} />
                    </div>
                    <span style={{ maxHeight: "30px", whiteSpace: "nowrap" }}>
                      {skill.name}
                    </span>
                  </li>
                );
              })}
          </ul>
          <div className="clarifications-container">
            <div className="clarification">
              <StarsIcon sx={{ color: recognitionColor }} fontSize="small" />
              <span>Reconocimientos</span>
            </div>
            <div className="clarification">
              <StarsIcon sx={{ color: wantToWorkColor }} fontSize="small" />
              <span>Deseo Trabajar</span>
            </div>
          </div>
        </div>
      </div>
      <div className="experience">
        <h1>Experiencia Profesional</h1>
        {experiences.map((exp, index) => {
          return <ExperienceCard key={index} experience={exp} />;
        })}
      </div>
      <div className="proyects">
        <h1>Proyectos</h1>
        <SliderCard proyectos={proyectos}></SliderCard>
      </div>
    </div>
  );
}
