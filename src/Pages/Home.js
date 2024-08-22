import { Box, Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";

// slick slider css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";

// web component import
import Image from "../utilities/Images";
import gallary from "../utilities/images/home/img5.jpg";
import photos from "../utilities/images/home/img6.jpg";
import photo from "../utilities/images/home/img7.jpg";
import img8 from "../utilities/images/home/img8.jpg";
import img9 from "../utilities/images/home/img9.jpg";
import img10 from "../utilities/images/home/img10.jpg";
import img11 from "../utilities/images/home/img11.jpg";
import img12 from "../utilities/images/home/img12.jpg";
import img13 from "../utilities/images/home/img13.jpg";
import img14 from "../utilities/images/home/img14.jpg";
import img15 from "../utilities/images/home/img15.jpg";
import img16 from "../utilities/images/home/img16.jpg";
import img17 from "../utilities/images/home/img17.jpg";
import img18 from "../utilities/images/home/img18.jpg";
import img19 from "../utilities/images/home/img19.jpg";
import img20 from "../utilities/images/home/img20.jpg";
import img21 from "../utilities/images/home/img21.jpg";
import img22 from "../utilities/images/home/img22.jpg";

const Home = () => {
  const popularFree = [
    {
      img: img8,
    },
    {
      img: img9,
    },
    {
      img: img11,
    },
    {
      img: img10,
    },
    {
      img: img12,
    },
  ];

  const trendingPhotos = [
    {
      img: img13,
    },
    {
      img: img16,
    },
    {
      img: img15,
    },
    {
      img: img17,
    },
    {
      img: img14,
    },
  ];

  const popularVector = [
    {
      img: img18,
    },
    {
      img: img21,
    },
    {
      img: img19,
    },
    {
      img: img20,
    },
    {
      img: img22,
    },
  ];

  return (
    <Box>
      {/* Header component */}

      <Box>
        <Box>
          <Grid sx={{ width: "100%" }}>
            <Grid xs={12} sx={{ padding: "0px" }}>
              <Box sx={{ width: "100%", height: "100vh" }}>
                <Box className="Image-1 center" sx={{width: '100%'}}>
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

      {/* browser by content type */}

      <Box>
        <Typography
          sx={{
            fontSize: "36px",
            textAlign: "center",
            fontWeight: "bold",
            p: "80px 0px 30px 0px",
          }}
        >
          Browse by Content Type
        </Typography>

        <Container
          maxWidth="lg"
          sx={{ paddingLeft: "25px", paddingRight: "24px" }}
        >
          <Grid container spacing={4}>
            <Grid item xs={4} sm={12} md={8} lg={4}>
              <img src={gallary} alt="" width={"100%"} />
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: "BOLD",
                  padding: "19px 0px 0px 0px",
                }}
              >
                Photos
              </Typography>
            </Grid>
            <Grid item xs={4} sm={12} md={8} lg={4}>
              <img src={photos} alt="" width={"100%"} />
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: "BOLD",
                  padding: "19px 0px 0px 0px",
                }}
              >
                Vector
              </Typography>
            </Grid>
            <Grid item xs={4} sm={12} md={8} lg={4}>
              <img src={photo} alt="" width={"100%"} />
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: "BOLD",
                  padding: "19px 0px 0px 0px",
                }}
              >
                Template
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* popular free photos */}

      <Container
        maxWidth="lg"
        sx={{ paddingLeft: "25px", paddingRight: "24px" }}
      >
        <Typography
          sx={{
            fontSize: "36px",
            textAlign: "center",
            fontWeight: "bold",
            p: "80px 0px 30px 0px",
          }}
        >
          Popular Free Photos
        </Typography>

        <Image Data={popularFree} />
      </Container>

      {/* trending photo this week */}

      <Container
        maxWidth="lg"
        sx={{ paddingLeft: "25px", paddingRight: "24px" }}
      >
        <Typography
          sx={{
            fontSize: "36px",
            textAlign: "center",
            fontWeight: "bold",
            p: "80px 0px 30px 0px",
          }}
        >
          Trending Photos This Week
        </Typography>

        <Image Data={trendingPhotos} />
      </Container>

      {/* popular vector  */}

      <Container
        maxWidth="lg"
        sx={{ paddingLeft: "25px", paddingRight: "24px" }}
      >
        <Typography
          sx={{
            fontSize: "36px",
            textAlign: "center",
            fontWeight: "bold",
            p: "80px 0px 30px 0px",
          }}
        >
          Popular Vector
        </Typography>

        <Image Data={popularVector} />
      </Container>
    </Box>
  );
};

export default Home;
