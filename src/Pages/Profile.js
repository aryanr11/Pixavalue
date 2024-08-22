import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "../utilities/Images";
// images
import img1 from "../utilities/images/ProfileImages/img1.jpg";
import React from "react";

import {
  // BrowserRouter as Router,
  Link,
} from "react-router-dom";

const Profile = () => {
  const catagory = [
    { name: "All" },
    { name: "Photos" },
    { name: "Vedios" },
    { name: "Template" },
  ];

  return (
    <Box>
      <Box sx={{ width: "100%", height: "144.5px", background: "black" }}></Box>
      <Container maxWidth="lg" sx={{ marginTop: "54px" }}>
        <Box>
          <Grid container>
            <Grid xs={2} sx={{ display: "flex" }}>
              <Box>
                <img src={img1} alt="" width={"100%"} />
              </Box>
            </Grid>
            <Grid xs={7}>
              <Box sx={{ marginLeft: "65px" }}>
                <Typography
                  variant="h4"
                  sx={{ marginBottom: "14px", fontWeight: "600" }}
                >
                  George Bailey
                </Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  Senior Product Designer (UI/UX) | Content Strategist
                </Typography>

                <Box>
                  <Typography sx={{ padding: "10px 24px 0px 0px" }}>
                    Your visit was a delightful surprise, and we can't thank you
                    enough for taking the time to come see us. Your presence
                    added a special touch to our day.” “We're truly grateful for
                    your visit. Your time and company meant a lot to us, and we
                    cherished the moments we spent together.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          style={{
            textAlign: "center",
            padding: "50px 12px 10px",
            display: "flex",
          }}
        >
          {catagory.map((el) => {
            return (
              <Link
                href="#"
                style={{
                  textDecoration: "none",
                  marginLeft: "10px",
                  border: "1px solid #CCCBCB",
                  color: "black",
                  padding: "2px 12.5px",
                }}
              >
                {el.name}
              </Link>
            );
          })}
        </Box>

        <Container
          maxWidth="lg"
          sx={{ paddingTop: "30px 24px 0px 24px", marginTop: "10px" }}
        >
          <Image Data={itemData} />
        </Container>
      </Container>
    </Box>
  );
};

export default Profile;

const itemData = [
  {
    img: require("../utilities/images/ProfileImages/img.1.jpg"),
  },
  {
    img: require("../utilities/images/ProfileImages/img10.jpg"),
  },
  {
    img: require("../utilities/images/ProfileImages/img9.jpg"),
  },
  {
    img: require("../utilities/images/ProfileImages/img12.jpg"),
  },
  {
    img: require("../utilities/images/ProfileImages/img15.jpg"),
  },
  {
    img: require("../utilities/images/ProfileImages/img2.jpg"),
  },

  {
    img: require("../utilities/images/ProfileImages/img5.jpg"),
  },
  {
    img: require("../utilities/images/ProfileImages/img7.jpg"),
  },
  {
    img: require("../utilities/images/ProfileImages/img10.jpg"),
  },
  {
    img: require("../utilities/images/ProfileImages/img13.jpg"),
  },
  {
    img: require("../utilities/images/ProfileImages/img16.jpg"),
  },
  {
    img: require("../utilities/images/ProfileImages/img3.jpg"),
  },
  {
    img: require("../utilities/images/ProfileImages/img4.jpg"),
  },
  {
    img: require("../utilities/images/ProfileImages/img8.jpg"),
  },
  {
    img: require("../utilities/images/ProfileImages/img11.jpg"),
  },
  {
    img: require("../utilities/images/ProfileImages/img14.jpg"),
  },
  {
    img: require("../utilities/images/ProfileImages/img17.jpg"),
  },
];
