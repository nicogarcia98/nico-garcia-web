import React from "react";
import "./cards.scss";
import CV from "../../assets/cv1.jpg";
import { Button, Typography } from "@mui/material";

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
            <Button>+ Informacion</Button>
          </span>
        </div>
      </div>
    </>
  );
}
