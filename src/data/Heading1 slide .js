import React from "react";
import styled from "@emotion/styled";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  useMediaQuery,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import card1 from "../assets/card1.webp";

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

// ... (previous imports and styles)

const Heading = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
  };

  // const cardData = [
  //   {
  //     id: 1,
  //     title: "Shimla Manali",
  //     image: card1,
  //     buttonText: "Explore Now",
  //   },
  //   {
  //     id: 2,
  //     title: "Hill Stations",
  //     image: card1,
  //     buttonText: "Discover More",
  //   },
  //   {
  //     id: 3,
  //     title: "Adventure el",
  //     image: card1,
  //     buttonText: "Plan Your...",
  //   },
    
  // ];

  return (
    <StyleBox>
      {/* <Slider {...settings}>
        {cardData.map((card) => (
          <Card
            key={card.id}
            sx={{
              maxWidth: isMobile ? 300 : 200,
              borderRadius: "8px",
              overflow: "hidden",
              margin: isMobile ? "10px" : "20px",
              marginBottom: "20px", // Add margin bottom here
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <CardMedia
              sx={{
                height: isMobile ? 150 : 200, // Adjusted height for better aesthetics
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
              image={card.image}
              title={card.title}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="primary"
              >
                {card.title}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center", paddingBottom: "20px" }}>
              <Button size="small" color="primary">
                {card.buttonText}
              </Button>
            </CardActions>
          </Card>
        ))}
      </Slider> */}
    </StyleBox>
  );
};

export default Heading;
