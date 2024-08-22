import {
Box,
Grid,
Container,
Typography,
ListItem,
Link,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";
import React from "react";

const Footer = () => {
  return (
    <Box className="back">
      <Box className="Footerimg-1"></Box>
      <Box className="Footerimg-2"></Box>

      <Box
        sx={{ background: "#1F1F1F", marginTop: "50px", paddingY: "49px" }}
        className="footer-back-img">
        <Container maxWidth={"lg"} sx={{ padding: "" }}>
          <Grid container component="footer">
            {/* First Part */}
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              lg={4}
              sx={{ padding: "0px 10px" }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#FFFFFF",
                  fontSize: "21px",
                  padding: "0px",
                  paddingBottom: "30px",
                }}
              >
                PIXAVALUT
              </Typography>
              {/* <ListItem sx={{ color: "#D9D9D9", fontSize: "20px", padding: "15px 0px" }}>Social Media</ListItem> */}
              <Box>
                <Typography
                  sx={{
                    color: "#D9D9D9",
                    textAlign: "left",
                    paddingBottom: "18px",
                  }}
                >
                  Over 4.6 million+ high quality stock images, videos and music
                  shared by our talented community.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignContent: "center" }}>
                <Typography sx={{ color: "#ffffff", marginRight: "18px" }}>
                  FOLLOW US
                </Typography>
                <Box>
                  <Link href="#" sx={{ padding: "0px 10px 0px 0px" }}>
                    <InstagramIcon
                      sx={{
                        background:
                          "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                        color: "white",
                        borderRadius: "6px",
                      }}
                    />
                  </Link>
                  <Link href="#" sx={{ padding: "0px 5px" }}>
                    <FacebookIcon sx={{ color: 'white' }} />
                  </Link>
                  <Link href="#" sx={{ padding: "0px 5px" }}>
                    <XIcon />
                  </Link>
                  <Link href="#" sx={{ padding: "0px 5px" }}>
                    <PinterestIcon />
                  </Link>
                </Box>
              </Box>
            </Grid>

            {/* Second Part */}
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Typography
                variant="body2"
                sx={{
                  color: "#FFFFFF",
                  fontSize: "21px",
                  padding: "0px",
                  paddingBottom: "30px",
                }}
              >
                Discover
              </Typography>
              <Box>
                <ListItem sx={{ padding: "0px 0px 10px 0px" }}>
                  <Link
                    className="hover"
                    href=""
                    sx={{ textDecoration: "none", color: "#D9D9D9" }}
                  >
                    Popular Images
                  </Link>
                </ListItem>
                <ListItem sx={{ padding: "10px 0px" }}>
                  <Link
                    className="hover"
                    href=""
                    sx={{ textDecoration: "none", color: "#D9D9D9" }}
                  >
                    Popular Vectors
                  </Link>
                </ListItem>
                <ListItem sx={{ padding: "10px 0px" }}>
                  <Link
                    className="hover"
                    href=""
                    sx={{ textDecoration: "none", color: "#D9D9D9" }}
                  >
                    Popular Templates
                  </Link>
                </ListItem>
                <ListItem sx={{ padding: "10px 0px" }}>
                  <Link
                    className="hover"
                    href=""
                    sx={{ textDecoration: "none", color: "#D9D9D9" }}
                  >
                    Popular Templates
                  </Link>
                </ListItem>
                <ListItem sx={{ padding: "10px 0px" }}>
                  <Link
                    className="hover"
                    href=""
                    sx={{ textDecoration: "none", color: "#D9D9D9" }}
                  >
                    Editor’s Choice
                  </Link>
                </ListItem>
              </Box>
            </Grid>

            {/* Third Part */}
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Typography
                variant="body2"
                sx={{
                  color: "#FFFFFF",
                  fontSize: "21px",
                  padding: "0px",
                  paddingBottom: "30px",
                }}
              >
                Community
              </Typography>
              <Box>
                <ListItem sx={{ padding: "0px 0px 10px 0px" }}>
                  <Link
                    className="hover"
                    href=""
                    sx={{ textDecoration: "none", color: "#D9D9D9" }}
                  >
                    Blog
                  </Link>
                </ListItem>
                <ListItem sx={{ padding: "10px 0px" }}>
                  <Link
                    className="hover"
                    href=""
                    sx={{ textDecoration: "none", color: "#D9D9D9" }}
                  >
                    Creators
                  </Link>
                </ListItem>
                <ListItem sx={{ padding: "10px 0px" }}>
                  <Link
                    className="hover"
                    href=""
                    sx={{ textDecoration: "none", color: "#D9D9D9" }}
                  >
                    Privacy Policy
                  </Link>
                </ListItem>
                <ListItem sx={{ padding: "10px 0px" }}>
                  <Link
                    className="hover"
                    href=""
                    sx={{ textDecoration: "none", color: "#D9D9D9" }}
                  >
                    Cookie Policy
                  </Link>
                </ListItem>
                <ListItem sx={{ padding: "10px 0px" }}>
                  <Link
                    className="hover"
                    href=""
                    sx={{ textDecoration: "none", color: "#D9D9D9" }}
                  >
                    Terms of Service
                  </Link>
                </ListItem>
                <ListItem sx={{ padding: "10px 0px" }}>
                  <Link
                    className="hover"
                    href=""
                    sx={{ textDecoration: "none", color: "#D9D9D9" }}
                  >
                    About Us
                  </Link>
                </ListItem>
              </Box>
            </Grid>

            {/* Fourth Part */}
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <Typography
                variant="body2"
                sx={{
                  color: "#FFFFFF",
                  fontSize: "21px",
                  padding: "0px",
                  paddingBottom: "30px",
                }}
              >
                About
              </Typography>
              <Box>
                <ListItem sx={{ padding: "0px 0px 10px 0px" }}>
                  <Link
                    className="hover"
                    href=""
                    sx={{ textDecoration: "none", color: "#D9D9D9" }}
                  >
                    FAQ
                  </Link>
                </ListItem>
                <ListItem sx={{ padding: "10px 0px" }}>
                  <Link
                    className="hover"
                    href=""
                    sx={{ textDecoration: "none", color: "#D9D9D9" }}
                  >
                    Contact Us
                  </Link>
                </ListItem>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
