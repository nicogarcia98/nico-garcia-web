import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  ExpandMore,
  Collapse,
} from "@mui/material";
import { ExpandMoreIcon } from "@mui/icons-material";
import React, { useState } from "react";
import "./cards.scss";
import "../containers/containers.css";
import { skills } from "../../services/data";

export default function ExperienceCard({ experience }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <Card className="experience-card-container" style={{ margin: "30px 0px" }}>
      <CardMedia
        component="img"
        style={{ maxHeight: "120px", objectFit: "contain", margin: "15px 0px" }}
        image={experience.logo}
      />
      <CardContent className="description">
        <Typography className="job-position">{experience.position}</Typography>
        <Typography className="description-text">
          {experience.description}
        </Typography>
      </CardContent>
      <CardActions className="card-actions">
        {readMore ? (
          <Button
            onClick={() => setReadMore(!readMore)}
            sx={{ color: "#e14631" }}
          >
            - Ver menos
          </Button>
        ) : (
          <Button
            onClick={() => setReadMore(!readMore)}
            sx={{ color: "#e14631" }}
          >
            + Ver más
          </Button>
        )}
      </CardActions>

      <Collapse in={readMore} timeout={200} className="collapse">
        <ul className="skills-list">
          {skills
            .filter((x) => x.companies.includes(experience.company))
            .map((skill, index) => {
              return (
                <li key={index} className="skill-container">
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
      </Collapse>
    </Card>
  );
}
