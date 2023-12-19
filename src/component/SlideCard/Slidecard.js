import React from "react";
import Slider from "react-slick";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
  styled,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledCard = styled(Card)({
  maxWidth: 350,
  borderRadius: 16,
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const StyledCardMedia = styled(CardMedia)({
  height: 140,
  objectFit: "cover",
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
});

const Slidecard = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <Button>Next</Button>,
    prevArrow: <Button>Prev</Button>,
  };

  const sliderStyle = {
    padding: "20px", // Adjust padding as needed
    margin: "auto",
  };

  return (
    <Slider {...settings} style={sliderStyle}>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item}>
          <StyledCard>
            <CardActionArea>
              <StyledCardMedia
                component="img"
                image="https://img.veenaworld.com/group-tours/india/himachal-pradesh/hpsl/bnn-HPSL-2112023.jpg"
                alt="Lizard"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with
                  over 6,000 species, ranging across all continents except
                  Antarctica.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </StyledCard>
        </div>
      ))}
    </Slider>
  );
};

export default Slidecard;
