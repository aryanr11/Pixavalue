import { Box, Link, Container, Typography, Grid } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import DataObjectIcon from "@mui/icons-material/DataObject";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { useState } from "react";
import Image from "../utilities/Images";

// images import?
import img1 from "../utilities/images/explore/img1.jpg";
import img2 from "../utilities/images/explore/img2.jpg";
import img3 from "../utilities/images/explore/img3.jpg";
import img4 from "../utilities/images/explore/img4.jpg";
import img5 from "../utilities/images/explore/img5.jpg";
import img6 from "../utilities/images/explore/img6.jpg";
import img7 from "../utilities/images/explore/img7.jpg";
import img8 from "../utilities/images/explore/img8.jpg";
import img9 from "../utilities/images/explore/img9.jpg";
import img10 from "../utilities/images/explore/img10.jpg";
import img11 from "../utilities/images/explore/img11.jpg";
import img12 from "../utilities/images/explore/img12.jpg";
import img13 from "../utilities/images/explore/img13.jpg";
import img14 from "../utilities/images/explore/img14.jpg";
import img15 from "../utilities/images/explore/img15.jpg";
import img16 from "../utilities/images/explore/img16.jpg";
import img17 from "../utilities/images/explore/img17.jpg";
import img18 from "../utilities/images/explore/img18.jpg";
import img19 from "../utilities/images/explore/img19.jpg";
import img20 from "../utilities/images/explore/img20.jpg";
import React from "react";

const Data = [
  {
    img: img1,
  },
  {
    img: img2,
  },
  {
    img: img3,
  },
  {
    img: img4,
  },
  {
    img: img5,
  },
  {
    img: img6,
  },
  {
    img: img7,
  },
  {
    img: img8,
  },
  {
    img: img9,
  },
  {
    img: img10,
  },
  {
    img: img11,
  },
  {
    img: img12,
  },
  {
    img: img13,
  },
  {
    img: img14,
  },
  {
    img: img15,
  },
  {
    img: img16,
  },
  {
    img: img17,
  },
  {
    img: img18,
  },
  {
    img: img19,
  },
  {
    img: img20,
  },
];

const Explore = () => {
  const [home, sethome] = useState([
    {
      name: "Home",
      icon: <HomeIcon sx={{ marginRight: "5px", fontSize: "24px" }} />,
    },
    {
      name: "Photos",
      icon: <CameraAltIcon sx={{ marginRight: "5px", fontSize: "24px" }} />,
    },
    {
      name: "Vector",
      icon: <DataObjectIcon sx={{ marginRight: "5px", fontSize: "24px" }} />,
    },
    {
      name: "Template",
      icon: <NewspaperIcon sx={{ marginRight: "5px", fontSize: "24px" }} />,
    },
  ]);

  const [catagory, setcatagory] = useState([
    { name: "All" },
    { name: "Agriculture" },
    { name: "Dark" },
    { name: "wedding images" },
    { name: "festival" },
    { name: "Forts" },
    { name: "Flower" },
    { name: "Sport" },
    { name: "Vegitable" },
    { name: "Ruins" },
    { name: "Butterfly" },
    { name: "Heart" },
    { name: "House" },
  ]);

  return (
    <Box>
      <Box>
        <Box>
          <Grid sx={{ width: "100%" }}>
            <Grid xs={12} sx={{ padding: "0px" }}>
              <Box sx={{ width: "100%" }}>
                <Box className="Image-2 center">
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      width: "55%",
                      fontSize: "36px",
                      textAlign: "center",
                      fontWeight: "bolder",
                    }}
                  >
                    Download Free Vectors, Stock Photos, Stock Videos, and More
                  </Typography>
                  <Box>
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        fontSize: "16px",
                        paddingTop: "5px",
                        fontWeight: "300 !important",
                      }}
                    >
                      High-quality photos, vectors, template...to go from ideas
                      to outstanding designs
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {home.map((e) => {
          return (
            <Link
              href=""
              sx={{
                textDecoration: "none",
                color: "black",
                fontSize: "16px",
                textAlign: "center",
                padding: "50px 10px 0px 10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {e.icon}
              {e.name}
            </Link>
          );
        })}
      </Box>

      {/* choosen image catagory */}

      <Box
        sx={{
          textAlign: "center",
          paddingTop: "50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {catagory.map((el) => {
          return (
            <Link
              href="#"
              sx={{
                textDecoration: "none",
                marginLeft: "10px",
                border: "1px solid #CCCBCB",
                color: "black",
                padding: "2px 10px",
              }}
            >
              {el.name}
            </Link>
          );
        })}
      </Box>

      <Container
        maxWidth="lg"
        sx={{ paddingTop: "30px 24px 0px 24px", marginTop: "50px" }}>
        <Image Data={Data} />
      </Container>
    </Box>
  );
};

export default Explore;
