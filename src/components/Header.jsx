import React, { useState } from "react";
import CodeIcon from "@mui/icons-material/Code";
import MenuIcon from "@mui/icons-material/Menu";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="Header">
      <div className="logo-container" onClick={() => navigate("/")}>
        <span>
          <CodeIcon sx={{ color: "white" }} />
        </span>
        <span>Nico Garcia</span>
      </div>
      <div className="tab-menu">
        <Link to="/">Inicio</Link>
        <Link to="proyect/good-seed">Proyectos</Link>
        <Link to="contact">Contacto</Link>
      </div>
      <div className="tab-menu-mobile">
        <MenuIcon
          sx={{ color: "white" }}
          fontSize="large"
          onClick={() => setOpenMenu(!openMenu)}
        ></MenuIcon>
        {openMenu ? (
          <div className="open-menu">
            <Link to="/">Inicio</Link>
            <Link to="proyect/good-seed">Proyectos</Link>
            <Link to="contact">Contacto</Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
