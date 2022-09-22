import React from "react";
import Carousel from "react-material-ui-carousel";
import ProyectCard from "./ProyectCard.jsx";
import "./cards.scss";
import { Paper } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderCard({ proyectos }) {
  const CarouselConfig = {
    focusOnSelect: true,
    arrows: true,
    dots: false,
    centerMode: true,
    draggable: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "10px",
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "slider",
  };

  return (
    <Slider {...settings}>
      {proyectos?.map((proy, index) => {
        return (
          <ProyectCard
            key={index}
            proyect={proy}
            className="proyect-card-container"
          ></ProyectCard>
        );
      })}
    </Slider>
  );
}
