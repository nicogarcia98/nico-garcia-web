import { Container, Paper } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { proyectos, skills } from "../../services/data";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Proyect() {
  let { id } = useParams();
  let navigate = useNavigate();
  const [proyect, setProyect] = useState(null);
  const [indexProyect, setIndexProyect] = useState();

  useEffect(() => {
    if (proyect == null) setProyect(proyectos.find((x) => x.id == id));
    setIndexProyect(proyectos.indexOf(proyect));
  }, [proyect]);

  const nextProyect = () => {
    navigate("../proyect/" + proyectos[proyectos.indexOf(proyect) + 1].id, {
      replace: true,
    });
    setProyect(proyectos[proyectos.indexOf(proyect) + 1]);
  };
  const prevProyect = () => {
    navigate("../proyect/" + proyectos[proyectos.indexOf(proyect) - 1].id, {
      replace: true,
    });
    setProyect(proyectos[proyectos.indexOf(proyect) - 1]);
  };

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        height: "calc(100% - 80px)",
        alignItems: "center",
      }}
      className="animate-container"
    >
      <div className="proyect__container">
        <div className="header__proyect">
          <span
            onClick={prevProyect}
            tabIndex={0}
            className={
              proyectos[indexProyect - 1] ? "enabled-item" : "disabled-item"
            }
          >
            <ArrowBackIosIcon />
            <label>{proyectos[indexProyect - 1]?.name}</label>
          </span>
          <h1>{proyect?.name}</h1>
          <span
            onClick={nextProyect}
            tabIndex={0}
            className={`${
              proyectos[indexProyect + 1] ? "enabled-item" : "disabled-item"
            }`}
          >
            <label style={{ paddingLeft: "5px" }}>
              {proyectos[indexProyect + 1]?.name}
            </label>
            <ArrowForwardIosIcon />
          </span>
        </div>
        <div className="body__proyect">
          <div className="description">
            <span>{proyect?.description}</span>
            {proyect?.demos?.map((demo) => {
              return (
                <video controls width="300" className="video-container">
                  <source src={demo} type="video/webm"></source>
                </video>
              );
            })}
            {/*             <ul>
              {skills
                .filter((x) => proyect?.tecnologies.includes(x.name))
                .map((skill) => {
                  return (
                    <li className="skill-container" style={{ height: "100px" }}>
                      <div className="icon-container">
                        <img src={skill.src} style={{ maxWidth: "40px" }} />
                      </div>
                      <span style={{ maxHeight: "30px" }}>{skill.name}</span>
                    </li>
                  );
                })
            </ul>*/}
          </div>
          <div
            className={`images ${proyect?.type == "mobile" ? "mobile" : "web"}`}
          >
            {proyect?.images.map((img) => {
              return (
                <img
                  src={img}
                  style={{
                    maxWidth: "300px",
                    maxHeight: "250px",
                    fitObject: "contain",
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}
