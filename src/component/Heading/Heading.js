import React from "react";
import styled from "@emotion/styled";
import { Box, useMediaQuery } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyleBox = styled(Box)({
  backgroundImage: `url("https://img.freepik.com/free-vector/time-travel-vector-flyer-with-white-copy-space-sky-with-airplane_134830-1061.jpg?w=1380&t=st=1702963676~exp=1702964276~hmac=f6d0bb12cdc0eb7bc5aacc2d1a9104e794c1de8d4d8a47c0cf31c6e0deaec486")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
  padding: "20px",
  textAlign: "center",
  width: "100%",
  height: "600px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  opacity: "0.4",
  borderRadius: "10px",
  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
});

const Heading = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
  };

  return (
    <StyleBox>
      <Slider {...settings}>
        <div>
          <h3>lorm</h3>
        </div>
        <div>
          <h3>Slide 2</h3>
        </div>
        <div>
          <h3>Slide 3</h3>
        </div>
      </Slider>
    </StyleBox>
  );
};

export default Heading;
