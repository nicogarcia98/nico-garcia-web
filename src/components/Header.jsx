import React, { useState } from "react";
import CodeIcon from "@mui/icons-material/Code";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [option, setOption] = useState("");

  const handleClick = (option) => {
    setOption(option);
  };

  return (
    <div className="Header">
      <div className="logo-container">
        <span>
          <CodeIcon sx={{ color: "white" }} />
        </span>
        <span>Portfolio</span>
      </div>
      <div className="tab-menu">
        <Link to="about-me">Sobre mí</Link>
        <Link to="proyect/good-seed">Proyectos</Link>
        <Link to="experience">Experiencia</Link>
        <Link to="technologies">Tecnologías</Link>
      </div>
    </div>
  );
}
