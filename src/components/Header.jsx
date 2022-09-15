import React, { useState } from "react";
import CodeIcon from "@mui/icons-material/Code";
import "./styles.css";

export default function Header() {
  const [option, setOption] = useState(false);

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
        <a onClick={() => handleClick("about-me")}>Sobre mí</a>
        <a onClick={() => handleClick("proyects")}>Proyectos</a>
        <a onClick={() => handleClick("experience")}>Experiencia</a>
        <a onClick={() => handleClick("technologies")}>Tecnologías</a>
      </div>
    </div>
  );
}
