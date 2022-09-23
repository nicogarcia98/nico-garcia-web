import React from "react";
import "./cards.scss";
import CV from "../../assets/cv1.jpg";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function ProyectCard({ proyect }) {
  return (
    <>
      <div className="box">
        <h2>{proyect.name}</h2>
        <div className="img-container">
          <img src={proyect.logo}></img>
        </div>
        <div className="overlay">
          <span>
            <Typography>{proyect.description}</Typography>
            <Button
              component={Link}
              to={"/proyect/" + proyect?.id}
              sx={{ color: "#e14631" }}
            >
              + Información
            </Button>
          </span>
        </div>
      </div>
    </>
  );
}
